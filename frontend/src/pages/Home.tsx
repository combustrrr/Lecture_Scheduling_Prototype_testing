import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, BookOpen, Users, Clock } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Create and manage your course schedules with our intelligent scheduling system.',
    },
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Browse and enroll in courses with detailed information and prerequisites.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Connect with instructors and fellow students in your courses.',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Optimize your time with conflict detection and schedule recommendations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your College Schedule,
              <span className="text-indigo-600"> Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Manage your courses, create optimal schedules, and stay organized throughout your academic journey with our comprehensive college scheduling system.
            </p>
            
            {isAuthenticated ? (
              <div className="space-x-4">
                <Link
                  to="/dashboard"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                >
                  Go to Dashboard
                </Link>
                <Link
                  to="/courses"
                  className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg border-2 border-indigo-600 transition-colors duration-200 inline-block"
                >
                  Browse Courses
                </Link>
              </div>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg border-2 border-indigo-600 transition-colors duration-200 inline-block"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage your college experience effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to optimize your schedule?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Join thousands of students who have streamlined their academic planning with our platform.
          </p>
          {!isAuthenticated && (
            <Link
              to="/register"
              className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              Create Your Account
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;