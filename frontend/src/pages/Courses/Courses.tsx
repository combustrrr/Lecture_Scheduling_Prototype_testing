import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coursesAPI } from '../../utils/api';
import { Search, Filter, BookOpen, Clock, Users, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    semester: '',
    credits: '',
  });
  const [departments, setDepartments] = useState<string[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [courses, searchTerm, filters]);

  const fetchCourses = async () => {
    try {
      const response = await coursesAPI.getCourses();
      const coursesData = response.data.data;
      setCourses(coursesData);
      
      // Extract unique departments
      const uniqueDepartments = [...new Set(coursesData.map((course: any) => course.department))];
      setDepartments(uniqueDepartments);
    } catch (error) {
      toast.error('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const filterCourses = () => {
    let filtered = courses.filter((course: any) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment = !filters.department || course.department === filters.department;
      const matchesSemester = !filters.semester || course.semester === filters.semester;
      const matchesCredits = !filters.credits || course.credits.toString() === filters.credits;

      return matchesSearch && matchesDepartment && matchesSemester && matchesCredits;
    });

    setFilteredCourses(filtered);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ department: '', semester: '', credits: '' });
    setSearchTerm('');
  };

  const CourseCard = ({ course }: { course: any }) => (
    <Link
      to={`/courses/${course._id}`}
      className="block bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-200 transition-all duration-200"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {course.courseCode}
            </h3>
            <p className="text-gray-600 text-sm">{course.title}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description || 'No description available.'}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {course.department}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {course.semester} {course.year}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            {course.credits} Credits
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.enrolledStudents?.length || 0}/{course.maxStudents} enrolled</span>
          </div>
          {course.schedule && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>
                {course.schedule.days?.join(', ')} {course.schedule.startTime}-{course.schedule.endTime}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Catalog</h1>
          <p className="text-gray-600">
            Browse and explore available courses for enrollment.
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
                  placeholder="Search courses, codes, or departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <select
                value={filters.semester}
                onChange={(e) => handleFilterChange('semester', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Semesters</option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>

              <select
                value={filters.credits}
                onChange={(e) => handleFilterChange('credits', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Credits</option>
                <option value="1">1 Credit</option>
                <option value="2">2 Credits</option>
                <option value="3">3 Credits</option>
                <option value="4">4 Credits</option>
                <option value="5">5 Credits</option>
                <option value="6">6 Credits</option>
              </select>

              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
            
            {(searchTerm || filters.department || filters.semester || filters.credits) && (
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filters applied</span>
              </div>
            )}
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course: any) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search criteria or filters.
            </p>
            <div className="mt-6">
              <button
                onClick={clearFilters}
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

export default Courses;