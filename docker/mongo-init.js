// MongoDB initialization script
// This script runs when the MongoDB container starts for the first time

db = db.getSiblingDB('college_scheduling');

// Create collections
db.createCollection('users');
db.createCollection('courses');
db.createCollection('schedules');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "studentId": 1 }, { unique: true, sparse: true });

db.courses.createIndex({ "courseCode": 1 }, { unique: true });
db.courses.createIndex({ "department": 1 });
db.courses.createIndex({ "semester": 1, "year": 1 });

db.schedules.createIndex({ "user": 1 });
db.schedules.createIndex({ "semester": 1, "year": 1 });

// Sample data (optional)
db.courses.insertMany([
  {
    courseCode: 'CS101',
    title: 'Introduction to Computer Science',
    description: 'Fundamental concepts of computer science and programming.',
    credits: 3,
    department: 'Computer Science',
    semester: 'Fall',
    year: 2024,
    maxStudents: 30,
    enrolledStudents: [],
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      startTime: '09:00',
      endTime: '10:00',
      room: 'CS-101'
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    courseCode: 'MATH201',
    title: 'Calculus I',
    description: 'Introduction to differential and integral calculus.',
    credits: 4,
    department: 'Mathematics',
    semester: 'Fall',
    year: 2024,
    maxStudents: 25,
    enrolledStudents: [],
    schedule: {
      days: ['Tuesday', 'Thursday'],
      startTime: '10:30',
      endTime: '12:00',
      room: 'MATH-205'
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    courseCode: 'ENG105',
    title: 'English Composition',
    description: 'Academic writing and composition skills.',
    credits: 3,
    department: 'English',
    semester: 'Spring',
    year: 2024,
    maxStudents: 20,
    enrolledStudents: [],
    schedule: {
      days: ['Monday', 'Wednesday'],
      startTime: '14:00',
      endTime: '15:30',
      room: 'ENG-110'
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print('Database initialized successfully!');