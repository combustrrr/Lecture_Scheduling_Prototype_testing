import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { coursesAPI } from '../../utils/api';
import { ArrowLeft, BookOpen, Clock, Users, Calendar, MapPin, User, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [enrollmentLoading, setEnrollmentLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (id) {
      fetchCourse();
    }
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await coursesAPI.getCourse(id!);
      const courseData = response.data.data;
      setCourse(courseData);
      
      // Check if user is enrolled
      if (user && courseData.enrolledStudents) {
        setIsEnrolled(courseData.enrolledStudents.some((student: any) => student._id === user.id));
      }
    } catch (error) {
      toast.error('Failed to fetch course details');
      navigate('/courses');
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollment = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to enroll in courses');
      navigate('/login');
      return;
    }

    setEnrollmentLoading(true);
    try {
      if (isEnrolled) {
        await coursesAPI.dropCourse(id!);
        toast.success('Successfully dropped from course');
        setIsEnrolled(false);
      } else {
        await coursesAPI.enrollInCourse(id!);
        toast.success('Successfully enrolled in course');
        setIsEnrolled(true);
      }
      
      // Refresh course data
      fetchCourse();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Enrollment action failed');
    } finally {
      setEnrollmentLoading(false);
    }
  };

  const getEnrollmentStatus = () => {
    if (!course) return null;
    
    const enrolledCount = course.enrolledStudents?.length || 0;
    const maxStudents = course.maxStudents;
    const percentage = (enrolledCount / maxStudents) * 100;

    if (percentage >= 100) {
      return { status: 'full', color: 'red', text: 'Course Full' };
    } else if (percentage >= 80) {
      return { status: 'almostFull', color: 'yellow', text: 'Almost Full' };
    } else {
      return { status: 'available', color: 'green', text: 'Available' };
    }
  };

  const enrollmentStatus = getEnrollmentStatus();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <XCircle className="mx-auto h-12 w-12 text-red-500" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Course not found</h3>
          <p className="mt-1 text-gray-500">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Courses
        </button>

        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{course.courseCode}</h1>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  enrollmentStatus?.color === 'green' ? 'bg-green-100 text-green-800' :
                  enrollmentStatus?.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {enrollmentStatus?.text}
                </span>
              </div>
              
              <h2 className="text-xl text-gray-700 mb-4">{course.title}</h2>
              
              <p className="text-gray-600 mb-6">
                {course.description || 'No description available for this course.'}
              </p>

              {/* Course Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {course.department}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {course.semester} {course.year}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  {course.credits} Credits
                </span>
              </div>
            </div>

            {/* Enrollment Action */}
            {isAuthenticated && user?.role === 'student' && (
              <div className="flex flex-col items-end gap-4">
                {isEnrolled && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Enrolled</span>
                  </div>
                )}
                
                <button
                  onClick={handleEnrollment}
                  disabled={enrollmentLoading || (!isEnrolled && enrollmentStatus?.status === 'full')}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    isEnrolled
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : enrollmentStatus?.status === 'full'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {enrollmentLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
                  ) : isEnrolled ? (
                    'Drop Course'
                  ) : enrollmentStatus?.status === 'full' ? (
                    'Course Full'
                  ) : (
                    'Enroll Now'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Schedule Information */}
            {course.schedule && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Days</p>
                      <p className="text-gray-600">{course.schedule.days?.join(', ') || 'TBD'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Time</p>
                      <p className="text-gray-600">
                        {course.schedule.startTime && course.schedule.endTime
                          ? `${course.schedule.startTime} - ${course.schedule.endTime}`
                          : 'TBD'
                        }
                      </p>
                    </div>
                  </div>
                  
                  {course.schedule.room && (
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Room</p>
                        <p className="text-gray-600">{course.schedule.room}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h3>
                <div className="space-y-2">
                  {course.prerequisites.map((prereq: any) => (
                    <div key={prereq._id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <BookOpen className="h-4 w-4 text-gray-500 mr-3" />
                      <span className="font-medium text-gray-700">{prereq.courseCode}</span>
                      <span className="text-gray-500 ml-2">- {prereq.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor Information */}
            {course.instructor && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{course.instructor.name}</p>
                    <p className="text-gray-600">{course.instructor.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Statistics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Enrolled</span>
                  <span className="font-medium">
                    {course.enrolledStudents?.length || 0} / {course.maxStudents}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      enrollmentStatus?.color === 'green' ? 'bg-green-500' :
                      enrollmentStatus?.color === 'yellow' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{
                      width: `${Math.min(((course.enrolledStudents?.length || 0) / course.maxStudents) * 100, 100)}%`
                    }}
                  ></div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    {course.maxStudents - (course.enrolledStudents?.length || 0)} spots remaining
                  </span>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Details</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Course Code</span>
                  <span className="text-sm font-medium text-gray-900">{course.courseCode}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Department</span>
                  <span className="text-sm font-medium text-gray-900">{course.department}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Credits</span>
                  <span className="text-sm font-medium text-gray-900">{course.credits}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Semester</span>
                  <span className="text-sm font-medium text-gray-900">
                    {course.semester} {course.year}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Max Students</span>
                  <span className="text-sm font-medium text-gray-900">{course.maxStudents}</span>
                </div>
              </div>
            </div>

            {/* Warning for non-authenticated users */}
            {!isAuthenticated && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Login Required
                    </h3>
                    <p className="mt-1 text-sm text-yellow-700">
                      You need to login to enroll in courses.
                    </p>
                    <button
                      onClick={() => navigate('/login')}
                      className="mt-2 text-sm font-medium text-yellow-800 hover:text-yellow-900 underline"
                    >
                      Login now →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;