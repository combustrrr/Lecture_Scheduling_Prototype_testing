import request from 'supertest';
import app from '../server.js';
import User from '../models/User.js';
import LectureSlot from '../models/LectureSlot.js';
import Enrollment from '../models/Enrollment.js';

describe('Enrollment System', () => {
  let adminToken, facultyToken, studentToken, student2Token;
  let adminUser, facultyUser, studentUser, student2User;
  let lectureSlot, fullLectureSlot;

  beforeEach(async () => {
    // Create test users
    adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@test.com',
      password: 'password123',
      role: 'admin',
      isActive: true
    });

    facultyUser = await User.create({
      name: 'Faculty User',
      email: 'faculty@test.com',
      password: 'password123',
      role: 'faculty',
      isActive: true,
      meta: {
        employeeId: 'FAC001',
        department: 'Computer Science'
      }
    });

    studentUser = await User.create({
      name: 'Student User',
      email: 'student@test.com',
      password: 'password123',
      role: 'student',
      isActive: true,
      meta: {
        studentId: 'STU001',
        year: 2
      }
    });

    student2User = await User.create({
      name: 'Student Two',
      email: 'student2@test.com',
      password: 'password123',
      role: 'student',
      isActive: true,
      meta: {
        studentId: 'STU002',
        year: 2
      }
    });

    // Login users to get tokens
    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@test.com', password: 'password123' });
    adminToken = adminLogin.body.token;

    const facultyLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'faculty@test.com', password: 'password123' });
    facultyToken = facultyLogin.body.token;

    const studentLogin = await request(app)
      .post('/api/auth/login')
      .send({ email: 'student@test.com', password: 'password123' });
    studentToken = studentLogin.body.token;

    const student2Login = await request(app)
      .post('/api/auth/login')
      .send({ email: 'student2@test.com', password: 'password123' });
    student2Token = student2Login.body.token;

    // Create test lecture slots
    lectureSlot = await LectureSlot.create({
      subjectName: 'Data Structures',
      facultyId: facultyUser._id,
      venue: 'Room 101',
      capacity: 2,
      dayOfWeek: 1, // Monday
      startTime: '09:00',
      endTime: '10:00',
      description: 'Introduction to Data Structures',
      recurring: true
    });

    fullLectureSlot = await LectureSlot.create({
      subjectName: 'Algorithms',
      facultyId: facultyUser._id,
      venue: 'Room 102',
      capacity: 1,
      dayOfWeek: 2, // Tuesday
      startTime: '10:00',
      endTime: '11:00',
      description: 'Algorithm Analysis',
      recurring: true
    });
  });

  describe('POST /api/enrollments/:slotId', () => {
    it('should enroll student successfully when capacity available', async () => {
      const res = await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe('Successfully enrolled in lecture slot');
      expect(res.body.data.status).toBe('enrolled');
      expect(res.body.data.studentId._id).toBe(studentUser._id.toString());
    });

    it('should add student to waitlist when capacity full', async () => {
      // First student enrolls (fills capacity)
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Second student should be waitlisted
      const res = await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(201);

      expect(res.body.success).toBe(true);
      expect(res.body.message).toContain('Added to waitlist at position 1');
      expect(res.body.data.status).toBe('waitlisted');
      expect(res.body.data.position).toBe(1);
    });

    it('should prevent duplicate enrollment', async () => {
      // First enrollment
      await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Attempt duplicate enrollment
      const res = await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(400);

      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain('Already enrolled');
    });

    it('should prevent schedule conflicts', async () => {
      // Create conflicting lecture slot (same day and overlapping time)
      const conflictingSlot = await LectureSlot.create({
        subjectName: 'Database Systems',
        facultyId: facultyUser._id,
        venue: 'Room 103',
        capacity: 30,
        dayOfWeek: 1, // Monday (same as lectureSlot)
        startTime: '09:30', // Overlaps with 09:00-10:00
        endTime: '10:30',
        recurring: true
      });

      // Enroll in first slot
      await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Attempt to enroll in conflicting slot
      const res = await request(app)
        .post(`/api/enrollments/${conflictingSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(400);

      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain('Schedule conflict');
    });

    it('should require student role', async () => {
      const res = await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${facultyToken}`)
        .expect(403);

      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain('not authorized');
    });

    it('should require authentication', async () => {
      const res = await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .expect(401);

      expect(res.body.success).toBe(false);
    });
  });

  describe('DELETE /api/enrollments/:slotId', () => {
    it('should drop enrollment successfully', async () => {
      // First enroll
      await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Then drop
      const res = await request(app)
        .delete(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe('Successfully dropped from lecture slot');
    });

    it('should auto-promote from waitlist when enrolled student drops', async () => {
      // Fill capacity with first student
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Add second student to waitlist
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(201);

      // First student drops
      const res = await request(app)
        .delete(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.message).toContain('promoted from waitlist');
      expect(res.body.data.promotedStudent).toBeTruthy();
      expect(res.body.data.promotedStudent.studentId.name).toBe('Student Two');
    });

    it('should update waitlist positions when waitlisted student drops', async () => {
      // Create a slot with capacity 1
      const testSlot = await LectureSlot.create({
        subjectName: 'Test Subject',
        facultyId: facultyUser._id,
        venue: 'Room 999',
        capacity: 1,
        dayOfWeek: 3,
        startTime: '14:00',
        endTime: '15:00',
        recurring: true
      });

      // Create third student
      const student3User = await User.create({
        name: 'Student Three',
        email: 'student3@test.com',
        password: 'password123',
        role: 'student',
        isActive: true
      });

      const student3Login = await request(app)
        .post('/api/auth/login')
        .send({ email: 'student3@test.com', password: 'password123' });
      const student3Token = student3Login.body.token;

      // Enroll first student (fills capacity)
      await request(app)
        .post(`/api/enrollments/${testSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Add second student to waitlist (position 1)
      await request(app)
        .post(`/api/enrollments/${testSlot._id}`)
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(201);

      // Add third student to waitlist (position 2)
      await request(app)
        .post(`/api/enrollments/${testSlot._id}`)
        .set('Authorization', `Bearer ${student3Token}`)
        .expect(201);

      // Second student (position 1) drops from waitlist
      await request(app)
        .delete(`/api/enrollments/${testSlot._id}`)
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(200);

      // Check that third student's position was updated to 1
      const enrollment = await Enrollment.findOne({
        lectureSlotId: testSlot._id,
        studentId: student3User._id,
        status: 'waitlisted'
      });

      expect(enrollment.position).toBe(1);
    });

    it('should return 404 for non-existent enrollment', async () => {
      const res = await request(app)
        .delete(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(404);

      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Enrollment not found');
    });
  });

  describe('GET /api/enrollments/me', () => {
    it('should return student timetable', async () => {
      // Enroll in a slot
      await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      const res = await request(app)
        .get('/api/enrollments/me')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(1);
      expect(res.body.data.enrollments).toHaveLength(1);
      expect(res.body.data.timetable).toHaveProperty('Monday');
    });

    it('should filter by status', async () => {
      // Enroll in full slot to get waitlisted
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(201);

      // Get only waitlisted enrollments
      const res = await request(app)
        .get('/api/enrollments/me?status=waitlisted')
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(1);
      expect(res.body.data.enrollments[0].status).toBe('waitlisted');
    });

    it('should require student role', async () => {
      const res = await request(app)
        .get('/api/enrollments/me')
        .set('Authorization', `Bearer ${facultyToken}`)
        .expect(403);

      expect(res.body.success).toBe(false);
    });
  });

  describe('GET /api/enrollments (Admin)', () => {
    it('should return all enrollments for admin', async () => {
      // Create some enrollments
      await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      const res = await request(app)
        .get('/api/enrollments')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.count).toBeGreaterThan(0);
      expect(res.body.data).toBeInstanceOf(Array);
    });

    it('should filter enrollments by status', async () => {
      await request(app)
        .post(`/api/enrollments/${lectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      const res = await request(app)
        .get('/api/enrollments?status=enrolled')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data.every(e => e.status === 'enrolled')).toBe(true);
    });

    it('should require admin role', async () => {
      const res = await request(app)
        .get('/api/enrollments')
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(403);

      expect(res.body.success).toBe(false);
    });
  });

  describe('PUT /api/enrollments/:id/cancel (Admin)', () => {
    it('should force cancel enrollment and promote from waitlist', async () => {
      // Fill capacity
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Add to waitlist
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${student2Token}`)
        .expect(201);

      // Get enrollment ID
      const enrollment = await Enrollment.findOne({
        lectureSlotId: fullLectureSlot._id,
        studentId: studentUser._id,
        status: 'enrolled'
      });

      // Admin force cancels
      const res = await request(app)
        .put(`/api/enrollments/${enrollment._id}/cancel`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ reason: 'Administrative decision' })
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.message).toContain('promoted from waitlist');
      expect(res.body.data.promotedStudent).toBeTruthy();
    });

    it('should require admin role', async () => {
      const enrollment = await Enrollment.create({
        lectureSlotId: lectureSlot._id,
        studentId: studentUser._id,
        status: 'enrolled'
      });

      const res = await request(app)
        .put(`/api/enrollments/${enrollment._id}/cancel`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(403);

      expect(res.body.success).toBe(false);
    });

    it('should return 404 for non-existent enrollment', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      
      const res = await request(app)
        .put(`/api/enrollments/${fakeId}/cancel`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(404);

      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Enrollment not found');
    });
  });

  describe('Waitlist Management', () => {
    it('should maintain correct waitlist positions', async () => {
      // Create additional students
      const students = [];
      const tokens = [];

      for (let i = 3; i <= 5; i++) {
        const student = await User.create({
          name: `Student ${i}`,
          email: `student${i}@test.com`,
          password: 'password123',
          role: 'student',
          isActive: true
        });
        students.push(student);

        const login = await request(app)
          .post('/api/auth/login')
          .send({ email: `student${i}@test.com`, password: 'password123' });
        tokens.push(login.body.token);
      }

      // Fill capacity (1 student)
      await request(app)
        .post(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${studentToken}`)
        .expect(201);

      // Add 4 students to waitlist
      for (let i = 0; i < 3; i++) {
        const res = await request(app)
          .post(`/api/enrollments/${fullLectureSlot._id}`)
          .set('Authorization', `Bearer ${tokens[i]}`)
          .expect(201);

        expect(res.body.data.status).toBe('waitlisted');
        expect(res.body.data.position).toBe(i + 1);
      }

      // Student at position 2 drops
      await request(app)
        .delete(`/api/enrollments/${fullLectureSlot._id}`)
        .set('Authorization', `Bearer ${tokens[1]}`)
        .expect(200);

      // Check that positions were updated correctly
      const remainingEnrollments = await Enrollment.find({
        lectureSlotId: fullLectureSlot._id,
        status: 'waitlisted'
      }).sort({ position: 1 });

      expect(remainingEnrollments).toHaveLength(2);
      expect(remainingEnrollments[0].position).toBe(1);
      expect(remainingEnrollments[1].position).toBe(2);
    });
  });
});