import { useState, useEffect } from 'react';
import { enrollmentsAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { Calendar, Clock, MapPin, User, AlertTriangle, CheckCircle, BookOpen, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface Enrollment {
  _id: string;
  status: 'enrolled' | 'waitlisted' | 'cancelled';
  position?: number;
  lectureSlotId: {
    _id: string;
    subjectName: string;
    venue: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    description?: string;
    facultyId: {
      name: string;
      email: string;
    };
  };
}

const Timetable = () => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [timetable, setTimetable] = useState<Record<string, Enrollment[]>>({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'enrolled' | 'waitlisted'>('all');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    try {
      const response = await enrollmentsAPI.getMyTimetable();
      const data = response.data.data;
      
      setEnrollments(data.enrollments);
      setTimetable(data.timetable);
    } catch (error) {
      toast.error('Failed to fetch timetable');
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = async (slotId: string) => {
    if (!confirm('Are you sure you want to drop this lecture slot?')) return;

    try {
      const response = await enrollmentsAPI.dropFromSlot(slotId);
      toast.success(response.data.message);
      fetchTimetable();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to drop enrollment');
    }
  };

  const getFilteredEnrollments = () => {
    if (filter === 'all') return enrollments;
    return enrollments.filter(e => e.status === filter);
  };

  const getTimeSlotEnrollments = (day: string, timeSlot: string) => {
    const dayEnrollments = timetable[day] || [];
    return dayEnrollments.filter(enrollment => {
      const startTime = enrollment.lectureSlotId.startTime;
      const [startHour] = startTime.split(':').map(Number);
      const [slotHour] = timeSlot.split(':').map(Number);
      
      return startHour === slotHour;
    });
  };

  const EnrollmentCard = ({ enrollment, showDay = false }: { enrollment: Enrollment; showDay?: boolean }) => (
    <div className={`p-4 rounded-lg border-l-4 ${
      enrollment.status === 'enrolled' 
        ? 'bg-green-50 border-green-400' 
        : 'bg-yellow-50 border-yellow-400'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold text-gray-900">
            {enrollment.lectureSlotId.subjectName}
          </h4>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <User className="h-3 w-3 mr-1" />
            <span>{enrollment.lectureSlotId.facultyId.name}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {enrollment.status === 'enrolled' ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          )}
          
          <button
            onClick={() => handleDrop(enrollment.lectureSlotId._id)}
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            <XCircle className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600">
        {showDay && (
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{days[enrollment.lectureSlotId.dayOfWeek]}</span>
          </div>
        )}
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>{enrollment.lectureSlotId.startTime} - {enrollment.lectureSlotId.endTime}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{enrollment.lectureSlotId.venue}</span>
        </div>
      </div>

      {enrollment.status === 'waitlisted' && (
        <div className="mt-2 text-xs text-yellow-700">
          Waitlist position: #{enrollment.position}
        </div>
      )}

      {enrollment.lectureSlotId.description && (
        <p className="mt-2 text-xs text-gray-600 line-clamp-2">
          {enrollment.lectureSlotId.description}
        </p>
      )}
    </div>
  );

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Timetable</h1>
          <p className="text-gray-600">
            View your enrolled and waitlisted lecture slots organized by day and time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Enrolled</p>
                <p className="text-2xl font-bold text-gray-900">
                  {enrollments.filter(e => e.status === 'enrolled').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Waitlisted</p>
                <p className="text-2xl font-bold text-gray-900">
                  {enrollments.filter(e => e.status === 'waitlisted').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">{enrollments.length}</p>
              </div>
            </div>
          </div>
        </div>

        {enrollments.length > 0 ? (
          <>
            {/* Filter Tabs */}
            <div className="mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {[
                    { key: 'all', label: 'All', count: enrollments.length },
                    { key: 'enrolled', label: 'Enrolled', count: enrollments.filter(e => e.status === 'enrolled').length },
                    { key: 'waitlisted', label: 'Waitlisted', count: enrollments.filter(e => e.status === 'waitlisted').length },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setFilter(tab.key as any)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        filter === tab.key
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Desktop Timetable View */}
            <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Weekly Schedule</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                        Time
                      </th>
                      {days.map((day) => (
                        <th key={day} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {timeSlots.map((timeSlot) => (
                      <tr key={timeSlot}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {timeSlot}
                        </td>
                        {days.map((day) => {
                          const slotEnrollments = getTimeSlotEnrollments(day, timeSlot);
                          const filteredSlotEnrollments = slotEnrollments.filter(e => 
                            filter === 'all' || e.status === filter
                          );
                          
                          return (
                            <td key={`${day}-${timeSlot}`} className="px-4 py-4 text-sm text-gray-500">
                              {filteredSlotEnrollments.length > 0 ? (
                                <div className="space-y-1">
                                  {filteredSlotEnrollments.map((enrollment) => (
                                    <div
                                      key={enrollment._id}
                                      className={`p-2 rounded text-xs ${
                                        enrollment.status === 'enrolled'
                                          ? 'bg-green-100 text-green-800'
                                          : 'bg-yellow-100 text-yellow-800'
                                      }`}
                                    >
                                      <div className="font-medium">
                                        {enrollment.lectureSlotId.subjectName}
                                      </div>
                                      <div className="text-xs opacity-75">
                                        {enrollment.lectureSlotId.venue}
                                      </div>
                                      {enrollment.status === 'waitlisted' && (
                                        <div className="text-xs">
                                          #{enrollment.position}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="h-12"></div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile List View */}
            <div className="lg:hidden space-y-6">
              {days.map((day) => {
                const dayEnrollments = (timetable[day] || []).filter(e => 
                  filter === 'all' || e.status === filter
                );
                
                if (dayEnrollments.length === 0) return null;

                return (
                  <div key={day} className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">{day}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      {dayEnrollments.map((enrollment) => (
                        <EnrollmentCard key={enrollment._id} enrollment={enrollment} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* All Enrollments List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">All Enrollments</h2>
              </div>
              <div className="p-6 space-y-4">
                {getFilteredEnrollments().map((enrollment) => (
                  <EnrollmentCard key={enrollment._id} enrollment={enrollment} showDay />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No enrollments yet</h3>
            <p className="mt-1 text-gray-500 mb-6">
              You haven't enrolled in any lecture slots yet. Browse available slots to get started.
            </p>
            <a
              href="/lecture-slots"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Browse Lecture Slots
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timetable;