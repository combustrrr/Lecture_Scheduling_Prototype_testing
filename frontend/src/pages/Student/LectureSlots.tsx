import { useState, useEffect } from 'react';
import { lectureSlotsAPI, enrollmentsAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { Calendar, Clock, MapPin, Users, AlertTriangle, CheckCircle, XCircle, User, BookOpen, Filter, Search } from 'lucide-react';
import toast from 'react-hot-toast';

interface LectureSlot {
  _id: string;
  subjectName: string;
  facultyId: {
    name: string;
    email: string;
  };
  venue: string;
  capacity: number;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  description?: string;
  isRecurring: boolean;
  enrolledCount: number;
  waitlistedCount: number;
  availableSpots: number;
  isFull: boolean;
}

const LectureSlots = () => {
  const { user, isAuthenticated } = useAuth();
  const [lectureSlots, setLectureSlots] = useState<LectureSlot[]>([]);
  const [filteredSlots, setFilteredSlots] = useState<LectureSlot[]>([]);
  const [myEnrollments, setMyEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [enrollmentLoading, setEnrollmentLoading] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    day: '',
    faculty: '',
    status: 'all', // all, available, full, enrolled, waitlisted
  });

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterSlots();
  }, [lectureSlots, myEnrollments, searchTerm, filters]);

  const fetchData = async () => {
    try {
      const [slotsResponse, enrollmentsResponse] = await Promise.all([
        lectureSlotsAPI.getLectureSlots(),
        isAuthenticated && user?.role === 'student' 
          ? enrollmentsAPI.getMyTimetable() 
          : Promise.resolve({ data: { data: { enrollments: [] } } })
      ]);

      setLectureSlots(slotsResponse.data.data);
      setMyEnrollments(enrollmentsResponse.data.data?.enrollments || []);
    } catch (error) {
      toast.error('Failed to fetch lecture slots');
    } finally {
      setLoading(false);
    }
  };

  const filterSlots = () => {
    let filtered = lectureSlots.filter((slot) => {
      const matchesSearch = 
        slot.subjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        slot.facultyId.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        slot.venue.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDay = !filters.day || slot.dayOfWeek.toString() === filters.day;
      const matchesFaculty = !filters.faculty || slot.facultyId._id === filters.faculty;

      // Status filter
      let matchesStatus = true;
      if (filters.status !== 'all') {
        const enrollment = myEnrollments.find(e => e.lectureSlotId._id === slot._id);
        
        switch (filters.status) {
          case 'available':
            matchesStatus = !slot.isFull && !enrollment;
            break;
          case 'full':
            matchesStatus = slot.isFull;
            break;
          case 'enrolled':
            matchesStatus = enrollment?.status === 'enrolled';
            break;
          case 'waitlisted':
            matchesStatus = enrollment?.status === 'waitlisted';
            break;
        }
      }

      return matchesSearch && matchesDay && matchesFaculty && matchesStatus;
    });

    setFilteredSlots(filtered);
  };

  const getEnrollmentStatus = (slot: LectureSlot) => {
    const enrollment = myEnrollments.find(e => e.lectureSlotId._id === slot._id);
    
    if (enrollment) {
      return {
        status: enrollment.status,
        position: enrollment.position,
        canDrop: true
      };
    }

    if (slot.isFull) {
      return {
        status: 'full',
        canEnroll: false
      };
    }

    return {
      status: 'available',
      canEnroll: true
    };
  };

  const handleEnrollment = async (slotId: string, action: 'enroll' | 'drop') => {
    if (!isAuthenticated) {
      toast.error('Please login to enroll in lecture slots');
      return;
    }

    if (user?.role !== 'student') {
      toast.error('Only students can enroll in lecture slots');
      return;
    }

    setEnrollmentLoading(slotId);

    try {
      if (action === 'enroll') {
        const response = await enrollmentsAPI.enrollInSlot(slotId);
        toast.success(response.data.message);
      } else {
        const response = await enrollmentsAPI.dropFromSlot(slotId);
        toast.success(response.data.message);
      }

      // Refresh data
      await fetchData();
    } catch (error: any) {
      toast.error(error.response?.data?.message || `Failed to ${action}`);
    } finally {
      setEnrollmentLoading(null);
    }
  };

  const SlotCard = ({ slot }: { slot: LectureSlot }) => {
    const enrollmentStatus = getEnrollmentStatus(slot);
    const isLoading = enrollmentLoading === slot._id;

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {slot.subjectName}
            </h3>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <User className="h-4 w-4 mr-1" />
              <span>{slot.facultyId.name}</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex flex-col items-end gap-2">
            {enrollmentStatus.status === 'enrolled' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Enrolled
              </span>
            )}
            {enrollmentStatus.status === 'waitlisted' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Waitlisted #{enrollmentStatus.position}
              </span>
            )}
            {enrollmentStatus.status === 'full' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <XCircle className="h-3 w-3 mr-1" />
                Full
              </span>
            )}
            {enrollmentStatus.status === 'available' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Available
              </span>
            )}
          </div>
        </div>

        {/* Schedule Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{days[slot.dayOfWeek]}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{slot.startTime} - {slot.endTime}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{slot.venue}</span>
          </div>
        </div>

        {/* Description */}
        {slot.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {slot.description}
          </p>
        )}

        {/* Enrollment Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            <span>
              {slot.enrolledCount}/{slot.capacity} enrolled
              {slot.waitlistedCount > 0 && ` • ${slot.waitlistedCount} waitlisted`}
            </span>
          </div>
          
          <div className="text-sm">
            {slot.availableSpots > 0 ? (
              <span className="text-green-600 font-medium">
                {slot.availableSpots} spots left
              </span>
            ) : (
              <span className="text-red-600 font-medium">
                Full
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        {isAuthenticated && user?.role === 'student' && (
          <div className="flex gap-2">
            {enrollmentStatus.canEnroll && (
              <button
                onClick={() => handleEnrollment(slot._id, 'enroll')}
                disabled={isLoading}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mx-auto"></div>
                ) : (
                  'Enroll'
                )}
              </button>
            )}
            
            {enrollmentStatus.canDrop && (
              <button
                onClick={() => handleEnrollment(slot._id, 'drop')}
                disabled={isLoading}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mx-auto"></div>
                ) : (
                  'Drop'
                )}
              </button>
            )}

            {!enrollmentStatus.canEnroll && !enrollmentStatus.canDrop && slot.isFull && (
              <button
                onClick={() => handleEnrollment(slot._id, 'enroll')}
                disabled={isLoading}
                className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mx-auto"></div>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            )}
          </div>
        )}

        {!isAuthenticated && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              Please login as a student to enroll in lecture slots.
            </p>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lecture Slots</h1>
          <p className="text-gray-600">
            Browse and enroll in available lecture slots for the current semester.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by subject, faculty, or venue..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={filters.day}
                onChange={(e) => setFilters(prev => ({ ...prev, day: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Days</option>
                {days.map((day, index) => (
                  <option key={index} value={index}>{day}</option>
                ))}
              </select>

              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="full">Full</option>
                {isAuthenticated && user?.role === 'student' && (
                  <>
                    <option value="enrolled">My Enrolled</option>
                    <option value="waitlisted">My Waitlisted</option>
                  </>
                )}
              </select>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ day: '', faculty: '', status: 'all' });
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredSlots.length} of {lectureSlots.length} lecture slots
            </p>
            
            {(searchTerm || filters.day || filters.status !== 'all') && (
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filters applied</span>
              </div>
            )}
          </div>
        </div>

        {/* Lecture Slots Grid */}
        {filteredSlots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlots.map((slot) => (
              <SlotCard key={slot._id} slot={slot} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No lecture slots found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search criteria or filters.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ day: '', faculty: '', status: 'all' });
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureSlots;