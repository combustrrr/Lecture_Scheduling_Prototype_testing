import { useState, useEffect } from 'react';
import { schedulesAPI } from '../../utils/api';
import { Plus, Calendar, Clock, BookOpen, Edit, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await schedulesAPI.getSchedules();
      setSchedules(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch schedules');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSchedule = async (scheduleData: any) => {
    try {
      await schedulesAPI.createSchedule(scheduleData);
      toast.success('Schedule created successfully');
      fetchSchedules();
      setShowCreateModal(false);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to create schedule');
    }
  };

  const handleDeleteSchedule = async (id: string) => {
    if (!confirm('Are you sure you want to delete this schedule?')) return;

    try {
      await schedulesAPI.deleteSchedule(id);
      toast.success('Schedule deleted successfully');
      fetchSchedules();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to delete schedule');
    }
  };

  const CreateScheduleModal = () => {
    const [formData, setFormData] = useState({
      name: '',
      semester: 'Fall',
      year: new Date().getFullYear(),
      notes: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleCreateSchedule(formData);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Schedule</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Schedule Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., Fall 2024 Schedule"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Semester
                </label>
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData(prev => ({ ...prev, semester: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="Fall">Fall</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <input
                  type="number"
                  min="2020"
                  max="2030"
                  value={formData.year}
                  onChange={(e) => setFormData(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Additional notes about this schedule..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Create Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ScheduleCard = ({ schedule }: { schedule: any }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{schedule.name}</h3>
          <p className="text-gray-600">{schedule.semester} {schedule.year}</p>
        </div>
        
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleDeleteSchedule(schedule._id)}
            className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <BookOpen className="h-4 w-4 mr-2" />
          <span>{schedule.courses?.length || 0} courses enrolled</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{schedule.totalCredits} total credits</span>
        </div>
      </div>

      {schedule.courses && schedule.courses.length > 0 && (
        <div className="border-t pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Recent Courses:</p>
          <div className="space-y-1">
            {schedule.courses.slice(0, 3).map((courseItem: any) => (
              <div key={courseItem._id} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">
                  {courseItem.course?.courseCode} - {courseItem.course?.title}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  courseItem.status === 'enrolled' ? 'bg-green-100 text-green-800' :
                  courseItem.status === 'waitlisted' ? 'bg-yellow-100 text-yellow-800' :
                  courseItem.status === 'dropped' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {courseItem.status}
                </span>
              </div>
            ))}
          </div>
          
          {schedule.courses.length > 3 && (
            <p className="text-xs text-gray-500 mt-2">
              +{schedule.courses.length - 3} more courses
            </p>
          )}
        </div>
      )}

      {schedule.notes && (
        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-gray-600">{schedule.notes}</p>
        </div>
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Schedules</h1>
            <p className="text-gray-600 mt-2">
              Manage your course schedules and academic planning.
            </p>
          </div>
          
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Schedule
          </button>
        </div>

        {/* Schedules Grid */}
        {schedules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedules.map((schedule: any) => (
              <ScheduleCard key={schedule._id} schedule={schedule} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No schedules yet</h3>
            <p className="mt-1 text-gray-500 mb-6">
              Get started by creating your first schedule.
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Schedule
            </button>
          </div>
        )}

        {/* Create Schedule Modal */}
        {showCreateModal && <CreateScheduleModal />}
      </div>
    </div>
  );
};

export default Schedules;