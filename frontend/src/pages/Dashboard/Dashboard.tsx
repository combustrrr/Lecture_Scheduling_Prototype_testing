import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { schedulesAPI, coursesAPI } from '../../utils/api';
import {
  Calendar,
  BookOpen,
  Clock,
  Users,
  Plus,
  TrendingUp,
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [schedules, setSchedules] = useState([]);
  const [recentCourses, setRecentCourses] = useState([]);
  const [stats, setStats] = useState({
    totalSchedules: 0,
    totalCourses: 0,
    totalCredits: 0,
    upcomingClasses: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [schedulesResponse, coursesResponse] = await Promise.all([
        schedulesAPI.getSchedules(),
        coursesAPI.getCourses(),
      ]);

      const userSchedules = schedulesResponse.data.data;
      const allCourses = coursesResponse.data.data;

      setSchedules(userSchedules);
      setRecentCourses(allCourses.slice(0, 6));

      // Calculate stats
      const totalCredits = userSchedules.reduce((sum: number, schedule: any) => sum + schedule.totalCredits, 0);
      
      setStats({
        totalSchedules: userSchedules.length,
        totalCourses: allCourses.length,
        totalCredits,
        upcomingClasses: userSchedules.reduce((sum: number, schedule: any) => 
          sum + schedule.courses.filter((c: any) => c.status === 'enrolled').length, 0
        ),
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon: Icon, title, value, description }: any) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      </div>
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
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's an overview of your academic progress and upcoming activities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Calendar}
            title="Active Schedules"
            value={stats.totalSchedules}
            description="Current semester schedules"
          />
          <StatCard
            icon={BookOpen}
            title="Available Courses"
            value={stats.totalCourses}
            description="Courses you can enroll in"
          />
          <StatCard
            icon={TrendingUp}
            title="Total Credits"
            value={stats.totalCredits}
            description="Credits in your schedules"
          />
          <StatCard
            icon={Clock}
            title="Enrolled Classes"
            value={stats.upcomingClasses}
            description="Classes you're taking"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Schedules */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Schedules</h2>
                  <Link
                    to="/schedules"
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    View all
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                {schedules.length > 0 ? (
                  <div className="space-y-4">
                    {schedules.slice(0, 3).map((schedule: any) => (
                      <div
                        key={schedule._id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900">{schedule.name}</h3>
                          <p className="text-sm text-gray-600">
                            {schedule.semester} {schedule.year} • {schedule.totalCredits} credits
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {schedule.courses.length} courses
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No schedules yet</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Get started by creating your first schedule.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/schedules"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Create Schedule
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Courses */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/schedules"
                  className="flex items-center p-3 text-left w-full hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Calendar className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Manage Schedules</span>
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center p-3 text-left w-full hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <BookOpen className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Browse Courses</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center p-3 text-left w-full hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Users className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-sm font-medium text-gray-700">Update Profile</span>
                </Link>
              </div>
            </div>

            {/* Recent Courses */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Courses</h2>
              <div className="space-y-3">
                {recentCourses.slice(0, 4).map((course: any) => (
                  <Link
                    key={course._id}
                    to={`/courses/${course._id}`}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{course.courseCode}</p>
                        <p className="text-xs text-gray-600 truncate">{course.title}</p>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        {course.credits} cr
                      </span>
                    </div>
                  </Link>
                ))}
                
                <Link
                  to="/courses"
                  className="block text-center py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  View all courses →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;