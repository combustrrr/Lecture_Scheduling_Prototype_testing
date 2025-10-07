# TEST CASE PLANNING AND EXECUTION DOCUMENT

**Project:** Lecture Scheduling System  
**Version:** 1.0  
**Date:** January 2025  
**Prepared By:** QA Engineering Team

---

## Table of Contents
1. [Introduction](#introduction)
2. [Test Strategy](#test-strategy)
3. [Test Scope](#test-scope)
4. [Test Environment](#test-environment)
5. [Test Cases](#test-cases)
   - [Authentication Module](#1-authentication-module)
   - [User Management](#2-user-management)
   - [Course Management](#3-course-management)
   - [Lecture Slots Management](#4-lecture-slots-management)
   - [Enrollment System](#5-enrollment-system)
   - [Student Timetable](#6-student-timetable)
   - [Faculty Dashboard](#7-faculty-dashboard)
   - [Student Dashboard](#8-student-dashboard)
   - [Schedule Management](#9-schedule-management)
   - [Security & Authorization](#10-security--authorization)
   - [API Testing](#11-api-testing)
   - [UI/UX Testing](#12-uiux-testing)
   - [Performance Testing](#13-performance-testing)
   - [Integration Testing](#14-integration-testing)
6. [Test Execution Summary](#test-execution-summary)
7. [Defect Management](#defect-management)

---

## Introduction

### Purpose
This document outlines comprehensive test cases for the Lecture Scheduling System, a full-stack web application designed to manage college lecture schedules, student enrollments, and faculty course management.

### Application Overview
The system provides:
- **Student Features**: Browse lectures, enroll in courses, view timetables, manage profile
- **Faculty Features**: Create/manage lecture slots, view enrolled students, track analytics
- **Admin Features**: User management, system configuration
- **Core Technologies**: React, Node.js, Express, MongoDB, JWT authentication

---

## Test Strategy

### Testing Approach
- **Functional Testing**: Verify all features work as expected
- **Integration Testing**: Ensure modules work together seamlessly
- **Security Testing**: Validate authentication, authorization, and data protection
- **Usability Testing**: Confirm user-friendly interface and navigation
- **Performance Testing**: Assess system responsiveness and scalability
- **API Testing**: Validate RESTful API endpoints

### Testing Types
- ✅ Manual Testing
- ✅ Automated Testing (Jest, Supertest)
- ✅ Regression Testing
- ✅ Smoke Testing
- ✅ Exploratory Testing

### Test Priority Levels
- **P0 (Critical)**: Core functionality, blocking issues
- **P1 (High)**: Major features, significant impact
- **P2 (Medium)**: Standard features, moderate impact
- **P3 (Low)**: Minor features, cosmetic issues

---

## Test Scope

### In Scope
- User authentication and authorization
- Course and lecture slot management
- Enrollment and waitlist functionality
- Timetable generation and viewing
- Profile management
- Dashboard features for all user roles
- Schedule creation and management
- API endpoint validation
- Security measures
- UI/UX consistency

### Out of Scope
- Third-party integrations (payment gateways, email services)
- Mobile app testing (iOS/Android native apps)
- Load testing with 10,000+ concurrent users
- Browser compatibility testing (testing on Chrome only)

---

## Test Environment

### Hardware
- Processor: Dual-core 2.0 GHz or higher
- RAM: 8 GB minimum
- Storage: 20 GB available space

### Software
- **OS**: Windows 10/11, macOS, Linux
- **Browser**: Chrome (latest version)
- **Node.js**: v18+
- **MongoDB**: v7.0
- **Docker**: Latest version (optional)

### Test Data
- Pre-seeded database with sample users, courses, and lecture slots
- Test accounts for different user roles
- Sample enrollment scenarios

---

## Test Cases

## 1. Authentication Module

### TC-AUTH-001: User Registration - Student Role
**Priority:** P0  
**Type:** Functional  
**Preconditions:** None  
**Test Steps:**
1. Navigate to registration page (`/register`)
2. Enter valid student details:
   - Name: "John Doe"
   - Email: "john.doe@student.college.edu"
   - Password: "password123"
   - Confirm Password: "password123"
   - Role: "Student"
   - Student ID: "STU2025001"
   - Year: "2"
3. Click "Create Account" button

**Expected Result:**
- User account created successfully
- Redirect to dashboard
- Welcome toast notification displayed
- User data stored in database with encrypted password

---

### TC-AUTH-002: User Registration - Faculty Role
**Priority:** P0  
**Type:** Functional  
**Preconditions:** None  
**Test Steps:**
1. Navigate to registration page
2. Enter valid faculty details:
   - Name: "Dr. Jane Smith"
   - Email: "jane.smith@college.edu"
   - Password: "secure123"
   - Confirm Password: "secure123"
   - Role: "Faculty"
   - Employee ID: "FAC2025001"
   - Department: "Computer Science"
3. Submit registration form

**Expected Result:**
- Faculty account created with appropriate role
- User redirected to faculty dashboard
- Profile includes faculty-specific fields

---

### TC-AUTH-003: User Login - Valid Credentials
**Priority:** P0  
**Type:** Functional  
**Preconditions:** User account exists in database  
**Test Steps:**
1. Navigate to login page (`/login`)
2. Enter email: "john.smith@student.college.edu"
3. Enter password: "password123"
4. Click "Sign in" button

**Expected Result:**
- User successfully authenticated
- JWT token generated and stored
- Redirect to dashboard based on user role
- User session persists across page refreshes

---

### TC-AUTH-004: User Login - Invalid Email
**Priority:** P1  
**Type:** Negative  
**Preconditions:** None  
**Test Steps:**
1. Navigate to login page
2. Enter email: "nonexistent@college.edu"
3. Enter password: "password123"
4. Attempt login

**Expected Result:**
- Login fails with error message
- Error: "Invalid credentials"
- No token generated
- User remains on login page

---

### TC-AUTH-005: User Login - Incorrect Password
**Priority:** P1  
**Type:** Negative  
**Preconditions:** User account exists  
**Test Steps:**
1. Navigate to login page
2. Enter valid email
3. Enter incorrect password: "wrongpassword"
4. Attempt login

**Expected Result:**
- Authentication fails
- Error message displayed
- Account not locked (unless multiple failed attempts)

---

### TC-AUTH-006: Password Validation - Minimum Length
**Priority:** P1  
**Type:** Validation  
**Preconditions:** On registration page  
**Test Steps:**
1. Enter password less than 6 characters: "pass"
2. Attempt to submit form

**Expected Result:**
- Validation error: "Password must be at least 6 characters"
- Form submission blocked
- Client-side validation message displayed

---

### TC-AUTH-007: Password Confirmation Mismatch
**Priority:** P1  
**Type:** Validation  
**Preconditions:** On registration page  
**Test Steps:**
1. Enter password: "password123"
2. Enter confirm password: "password456"
3. Attempt registration

**Expected Result:**
- Error: "Passwords do not match"
- Form not submitted
- Clear indication of mismatch

---

### TC-AUTH-008: Email Format Validation
**Priority:** P1  
**Type:** Validation  
**Preconditions:** On registration/login page  
**Test Steps:**
1. Enter invalid email format: "invalidemail"
2. Attempt to submit

**Expected Result:**
- Validation error displayed
- HTML5 email validation triggered
- Form submission prevented

---

### TC-AUTH-009: User Logout
**Priority:** P0  
**Type:** Functional  
**Preconditions:** User logged in  
**Test Steps:**
1. Click on user menu/profile icon
2. Select "Logout" option
3. Confirm logout

**Expected Result:**
- User session terminated
- JWT token removed from storage
- Redirect to login/home page
- Protected routes inaccessible

---

### TC-AUTH-010: Session Persistence
**Priority:** P1  
**Type:** Functional  
**Preconditions:** User logged in  
**Test Steps:**
1. Login successfully
2. Close browser tab
3. Reopen application URL
4. Check authentication state

**Expected Result:**
- User remains authenticated (if "Remember Me" enabled)
- Token valid until expiration (7 days default)
- User can access protected routes

---

### TC-AUTH-011: View Current User Profile
**Priority:** P1  
**Type:** Functional  
**Preconditions:** User authenticated  
**Test Steps:**
1. Navigate to `/profile` or `/api/auth/me`
2. View profile information

**Expected Result:**
- User details displayed correctly
- Password not exposed in response
- All profile fields visible (name, email, role, meta data)

---

### TC-AUTH-012: Update User Profile
**Priority:** P1  
**Type:** Functional  
**Preconditions:** User authenticated  
**Test Steps:**
1. Navigate to profile page
2. Update name to "Updated Name"
3. Update student ID to "STU2025099"
4. Save changes

**Expected Result:**
- Profile updated successfully
- Changes reflected immediately
- Success notification displayed
- Updated data persisted in database

---

## 2. User Management

### TC-USER-001: Admin - View All Users
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Logged in as admin  
**Test Steps:**
1. Navigate to `/api/users` endpoint or admin panel
2. Request list of all users

**Expected Result:**
- Complete list of users returned
- Users from all roles visible
- Pagination working if applicable
- User data includes role, status, creation date

---

### TC-USER-002: Admin - View Specific User by ID
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Logged in as admin, user ID known  
**Test Steps:**
1. Send GET request to `/api/users/{userId}`
2. View user details

**Expected Result:**
- Specific user information retrieved
- All user fields displayed
- Password hash not exposed
- Related data (enrollments, slots) accessible

---

### TC-USER-003: Admin - Update User Information
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Admin privileges, target user exists  
**Test Steps:**
1. Select user to update
2. Modify user fields (name, role, status)
3. Submit update request

**Expected Result:**
- User information updated successfully
- Changes reflected in database
- Audit trail recorded (if implemented)

---

### TC-USER-004: Admin - Delete User Account
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Admin privileges  
**Test Steps:**
1. Select user account to delete
2. Confirm deletion
3. Execute DELETE request

**Expected Result:**
- User account removed from system
- Associated enrollments handled appropriately
- Cannot login with deleted account
- Confirmation prompt shown before deletion

---

### TC-USER-005: Non-Admin User Cannot Access User Management
**Priority:** P0  
**Type:** Security  
**Preconditions:** Logged in as student or faculty  
**Test Steps:**
1. Attempt to access `/api/users` endpoint
2. Try to view all users

**Expected Result:**
- Access denied (403 Forbidden)
- Error message: "Not authorized to access this resource"
- Redirect to appropriate page

---

### TC-USER-006: Unauthorized Access to User Endpoints
**Priority:** P0  
**Type:** Security  
**Preconditions:** Not authenticated  
**Test Steps:**
1. Access `/api/users` without JWT token
2. Attempt to retrieve user list

**Expected Result:**
- 401 Unauthorized response
- Error: "No token, authorization denied"
- Request blocked by middleware

---

## 3. Course Management

### TC-COURSE-001: View All Courses
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Courses exist in database  
**Test Steps:**
1. Navigate to `/courses` page
2. View course listing

**Expected Result:**
- All active courses displayed
- Course information includes: name, code, credits, description
- Courses sorted appropriately
- Search/filter functionality available

---

### TC-COURSE-002: View Course Details
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Course ID known  
**Test Steps:**
1. Click on specific course
2. Navigate to course detail page
3. View complete course information

**Expected Result:**
- Full course details displayed
- Associated lecture slots shown
- Enrolled student count visible
- Faculty information included

---

### TC-COURSE-003: Create New Course (Admin/Instructor)
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Logged in as admin or instructor  
**Test Steps:**
1. Navigate to "Create Course" page
2. Enter course details:
   - Name: "Data Structures"
   - Code: "CS201"
   - Credits: 3
   - Description: "Fundamental data structures and algorithms"
3. Submit course creation form

**Expected Result:**
- Course created successfully
- New course appears in course list
- Course ID generated
- Success notification shown

---

### TC-COURSE-004: Update Course Information
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Course exists, admin/instructor logged in  
**Test Steps:**
1. Select course to update
2. Modify course fields (name, credits, description)
3. Save changes

**Expected Result:**
- Course information updated
- Changes visible immediately
- Edit history maintained (if applicable)

---

### TC-COURSE-005: Delete Course
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Admin privileges, course exists  
**Test Steps:**
1. Select course to delete
2. Confirm deletion
3. Execute delete action

**Expected Result:**
- Course removed from system
- Associated lecture slots handled
- Enrolled students notified (if applicable)
- Confirmation required before deletion

---

### TC-COURSE-006: Student Cannot Create Course
**Priority:** P0  
**Type:** Security  
**Preconditions:** Logged in as student  
**Test Steps:**
1. Attempt to access course creation endpoint
2. Try to POST new course data

**Expected Result:**
- Access denied (403 Forbidden)
- Authorization check prevents creation
- Error message displayed

---

### TC-COURSE-007: Course Search Functionality
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Multiple courses exist  
**Test Steps:**
1. Navigate to courses page
2. Enter search term: "Computer"
3. Execute search

**Expected Result:**
- Filtered course list displayed
- Courses matching search criteria shown
- Search is case-insensitive
- Results update in real-time

---

### TC-COURSE-008: Course Filter by Department
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Courses from multiple departments exist  
**Test Steps:**
1. Select department filter: "Computer Science"
2. Apply filter

**Expected Result:**
- Only CS courses displayed
- Filter applied correctly
- Can clear filter to see all courses

---

## 4. Lecture Slots Management

### TC-SLOT-001: View All Lecture Slots
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Lecture slots exist  
**Test Steps:**
1. Navigate to lecture slots page
2. View available slots

**Expected Result:**
- All active lecture slots displayed
- Slot information includes: subject, faculty, time, venue, capacity
- Available seats shown
- Day and time clearly visible

---

### TC-SLOT-002: Faculty - Create New Lecture Slot
**Priority:** P0  
**Type:** Functional  
**Preconditions:** Logged in as faculty  
**Test Steps:**
1. Navigate to "Create Lecture Slot" page
2. Enter slot details:
   - Subject Name: "Advanced Algorithms"
   - Venue: "Room 201"
   - Capacity: 50
   - Day: Monday (1)
   - Start Time: "10:00"
   - End Time: "11:30"
   - Description: "Advanced algorithmic techniques"
   - Recurring: true
3. Submit creation form

**Expected Result:**
- Lecture slot created successfully
- Slot appears in faculty's slot list
- Students can see and enroll in slot
- Faculty ID automatically associated

---

### TC-SLOT-003: Faculty - Update Lecture Slot
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Faculty owns lecture slot  
**Test Steps:**
1. Select owned lecture slot
2. Update capacity from 50 to 60
3. Update venue to "Room 301"
4. Save changes

**Expected Result:**
- Slot information updated
- Changes reflected immediately
- Enrolled students notified of changes (if applicable)

---

### TC-SLOT-004: Faculty - Delete Lecture Slot
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Faculty owns slot  
**Test Steps:**
1. Select lecture slot to delete
2. Confirm deletion
3. Execute delete action

**Expected Result:**
- Slot removed from system
- Enrolled students notified
- Enrollments cancelled
- Confirmation required

---

### TC-SLOT-005: View Lecture Slot Details
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Slot ID known  
**Test Steps:**
1. Click on lecture slot
2. View detailed information

**Expected Result:**
- Complete slot details displayed
- Faculty information shown
- Current enrollment count visible
- Available seats calculated correctly
- Waitlist status shown

---

### TC-SLOT-006: Student Cannot Create Lecture Slot
**Priority:** P0  
**Type:** Security  
**Preconditions:** Logged in as student  
**Test Steps:**
1. Attempt to access slot creation endpoint
2. Try to POST new slot data

**Expected Result:**
- Access denied (403)
- Authorization middleware blocks request
- Error message displayed

---

### TC-SLOT-007: Filter Lecture Slots by Day
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Slots exist for multiple days  
**Test Steps:**
1. Select day filter: "Monday"
2. Apply filter

**Expected Result:**
- Only Monday slots displayed
- Filter works correctly
- Can clear filter

---

### TC-SLOT-008: Filter Lecture Slots by Faculty
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Multiple faculty with slots  
**Test Steps:**
1. Select faculty from dropdown
2. Apply filter

**Expected Result:**
- Only selected faculty's slots shown
- Filter accurate
- Faculty name displayed correctly

---

### TC-SLOT-009: View Available vs. Full Slots
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Mix of available and full slots  
**Test Steps:**
1. Browse lecture slots
2. Identify slot status indicators

**Expected Result:**
- Clear visual indication of availability
- Full slots marked appropriately
- Available seat count displayed
- Enrollment button disabled for full slots

---

### TC-SLOT-010: Recurring Slot Creation
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Faculty logged in  
**Test Steps:**
1. Create slot with recurring = true
2. Set weekly schedule

**Expected Result:**
- Recurring slot created
- Repeats weekly at specified time
- All instances visible
- Can enroll in recurring series

---

## 5. Enrollment System

### TC-ENROLL-001: Student Enrolls in Available Slot
**Priority:** P0  
**Type:** Functional  
**Preconditions:** Student logged in, slot has available capacity  
**Test Steps:**
1. Navigate to lecture slots page
2. Select available slot
3. Click "Enroll" button
4. Confirm enrollment

**Expected Result:**
- Enrollment successful
- Student added to slot's enrolled list
- Available capacity decremented
- Enrollment appears in student's timetable
- Success notification displayed

---

### TC-ENROLL-002: Student Joins Waitlist (Full Slot)
**Priority:** P0  
**Type:** Functional  
**Preconditions:** Slot is at full capacity  
**Test Steps:**
1. Attempt to enroll in full slot
2. System offers waitlist option
3. Join waitlist

**Expected Result:**
- Student added to waitlist
- Waitlist position assigned
- Status shows "Waitlisted"
- Notification when seat becomes available

---

### TC-ENROLL-003: Student Drops Enrollment
**Priority:** P0  
**Type:** Functional  
**Preconditions:** Student enrolled in slot  
**Test Steps:**
1. Navigate to "My Enrollments"
2. Select enrollment to drop
3. Click "Drop" button
4. Confirm drop action

**Expected Result:**
- Enrollment cancelled
- Student removed from enrolled list
- Available capacity incremented
- Next waitlisted student promoted (if applicable)
- Confirmation notification shown

---

### TC-ENROLL-004: Waitlist Position Management
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Multiple students on waitlist  
**Test Steps:**
1. Create scenario with 5 waitlisted students
2. One enrolled student drops
3. Check waitlist positions

**Expected Result:**
- First waitlisted student automatically enrolled
- Remaining students move up in position
- Notifications sent to affected students
- Waitlist positions updated correctly

---

### TC-ENROLL-005: Prevent Duplicate Enrollment
**Priority:** P1  
**Type:** Validation  
**Preconditions:** Student already enrolled in slot  
**Test Steps:**
1. Attempt to enroll in same slot again
2. Click enroll button

**Expected Result:**
- Error message: "Already enrolled in this slot"
- Duplicate enrollment prevented
- No change to enrollment count

---

### TC-ENROLL-006: Enrollment Capacity Validation
**Priority:** P0  
**Type:** Validation  
**Preconditions:** Slot capacity = 50, 50 students enrolled  
**Test Steps:**
1. 51st student attempts to enroll
2. System checks capacity

**Expected Result:**
- Direct enrollment blocked
- Waitlist option offered
- Capacity limit enforced
- Clear message displayed

---

### TC-ENROLL-007: View My Enrollments
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Student has active enrollments  
**Test Steps:**
1. Navigate to "My Enrollments" page
2. View enrolled courses

**Expected Result:**
- All enrollments displayed
- Status shown (Enrolled/Waitlisted)
- Course details visible
- Can drop from this view

---

### TC-ENROLL-008: Faculty Views Enrolled Students
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Faculty owns slot with enrollments  
**Test Steps:**
1. Navigate to faculty's lecture slot
2. View enrolled students list
3. Check student details

**Expected Result:**
- Complete list of enrolled students
- Student information displayed (name, ID, year)
- Enrollment date shown
- Waitlist separately visible
- Export option available (if implemented)

---

### TC-ENROLL-009: Cancel Waitlisted Enrollment
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Student on waitlist  
**Test Steps:**
1. Navigate to enrollments
2. Select waitlisted enrollment
3. Cancel waitlist registration

**Expected Result:**
- Student removed from waitlist
- Subsequent students move up
- Success confirmation shown

---

### TC-ENROLL-010: Enrollment Time Conflict Detection
**Priority:** P2  
**Type:** Validation  
**Preconditions:** Student enrolled in Monday 10:00-11:30 slot  
**Test Steps:**
1. Attempt to enroll in another Monday 10:30-12:00 slot
2. System checks for conflicts

**Expected Result:**
- Time conflict detected
- Warning message displayed
- Enrollment blocked or requires confirmation
- Clear conflict information shown

---

## 6. Student Timetable

### TC-TIMETABLE-001: View Personal Timetable
**Priority:** P0  
**Type:** Functional  
**Preconditions:** Student with enrollments  
**Test Steps:**
1. Navigate to `/timetable` or "My Timetable"
2. View weekly schedule

**Expected Result:**
- Weekly timetable displayed
- All enrolled courses shown
- Correct days and times
- Color-coded by subject/course
- Faculty and venue information visible

---

### TC-TIMETABLE-002: Empty Timetable (No Enrollments)
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Student with no enrollments  
**Test Steps:**
1. Navigate to timetable page
2. View empty schedule

**Expected Result:**
- Empty timetable displayed
- Message: "No enrollments yet"
- Link to browse available courses
- Helpful guidance shown

---

### TC-TIMETABLE-003: Timetable Grid Layout
**Priority:** P2  
**Type:** UI/UX  
**Preconditions:** Student with multiple enrollments  
**Test Steps:**
1. View timetable
2. Check layout and formatting

**Expected Result:**
- Clear grid structure
- Days as columns (Mon-Fri)
- Time slots as rows
- Courses positioned correctly
- No overlapping displays

---

### TC-TIMETABLE-004: Export Timetable
**Priority:** P3  
**Type:** Functional  
**Preconditions:** Student has enrollments  
**Test Steps:**
1. Click "Export" or "Download" button
2. Select format (PDF/iCal/Image)
3. Download timetable

**Expected Result:**
- Timetable exported successfully
- Format matches selection
- All information included
- Readable and well-formatted

---

### TC-TIMETABLE-005: Print Timetable
**Priority:** P3  
**Type:** Functional  
**Preconditions:** Timetable populated  
**Test Steps:**
1. Click print button
2. Preview print layout
3. Print timetable

**Expected Result:**
- Print-friendly format
- All details visible
- Proper page breaks
- Clean layout

---

## 7. Faculty Dashboard

### TC-FACULTY-001: View Faculty Dashboard
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Logged in as faculty  
**Test Steps:**
1. Navigate to dashboard after login
2. View dashboard content

**Expected Result:**
- Faculty-specific dashboard displayed
- Statistics shown (total slots, enrolled students)
- Quick actions available
- Upcoming lectures visible

---

### TC-FACULTY-002: View My Lecture Slots
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Faculty with created slots  
**Test Steps:**
1. Navigate to "My Lecture Slots"
2. View slot list

**Expected Result:**
- All faculty's slots displayed
- Enrollment status shown
- Can edit/delete owned slots
- Create new slot option available

---

### TC-FACULTY-003: Enrollment Analytics
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Faculty with enrollments  
**Test Steps:**
1. View enrollment statistics
2. Check analytics dashboard

**Expected Result:**
- Total enrolled students count
- Enrollment trends visible
- Capacity utilization shown
- Waitlist statistics displayed

---

### TC-FACULTY-004: Manage Slot Capacity
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Faculty owns slot  
**Test Steps:**
1. Select lecture slot
2. Increase capacity from 50 to 60
3. Save changes

**Expected Result:**
- Capacity updated successfully
- Waitlisted students automatically enrolled (if space available)
- Changes reflected immediately

---

### TC-FACULTY-005: View Student Details
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Students enrolled in faculty's slot  
**Test Steps:**
1. Select lecture slot
2. View enrolled students
3. Click on student for details

**Expected Result:**
- Student information displayed
- Contact details visible (if permitted)
- Enrollment history shown
- Academic year visible

---

## 8. Student Dashboard

### TC-STUDENT-001: View Student Dashboard
**Priority:** P1  
**Type:** Functional  
**Preconditions:** Logged in as student  
**Test Steps:**
1. Navigate to dashboard
2. View dashboard overview

**Expected Result:**
- Student-specific dashboard shown
- Enrollment statistics displayed
- Upcoming classes visible
- Quick links to key features

---

### TC-STUDENT-002: Dashboard Statistics
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Student with enrollments  
**Test Steps:**
1. View dashboard stats
2. Verify accuracy

**Expected Result:**
- Total enrollments count accurate
- Total credits calculated correctly
- Upcoming classes count correct
- Available courses shown

---

### TC-STUDENT-003: Quick Actions
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Student logged in  
**Test Steps:**
1. Identify quick action buttons
2. Test navigation

**Expected Result:**
- "Browse Courses" button works
- "View Timetable" link functional
- "Manage Profile" accessible
- All links navigate correctly

---

### TC-STUDENT-004: Recent Activity
**Priority:** P3  
**Type:** Functional  
**Preconditions:** Student has activity history  
**Test Steps:**
1. View recent activity section
2. Check activity log

**Expected Result:**
- Recent enrollments shown
- Drop actions logged
- Activity timestamps accurate
- Limited to recent items (e.g., last 10)

---

## 9. Schedule Management

### TC-SCHEDULE-001: Create Custom Schedule
**Priority:** P2  
**Type:** Functional  
**Preconditions:** User logged in  
**Test Steps:**
1. Navigate to schedules page
2. Click "Create Schedule"
3. Enter schedule details:
   - Name: "Spring 2025"
   - Semester: "Spring"
   - Year: 2025
4. Save schedule

**Expected Result:**
- Schedule created successfully
- Appears in schedules list
- Can add courses to schedule
- Schedule ID generated

---

### TC-SCHEDULE-002: Add Courses to Schedule
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Schedule exists  
**Test Steps:**
1. Open schedule
2. Click "Add Course"
3. Select courses to add
4. Save schedule

**Expected Result:**
- Courses added to schedule
- Total credits calculated
- Time conflicts detected
- Schedule updated

---

### TC-SCHEDULE-003: Update Schedule
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Schedule exists  
**Test Steps:**
1. Select schedule to edit
2. Modify name and details
3. Save changes

**Expected Result:**
- Schedule information updated
- Changes persisted
- Success notification shown

---

### TC-SCHEDULE-004: Delete Schedule
**Priority:** P2  
**Type:** Functional  
**Preconditions:** Schedule exists  
**Test Steps:**
1. Select schedule to delete
2. Confirm deletion
3. Execute delete

**Expected Result:**
- Schedule removed
- Confirmation required
- Associated data handled
- Success message shown

---

### TC-SCHEDULE-005: View All Schedules
**Priority:** P2  
**Type:** Functional  
**Preconditions:** User has created schedules  
**Test Steps:**
1. Navigate to schedules page
2. View schedule list

**Expected Result:**
- All user schedules displayed
- Schedule details visible
- Can filter/sort schedules
- Quick access to actions

---

## 10. Security & Authorization

### TC-SEC-001: JWT Token Generation
**Priority:** P0  
**Type:** Security  
**Preconditions:** User logs in  
**Test Steps:**
1. Login with valid credentials
2. Inspect response

**Expected Result:**
- JWT token generated
- Token includes user ID and role
- Token has expiration (7 days)
- Token signed with secret key

---

### TC-SEC-002: Protected Route Access
**Priority:** P0  
**Type:** Security  
**Preconditions:** Not authenticated  
**Test Steps:**
1. Attempt to access `/dashboard` without login
2. Try to access protected API endpoint

**Expected Result:**
- Redirect to login page
- 401 Unauthorized for API
- Access denied
- Token validation enforced

---

### TC-SEC-003: Role-Based Access Control - Faculty
**Priority:** P0  
**Type:** Security  
**Preconditions:** Logged in as student  
**Test Steps:**
1. Attempt to create lecture slot
2. Try to access faculty-only endpoints

**Expected Result:**
- Access denied (403)
- Authorization middleware blocks
- Error message shown
- Action not executed

---

### TC-SEC-004: Role-Based Access Control - Admin
**Priority:** P0  
**Type:** Security  
**Preconditions:** Logged in as student  
**Test Steps:**
1. Attempt to access user management
2. Try to delete users

**Expected Result:**
- Admin-only actions blocked
- 403 Forbidden response
- Cannot modify system data

---

### TC-SEC-005: Password Encryption
**Priority:** P0  
**Type:** Security  
**Preconditions:** User registration  
**Test Steps:**
1. Create new user account
2. Check database for password storage

**Expected Result:**
- Password stored as bcrypt hash
- Original password not visible
- Hash includes salt
- Passwords cannot be reversed

---

### TC-SEC-006: Token Expiration
**Priority:** P1  
**Type:** Security  
**Preconditions:** User logged in  
**Test Steps:**
1. Generate token with short expiration
2. Wait for expiration
3. Attempt to access protected resource

**Expected Result:**
- Expired token rejected
- 401 Unauthorized response
- User prompted to re-login
- Session invalidated

---

### TC-SEC-007: CORS Configuration
**Priority:** P1  
**Type:** Security  
**Preconditions:** API server running  
**Test Steps:**
1. Send request from unauthorized origin
2. Check CORS headers

**Expected Result:**
- Only allowed origins accepted
- CORS headers properly set
- Unauthorized origins blocked
- Preflight requests handled

---

### TC-SEC-008: SQL Injection Prevention
**Priority:** P0  
**Type:** Security  
**Preconditions:** API endpoints available  
**Test Steps:**
1. Attempt SQL injection in input fields
2. Send malicious payloads

**Expected Result:**
- Mongoose/MongoDB prevents injection
- Input sanitized
- No database manipulation
- Error handled gracefully

---

### TC-SEC-009: XSS Prevention
**Priority:** P0  
**Type:** Security  
**Preconditions:** User input fields  
**Test Steps:**
1. Enter script tags in input: `<script>alert('XSS')</script>`
2. Submit form

**Expected Result:**
- Script tags escaped
- No script execution
- Data stored safely
- Output properly encoded

---

### TC-SEC-010: Rate Limiting
**Priority:** P1  
**Type:** Security  
**Preconditions:** Rate limiting configured  
**Test Steps:**
1. Send 100+ requests in short time
2. Exceed rate limit

**Expected Result:**
- Rate limit enforced
- 429 Too Many Requests response
- Access temporarily blocked
- Retry-after header included

---

## 11. API Testing

### TC-API-001: Health Check Endpoint
**Priority:** P1  
**Type:** API  
**Preconditions:** Server running  
**Test Steps:**
1. Send GET request to `/health`

**Expected Result:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-XX"
}
```

---

### TC-API-002: Registration Endpoint
**Priority:** P0  
**Type:** API  
**Preconditions:** None  
**Test Steps:**
1. POST `/api/auth/register` with user data

**Expected Result:**
- 201 Created status
- User object returned
- Token included
- Password not in response

---

### TC-API-003: Login Endpoint
**Priority:** P0  
**Type:** API  
**Preconditions:** User exists  
**Test Steps:**
1. POST `/api/auth/login` with credentials

**Expected Result:**
- 200 OK status
- Token returned
- User data included
- Session created

---

### TC-API-004: Get User Profile Endpoint
**Priority:** P1  
**Type:** API  
**Preconditions:** User authenticated  
**Test Steps:**
1. GET `/api/auth/me` with valid token

**Expected Result:**
- 200 OK status
- User profile data returned
- Password excluded
- Role and meta data included

---

### TC-API-005: Get All Courses Endpoint
**Priority:** P1  
**Type:** API  
**Preconditions:** Courses exist  
**Test Steps:**
1. GET `/api/courses`

**Expected Result:**
- 200 OK status
- Array of courses returned
- Pagination info included
- Public access allowed

---

### TC-API-006: Create Lecture Slot Endpoint
**Priority:** P1  
**Type:** API  
**Preconditions:** Faculty token  
**Test Steps:**
1. POST `/api/lecture-slots` with slot data

**Expected Result:**
- 201 Created status
- Slot object returned
- Faculty ID auto-assigned
- Validation passed

---

### TC-API-007: Enroll in Slot Endpoint
**Priority:** P0  
**Type:** API  
**Preconditions:** Student token, slot available  
**Test Steps:**
1. POST `/api/enrollments/enroll/:slotId`

**Expected Result:**
- 200 OK or 201 Created
- Enrollment object returned
- Status: "enrolled" or "waitlisted"
- Capacity updated

---

### TC-API-008: Get Student Timetable Endpoint
**Priority:** P1  
**Type:** API  
**Preconditions:** Student with enrollments  
**Test Steps:**
1. GET `/api/enrollments/my-timetable`

**Expected Result:**
- 200 OK status
- Array of enrolled slots
- Organized by day/time
- Complete slot details

---

### TC-API-009: Error Response Format
**Priority:** P1  
**Type:** API  
**Preconditions:** Trigger error condition  
**Test Steps:**
1. Send invalid request
2. Check error response

**Expected Result:**
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

---

### TC-API-010: Pagination Parameters
**Priority:** P2  
**Type:** API  
**Preconditions:** Many records exist  
**Test Steps:**
1. GET `/api/courses?page=2&limit=10`

**Expected Result:**
- Correct page returned
- Limit respected
- Total count included
- Next/prev links provided

---

## 12. UI/UX Testing

### TC-UI-001: Responsive Design - Mobile View
**Priority:** P2  
**Type:** UI/UX  
**Preconditions:** Application accessible  
**Test Steps:**
1. Resize browser to mobile width (375px)
2. Navigate through pages

**Expected Result:**
- Layout adapts to mobile
- All features accessible
- Navigation menu collapses
- Touch-friendly buttons

---

### TC-UI-002: Navigation Menu
**Priority:** P1  
**Type:** UI/UX  
**Preconditions:** User logged in  
**Test Steps:**
1. Click on navigation menu items
2. Test all links

**Expected Result:**
- All menu items functional
- Active page highlighted
- Smooth navigation
- Consistent across pages

---

### TC-UI-003: Toast Notifications
**Priority:** P2  
**Type:** UI/UX  
**Preconditions:** Perform actions  
**Test Steps:**
1. Complete enrollment
2. Update profile
3. Delete item

**Expected Result:**
- Success messages shown
- Error messages displayed
- Auto-dismiss after timeout
- Non-intrusive positioning

---

### TC-UI-004: Loading States
**Priority:** P2  
**Type:** UI/UX  
**Preconditions:** Perform async action  
**Test Steps:**
1. Submit form
2. Load large dataset
3. Observe loading indicators

**Expected Result:**
- Spinner/loader shown during API calls
- Buttons disabled during submission
- Skeleton screens for data loading
- Prevents duplicate submissions

---

### TC-UI-005: Form Validation Messages
**Priority:** P1  
**Type:** UI/UX  
**Preconditions:** Fill out forms  
**Test Steps:**
1. Submit form with invalid data
2. Check validation messages

**Expected Result:**
- Error messages clear and specific
- Field-level validation
- Red border on invalid fields
- Guidance on how to fix errors

---

### TC-UI-006: Accessibility - Keyboard Navigation
**Priority:** P2  
**Type:** Accessibility  
**Preconditions:** Application loaded  
**Test Steps:**
1. Navigate using Tab key
2. Activate with Enter/Space
3. Test all interactive elements

**Expected Result:**
- All elements reachable via keyboard
- Focus indicators visible
- Logical tab order
- No keyboard traps

---

### TC-UI-007: Color Contrast
**Priority:** P3  
**Type:** Accessibility  
**Preconditions:** View pages  
**Test Steps:**
1. Check text color contrast
2. Use contrast checker tool

**Expected Result:**
- Meets WCAG AA standards
- Text readable on backgrounds
- Interactive elements distinguishable
- Sufficient contrast ratios

---

### TC-UI-008: Empty States
**Priority:** P2  
**Type:** UI/UX  
**Preconditions:** New user account  
**Test Steps:**
1. View pages with no data
2. Check empty state messages

**Expected Result:**
- Helpful empty state messages
- Call-to-action buttons present
- Guidance on next steps
- Not just blank pages

---

## 13. Performance Testing

### TC-PERF-001: Page Load Time
**Priority:** P2  
**Type:** Performance  
**Preconditions:** Server running  
**Test Steps:**
1. Clear cache
2. Navigate to dashboard
3. Measure load time

**Expected Result:**
- Page loads in < 3 seconds
- First contentful paint < 1.5s
- Time to interactive < 3.5s
- Optimized bundle sizes

---

### TC-PERF-002: API Response Time
**Priority:** P2  
**Type:** Performance  
**Preconditions:** Database populated  
**Test Steps:**
1. Send API requests
2. Measure response times

**Expected Result:**
- Most endpoints respond < 200ms
- Complex queries < 500ms
- Consistent performance
- No timeout errors

---

### TC-PERF-003: Database Query Optimization
**Priority:** P2  
**Type:** Performance  
**Preconditions:** Large dataset  
**Test Steps:**
1. Query large collections
2. Check query execution time

**Expected Result:**
- Indexes utilized
- Queries optimized
- No N+1 query problems
- Reasonable response times

---

### TC-PERF-004: Concurrent User Handling
**Priority:** P2  
**Type:** Performance  
**Preconditions:** Test environment  
**Test Steps:**
1. Simulate 50 concurrent users
2. Monitor system performance

**Expected Result:**
- System remains responsive
- No crashes or errors
- Request queue handled
- Resources managed well

---

## 14. Integration Testing

### TC-INT-001: End-to-End User Journey - Student
**Priority:** P0  
**Type:** Integration  
**Test Steps:**
1. Register new student account
2. Browse available courses
3. Enroll in lecture slots
4. View timetable
5. Update profile
6. Drop enrollment
7. Logout

**Expected Result:**
- All steps complete successfully
- Data flows between modules
- Consistent user experience
- No broken workflows

---

### TC-INT-002: End-to-End User Journey - Faculty
**Priority:** P0  
**Type:** Integration  
**Test Steps:**
1. Login as faculty
2. Create lecture slot
3. View enrolled students
4. Update slot details
5. Check enrollment analytics
6. Logout

**Expected Result:**
- Faculty workflow seamless
- All features integrated
- Data synchronized
- Actions reflected immediately

---

### TC-INT-003: Enrollment Workflow Integration
**Priority:** P0  
**Type:** Integration  
**Test Steps:**
1. Faculty creates slot with capacity 2
2. Student 1 enrolls (success)
3. Student 2 enrolls (success)
4. Student 3 enrolls (waitlisted)
5. Student 1 drops
6. Student 3 auto-enrolled

**Expected Result:**
- Complete workflow functions
- Waitlist promotion automatic
- All parties notified
- Data consistency maintained

---

### TC-INT-004: Authentication Flow Integration
**Priority:** P0  
**Type:** Integration  
**Test Steps:**
1. Access protected route (redirected to login)
2. Login successfully
3. Redirected to originally requested page
4. Token persists across navigation
5. Logout removes token
6. Protected routes inaccessible

**Expected Result:**
- Auth flow seamless
- State managed correctly
- Redirects work properly
- Session handling robust

---

### TC-INT-005: Data Consistency Across Modules
**Priority:** P1  
**Type:** Integration  
**Test Steps:**
1. Update user profile
2. Check profile in multiple locations
3. Enroll in course
4. Verify in timetable, dashboard, and enrollments
5. Ensure data synchronized

**Expected Result:**
- Data consistent everywhere
- Real-time or near real-time updates
- No stale data displayed
- Cache invalidation working

---

## Test Execution Summary

### Test Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Total Test Cases | 102 | ✅ Complete |
| P0 (Critical) Cases | 22 | Pending Execution |
| P1 (High) Cases | 47 | Pending Execution |
| P2 (Medium) Cases | 30 | Pending Execution |
| P3 (Low) Cases | 6 | Pending Execution |
| Pass Rate Target | > 95% | TBD |
| Code Coverage Target | > 80% | TBD |

### Test Categories Distribution

- **Authentication**: 12 test cases
- **User Management**: 6 test cases
- **Course Management**: 8 test cases
- **Lecture Slots**: 10 test cases
- **Enrollment System**: 10 test cases
- **Student Timetable**: 5 test cases
- **Faculty Dashboard**: 5 test cases
- **Student Dashboard**: 4 test cases
- **Schedule Management**: 5 test cases
- **Security & Authorization**: 10 test cases
- **API Testing**: 10 test cases
- **UI/UX Testing**: 8 test cases
- **Performance Testing**: 4 test cases
- **Integration Testing**: 5 test cases

### Execution Schedule

**Phase 1 - Critical Features (Week 1)**
- Authentication Module
- Enrollment System
- Security & Authorization
- Core API Endpoints

**Phase 2 - Major Features (Week 2)**
- Course Management
- Lecture Slots Management
- User Management
- Faculty & Student Dashboards

**Phase 3 - Supporting Features (Week 3)**
- Timetable Functionality
- Schedule Management
- UI/UX Testing
- Integration Testing

**Phase 4 - Performance & Polish (Week 4)**
- Performance Testing
- Regression Testing
- Bug Fixes
- Final Validation

---

## Defect Management

### Defect Severity Levels

**Critical (S1)**
- System crash or data loss
- Security vulnerabilities
- Core functionality broken
- Resolution: Immediate

**High (S2)**
- Major feature not working
- Significant user impact
- Workaround exists
- Resolution: Within 24 hours

**Medium (S3)**
- Minor feature issues
- Limited user impact
- Resolution: Within 1 week

**Low (S4)**
- Cosmetic issues
- Enhancement requests
- Resolution: Next release

### Defect Tracking

Defects will be tracked using:
- Bug ID
- Title
- Description
- Steps to Reproduce
- Expected vs. Actual Result
- Severity
- Priority
- Status
- Assigned To
- Screenshots/Logs

---

## Appendix

### Test Credentials

**Admin Account:**
- Email: admin@college.edu
- Password: admin123

**Faculty Accounts:**
- sarah.johnson@college.edu / password123
- michael.chen@college.edu / password123

**Student Accounts:**
- john.smith@student.college.edu / password123
- alice.johnson@student.college.edu / password123

### Test Data

Refer to `backend/src/utils/seedData.js` for complete test data setup.

### References

- API Documentation: README.md
- Technical Specifications: Project documentation
- User Stories: Product requirements
- Test Automation Framework: Jest, Supertest

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Next Review:** Monthly or after major releases  
**Approved By:** QA Team Lead

---

## Notes

- All test cases should be executed in a dedicated test environment
- Database should be reset to known state before test execution
- Automated tests should run on every commit (CI/CD pipeline)
- Manual testing required for UI/UX and exploratory testing
- Performance benchmarks should be established and monitored
- Security testing should be conducted regularly
- Regression test suite should be maintained and updated

**END OF DOCUMENT**
