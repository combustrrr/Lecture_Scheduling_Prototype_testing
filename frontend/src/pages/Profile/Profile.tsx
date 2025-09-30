import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { usersAPI } from '../../utils/api';
import { User, Mail, BookOpen, Calendar, Edit, Save, X } from 'lucide-react';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    major: '',
    year: '',
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const response = await usersAPI.getUser(user!.id);
      const profileData = response.data.data;
      setProfile(profileData);
      setEditFormData({
        name: profileData.name || '',
        email: profileData.email || '',
        studentId: profileData.studentId || '',
        major: profileData.major || '',
        year: profileData.year?.toString() || '',
      });
    } catch (error) {
      toast.error('Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Reset form data when canceling
      setEditFormData({
        name: profile.name || '',
        email: profile.email || '',
        studentId: profile.studentId || '',
        major: profile.major || '',
        year: profile.year?.toString() || '',
      });
    }
  };

  const handleSaveProfile = async () => {
    try {
      const updateData = {
        ...editFormData,
        year: editFormData.year ? parseInt(editFormData.year) : undefined,
      };

      await usersAPI.updateUser(user!.id, updateData);
      toast.success('Profile updated successfully');
      setIsEditing(false);
      fetchProfile();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to update profile');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Profile not found</h3>
          <p className="text-gray-500">Unable to load your profile information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600 mt-2">
              Manage your account information and preferences.
            </p>
          </div>
          
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveProfile}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
                <button
                  onClick={handleEditToggle}
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Profile Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-indigo-600" />
              </div>
              <div className="ml-6">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                    className="text-2xl font-bold text-gray-900 border-b border-gray-300 bg-transparent focus:border-indigo-500 focus:outline-none"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                )}
                
                <div className="flex items-center mt-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    profile.role === 'student' ? 'bg-blue-100 text-blue-800' :
                    profile.role === 'instructor' ? 'bg-purple-100 text-purple-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
                  </span>
                  
                  {profile.isActive ? (
                    <span className="ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={editFormData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      ) : (
                        <p className="text-gray-600">{profile.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Member Since
                      </label>
                      <p className="text-gray-600">
                        {new Date(profile.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Information (Student Only) */}
              {profile.role === 'student' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Academic Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-500 mr-3" />
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Student ID
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="studentId"
                            value={editFormData.studentId}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        ) : (
                          <p className="text-gray-600">{profile.studentId || 'Not specified'}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-gray-500 mr-3" />
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Major
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="major"
                            value={editFormData.major}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="e.g., Computer Science"
                          />
                        ) : (
                          <p className="text-gray-600">{profile.major || 'Not specified'}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Academic Year
                        </label>
                        {isEditing ? (
                          <select
                            name="year"
                            value={editFormData.year}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                          >
                            <option value="">Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                            <option value="5">5th Year</option>
                            <option value="6">6th Year</option>
                          </select>
                        ) : (
                          <p className="text-gray-600">
                            {profile.year ? `${profile.year}${
                              profile.year === 1 ? 'st' :
                              profile.year === 2 ? 'nd' :
                              profile.year === 3 ? 'rd' :
                              'th'
                            } Year` : 'Not specified'}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Account Statistics */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-sm text-gray-600">Active Schedules</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-sm text-gray-600">Enrolled Courses</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <User className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-sm text-gray-600">Total Credits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;