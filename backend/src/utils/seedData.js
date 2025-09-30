import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import LectureSlot from '../models/LectureSlot.js';
import Enrollment from '../models/Enrollment.js';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await LectureSlot.deleteMany({});
    await Enrollment.deleteMany({});

    console.log('Cleared existing data');

    // Create faculty users
    const facultyUsers = [
      {
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'faculty',
        isActive: true,
        meta: {
          employeeId: 'FAC001',
          department: 'Computer Science'
        }
      },
      {
        name: 'Prof. Michael Chen',
        email: 'michael.chen@college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'faculty',
        isActive: true,
        meta: {
          employeeId: 'FAC002',
          department: 'Mathematics'
        }
      },
      {
        name: 'Dr. Emily Rodriguez',
        email: 'emily.rodriguez@college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'faculty',
        isActive: true,
        meta: {
          employeeId: 'FAC003',
          department: 'Physics'
        }
      }
    ];

    const createdFaculty = await User.insertMany(facultyUsers);
    console.log('Created faculty users');

    // Create student users
    const studentUsers = [
      {
        name: 'John Smith',
        email: 'john.smith@student.college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'student',
        isActive: true,
        meta: {
          studentId: 'STU001'
        },
        major: 'Computer Science',
        year: 2
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@student.college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'student',
        isActive: true,
        meta: {
          studentId: 'STU002'
        },
        major: 'Mathematics',
        year: 3
      },
      {
        name: 'Bob Wilson',
        email: 'bob.wilson@student.college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'student',
        isActive: true,
        meta: {
          studentId: 'STU003'
        },
        major: 'Physics',
        year: 1
      },
      {
        name: 'Carol Davis',
        email: 'carol.davis@student.college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'student',
        isActive: true,
        meta: {
          studentId: 'STU004'
        },
        major: 'Computer Science',
        year: 2
      },
      {
        name: 'David Brown',
        email: 'david.brown@student.college.edu',
        password: await bcrypt.hash('password123', 10),
        role: 'student',
        isActive: true,
        meta: {
          studentId: 'STU005'
        },
        major: 'Mathematics',
        year: 4
      }
    ];

    const createdStudents = await User.insertMany(studentUsers);
    console.log('Created student users');

    // Create admin user
    const adminUser = {
      name: 'System Administrator',
      email: 'admin@college.edu',
      password: await bcrypt.hash('admin123', 10),
      role: 'admin',
      isActive: true,
      meta: {
        employeeId: 'ADM001'
      }
    };

    await User.create(adminUser);
    console.log('Created admin user');

    // Create lecture slots
    const lectureSlots = [
      // Dr. Sarah Johnson's slots (Computer Science)
      {
        subjectName: 'Data Structures and Algorithms',
        facultyId: createdFaculty[0]._id,
        venue: 'CS Building - Room 101',
        capacity: 35,
        dayOfWeek: 1, // Monday
        startTime: '09:00',
        endTime: '10:30',
        description: 'Introduction to fundamental data structures and algorithms',
        recurring: true,
        isActive: true
      },
      {
        subjectName: 'Object-Oriented Programming',
        facultyId: createdFaculty[0]._id,
        venue: 'CS Building - Room 102',
        capacity: 30,
        dayOfWeek: 3, // Wednesday
        startTime: '11:00',
        endTime: '12:30',
        description: 'Advanced OOP concepts using Java',
        recurring: true,
        isActive: true
      },
      {
        subjectName: 'Database Systems',
        facultyId: createdFaculty[0]._id,
        venue: 'CS Building - Room 103',
        capacity: 25,
        dayOfWeek: 5, // Friday
        startTime: '14:00',
        endTime: '15:30',
        description: 'Relational database design and SQL',
        recurring: true,
        isActive: true
      },

      // Prof. Michael Chen's slots (Mathematics)
      {
        subjectName: 'Calculus I',
        facultyId: createdFaculty[1]._id,
        venue: 'Math Building - Room 201',
        capacity: 40,
        dayOfWeek: 2, // Tuesday
        startTime: '08:00',
        endTime: '09:30',
        description: 'Differential and integral calculus',
        recurring: true,
        isActive: true
      },
      {
        subjectName: 'Linear Algebra',
        facultyId: createdFaculty[1]._id,
        venue: 'Math Building - Room 202',
        capacity: 30,
        dayOfWeek: 4, // Thursday
        startTime: '10:00',
        endTime: '11:30',
        description: 'Vector spaces, matrices, and linear transformations',
        recurring: true,
        isActive: true
      },
      {
        subjectName: 'Statistics',
        facultyId: createdFaculty[1]._id,
        venue: 'Math Building - Room 203',
        capacity: 35,
        dayOfWeek: 1, // Monday
        startTime: '13:00',
        endTime: '14:30',
        description: 'Probability theory and statistical analysis',
        recurring: true,
        isActive: true
      },

      // Dr. Emily Rodriguez's slots (Physics)
      {
        subjectName: 'Physics I - Mechanics',
        facultyId: createdFaculty[2]._id,
        venue: 'Physics Building - Room 301',
        capacity: 28,
        dayOfWeek: 2, // Tuesday
        startTime: '10:00',
        endTime: '11:30',
        description: 'Classical mechanics and motion',
        recurring: true,
        isActive: true
      },
      {
        subjectName: 'Physics II - Electricity & Magnetism',
        facultyId: createdFaculty[2]._id,
        venue: 'Physics Building - Room 302',
        capacity: 25,
        dayOfWeek: 4, // Thursday
        startTime: '13:00',
        endTime: '14:30',
        description: 'Electric and magnetic fields, circuits',
        recurring: true,
        isActive: true
      },
      {
        subjectName: 'Modern Physics',
        facultyId: createdFaculty[2]._id,
        venue: 'Physics Building - Room 303',
        capacity: 20,
        dayOfWeek: 5, // Friday
        startTime: '09:00',
        endTime: '10:30',
        description: 'Quantum mechanics and relativity',
        recurring: true,
        isActive: true
      }
    ];

    const createdSlots = await LectureSlot.insertMany(lectureSlots);
    console.log('Created lecture slots');

    // Create some sample enrollments
    const enrollments = [
      // Data Structures class - some enrolled, some waitlisted
      { lectureSlotId: createdSlots[0]._id, studentId: createdStudents[0]._id, status: 'enrolled' },
      { lectureSlotId: createdSlots[0]._id, studentId: createdStudents[3]._id, status: 'enrolled' },
      
      // OOP class
      { lectureSlotId: createdSlots[1]._id, studentId: createdStudents[0]._id, status: 'enrolled' },
      { lectureSlotId: createdSlots[1]._id, studentId: createdStudents[3]._id, status: 'enrolled' },
      
      // Calculus class
      { lectureSlotId: createdSlots[3]._id, studentId: createdStudents[1]._id, status: 'enrolled' },
      { lectureSlotId: createdSlots[3]._id, studentId: createdStudents[4]._id, status: 'enrolled' },
      
      // Physics class
      { lectureSlotId: createdSlots[6]._id, studentId: createdStudents[2]._id, status: 'enrolled' },
      
      // Create a waitlist scenario for Database Systems (small capacity)
      { lectureSlotId: createdSlots[2]._id, studentId: createdStudents[0]._id, status: 'enrolled' },
      { lectureSlotId: createdSlots[2]._id, studentId: createdStudents[3]._id, status: 'enrolled' },
    ];

    await Enrollment.insertMany(enrollments);
    console.log('Created sample enrollments');

    console.log('\n=== SEED DATA SUMMARY ===');
    console.log('Faculty Users:');
    createdFaculty.forEach(faculty => {
      console.log(`- ${faculty.name} (${faculty.email}) - Department: ${faculty.meta.department}`);
    });
    
    console.log('\nStudent Users:');
    createdStudents.forEach(student => {
      console.log(`- ${student.name} (${student.email}) - Major: ${student.major}, Year: ${student.year}`);
    });
    
    console.log('\nAdmin User:');
    console.log('- System Administrator (admin@college.edu)');
    
    console.log('\nLecture Slots Created:', createdSlots.length);
    console.log('Sample Enrollments Created:', enrollments.length);
    
    console.log('\n=== LOGIN CREDENTIALS ===');
    console.log('Faculty:');
    console.log('- sarah.johnson@college.edu / password123');
    console.log('- michael.chen@college.edu / password123');
    console.log('- emily.rodriguez@college.edu / password123');
    console.log('\nStudents:');
    console.log('- john.smith@student.college.edu / password123');
    console.log('- alice.johnson@student.college.edu / password123');
    console.log('- bob.wilson@student.college.edu / password123');
    console.log('- carol.davis@student.college.edu / password123');
    console.log('- david.brown@student.college.edu / password123');
    console.log('\nAdmin:');
    console.log('- admin@college.edu / admin123');

  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

const runSeed = async () => {
  await connectDB();
  await seedData();
  process.exit(0);
};

runSeed();