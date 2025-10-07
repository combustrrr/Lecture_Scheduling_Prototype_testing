# TEST CASE PLANNING AND EXECUTION DOCUMENT

**Project:** Lecture Scheduling System  
**Version:** 1.0  
**Date:** January 2025  
**Prepared By:** QA Engineering Team

---

## Document Overview

This document contains comprehensive test cases for the Lecture Scheduling System. Each test case follows a standardized table format with detailed steps, expected results, and execution tracking.

### Test Case Coverage Areas:
- Dashboard & Homepage
- User Profile (View, Edit)
- Data Lists (Lecture Slots, Courses, Enrollments)
- Search & Filtering
- Create/Add New Item forms
- View Item Details pages
- Edit/Update existing items
- Delete items & confirmation modals
- File Upload/Download
- Settings & Configuration
- Navigation & Breadcrumbs
- Notifications & Alerts
- Role-Based Access (Admin vs. Faculty vs. Student)
- Enrollment workflows
- Timetable functionality

---

## Test Cases


### Test Case #1

**TEST TITLE:** Verify Dashboard Loads Correctly on Login | **PRIORITY:** High | **TEST CASE ID:** TC_001 | **TEST NUMBER:** 1 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Ensure dashboard displays all widgets and statistics after user login | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Ensure dashboard displays all widgets and statistics after user login | **TEST DEPENDENCIES:** User must be logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to login page | [Date] | Login page displays correctly | | | |
| 2 | Enter valid credentials | [Date] | Credentials accepted | | | |
| 3 | Click 'Sign In' button | [Date] | User is redirected to dashboard | | | |
| 4 | Verify dashboard widgets load | [Date] | All statistics, upcoming classes, and quick actions are visible | | | |

---

### Test Case #2

**TEST TITLE:** Verify Homepage Navigation for Unauthenticated User | **PRIORITY:** High | **TEST CASE ID:** TC_002 | **TEST NUMBER:** 2 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test homepage displays correctly for users not logged in | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test homepage displays correctly for users not logged in | **TEST DEPENDENCIES:** None | **TEST CONDITIONS:** Browser: Chrome, Role: Unauthenticated | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to homepage | [Date] | Homepage loads with welcome message | | | |
| 2 | Verify 'Get Started' button is visible | [Date] | Button displays prominently | | | |
| 3 | Verify 'Sign In' button is visible | [Date] | Button is accessible | | | |
| 4 | Click 'Sign In' button | [Date] | User is redirected to login page | | | |

---

### Test Case #3

**TEST TITLE:** Verify Faculty Dashboard Analytics Display | **PRIORITY:** High | **TEST CASE ID:** TC_003 | **TEST NUMBER:** 3 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Ensure faculty dashboard shows enrollment statistics | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Ensure faculty dashboard shows enrollment statistics | **TEST DEPENDENCIES:** Faculty user logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to faculty dashboard | [Date] | Dashboard loads successfully | | | |
| 2 | Verify total lecture slots count | [Date] | Correct number displayed | | | |
| 3 | Verify enrolled students count | [Date] | Accurate count shown | | | |
| 4 | Verify upcoming lectures section | [Date] | Upcoming lectures list is visible | | | |

---

### Test Case #4

**TEST TITLE:** Verify User Can View Profile Information | **PRIORITY:** High | **TEST CASE ID:** TC_004 | **TEST NUMBER:** 4 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test that user profile page displays all user details | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test that user profile page displays all user details | **TEST DEPENDENCIES:** User must be logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to profile page | [Date] | Profile page loads | | | |
| 2 | Verify name is displayed | [Date] | User's full name shown correctly | | | |
| 3 | Verify email is displayed | [Date] | Email address shown correctly | | | |
| 4 | Verify role is displayed | [Date] | User role (Student) displayed | | | |
| 5 | Verify student ID is displayed | [Date] | Student ID shown correctly | | | |

---

### Test Case #5

**TEST TITLE:** Verify User Can Edit Profile Information | **PRIORITY:** High | **TEST CASE ID:** TC_005 | **TEST NUMBER:** 5 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test profile update functionality | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test profile update functionality | **TEST DEPENDENCIES:** User logged in with existing profile | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to profile edit page | [Date] | Edit form loads with pre-filled data | | | |
| 2 | Update name field to 'Updated Name' | [Date] | Field accepts new value | | | |
| 3 | Update year field | [Date] | Dropdown selection works | | | |
| 4 | Click 'Save Changes' button | [Date] | Success message appears | | | |
| 5 | Refresh page and verify changes | [Date] | Updated information persists | | | |

---

### Test Case #6

**TEST TITLE:** Verify Profile Update Validation | **PRIORITY:** High | **TEST CASE ID:** TC_006 | **TEST NUMBER:** 6 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test validation on profile update form | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test validation on profile update form | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to profile edit page | [Date] | Form loads | | | |
| 2 | Clear required name field | [Date] | Field is empty | | | |
| 3 | Attempt to save changes | [Date] | Validation error displayed | | | |
| 4 | Verify error message clarity | [Date] | Error states 'Name is required' | | | |

---

### Test Case #7

**TEST TITLE:** Verify Lecture Slots List Displays All Available Slots | **PRIORITY:** High | **TEST CASE ID:** TC_007 | **TEST NUMBER:** 7 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test lecture slots listing page shows all active slots | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test lecture slots listing page shows all active slots | **TEST DEPENDENCIES:** Lecture slots exist in database | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots page | [Date] | Page loads successfully | | | |
| 2 | Verify list contains lecture slots | [Date] | At least one slot is visible | | | |
| 3 | Verify each slot shows subject name | [Date] | Subject names displayed | | | |
| 4 | Verify each slot shows faculty name | [Date] | Faculty information visible | | | |
| 5 | Verify each slot shows time and venue | [Date] | Schedule details shown | | | |
| 6 | Verify available seats count | [Date] | Capacity information displayed | | | |

---

### Test Case #8

**TEST TITLE:** Verify Course List Pagination | **PRIORITY:** High | **TEST CASE ID:** TC_008 | **TEST NUMBER:** 8 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test pagination controls on course listing | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test pagination controls on course listing | **TEST DEPENDENCIES:** More than 10 courses exist | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to courses page | [Date] | Course list loads | | | |
| 2 | Verify pagination controls are visible | [Date] | Next/Previous buttons shown | | | |
| 3 | Click 'Next Page' button | [Date] | Second page of courses loads | | | |
| 4 | Verify page number updates | [Date] | Page indicator shows '2' | | | |
| 5 | Click 'Previous Page' | [Date] | Returns to first page | | | |

---

### Test Case #9

**TEST TITLE:** Verify Enrollment List Shows Student's Enrollments | **PRIORITY:** High | **TEST CASE ID:** TC_009 | **TEST NUMBER:** 9 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test my enrollments page displays correct data | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test my enrollments page displays correct data | **TEST DEPENDENCIES:** Student has active enrollments | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Enrollments' page | [Date] | Page loads | | | |
| 2 | Verify enrolled courses are listed | [Date] | All enrollments visible | | | |
| 3 | Verify enrollment status is shown | [Date] | Status displays as 'Enrolled' or 'Waitlisted' | | | |
| 4 | Verify 'Drop' button is present | [Date] | Action button available for each enrollment | | | |

---

### Test Case #10

**TEST TITLE:** Verify Course Search by Name | **PRIORITY:** High | **TEST CASE ID:** TC_010 | **TEST NUMBER:** 10 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test search functionality on courses page | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test search functionality on courses page | **TEST DEPENDENCIES:** Multiple courses exist | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to courses page | [Date] | Page loads with all courses | | | |
| 2 | Enter 'Data Structures' in search box | [Date] | Search input accepts text | | | |
| 3 | Press Enter or click Search | [Date] | Results filter in real-time | | | |
| 4 | Verify only matching courses appear | [Date] | Only courses with 'Data Structures' in name shown | | | |
| 5 | Clear search field | [Date] | All courses reappear | | | |

---

### Test Case #11

**TEST TITLE:** Verify Lecture Slot Filter by Day | **PRIORITY:** High | **TEST CASE ID:** TC_011 | **TEST NUMBER:** 11 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test filtering lecture slots by day of week | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test filtering lecture slots by day of week | **TEST DEPENDENCIES:** Slots exist for multiple days | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots page | [Date] | All slots displayed | | | |
| 2 | Select 'Monday' from day filter dropdown | [Date] | Dropdown selection works | | | |
| 3 | Click 'Apply Filter' | [Date] | Filter is applied | | | |
| 4 | Verify only Monday slots are shown | [Date] | Results match filter criteria | | | |
| 5 | Reset filter | [Date] | All slots visible again | | | |

---

### Test Case #12

**TEST TITLE:** Verify Lecture Slot Filter by Faculty | **PRIORITY:** High | **TEST CASE ID:** TC_012 | **TEST NUMBER:** 12 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test filtering slots by faculty member | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test filtering slots by faculty member | **TEST DEPENDENCIES:** Multiple faculty with slots | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots page | [Date] | Page loads | | | |
| 2 | Select faculty from dropdown | [Date] | Faculty list populated | | | |
| 3 | Apply filter | [Date] | Filter applied successfully | | | |
| 4 | Verify only selected faculty's slots shown | [Date] | Results filtered correctly | | | |

---

### Test Case #13

**TEST TITLE:** Verify Search with No Results Handling | **PRIORITY:** High | **TEST CASE ID:** TC_013 | **TEST NUMBER:** 13 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test behavior when search returns no results | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test behavior when search returns no results | **TEST DEPENDENCIES:** Courses exist | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to courses page | [Date] | Page loads | | | |
| 2 | Enter 'NonExistentCourse123' in search | [Date] | Search input accepts text | | | |
| 3 | Execute search | [Date] | Search completes | | | |
| 4 | Verify 'No results found' message | [Date] | Helpful message displayed | | | |
| 5 | Verify suggestion to clear filters | [Date] | User guidance provided | | | |

---

### Test Case #14

**TEST TITLE:** Verify Faculty Can Create New Lecture Slot | **PRIORITY:** High | **TEST CASE ID:** TC_014 | **TEST NUMBER:** 14 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test lecture slot creation form | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test lecture slot creation form | **TEST DEPENDENCIES:** Faculty user logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'Create Lecture Slot' page | [Date] | Form loads | | | |
| 2 | Enter subject name: 'Advanced Algorithms' | [Date] | Field accepts input | | | |
| 3 | Enter venue: 'Room 201' | [Date] | Field accepts input | | | |
| 4 | Set capacity to 50 | [Date] | Number field accepts value | | | |
| 5 | Select day: Monday | [Date] | Dropdown selection works | | | |
| 6 | Set start time: 10:00 | [Date] | Time picker works | | | |
| 7 | Set end time: 11:30 | [Date] | Time picker works | | | |
| 8 | Check 'Recurring' checkbox | [Date] | Checkbox toggles | | | |
| 9 | Click 'Create Slot' button | [Date] | Slot created successfully | | | |
| 10 | Verify success notification | [Date] | Toast message appears | | | |
| 11 | Verify redirect to slot list | [Date] | New slot visible in list | | | |

---

### Test Case #15

**TEST TITLE:** Verify Course Creation Form Validation | **PRIORITY:** High | **TEST CASE ID:** TC_015 | **TEST NUMBER:** 15 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test validation on course creation | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test validation on course creation | **TEST DEPENDENCIES:** Admin/Instructor logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Admin | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'Create Course' page | [Date] | Form displays | | | |
| 2 | Leave course name empty | [Date] | Required field empty | | | |
| 3 | Attempt to submit form | [Date] | Submission blocked | | | |
| 4 | Verify error message for course name | [Date] | Error: 'Course name is required' | | | |
| 5 | Enter valid course name | [Date] | Error clears | | | |
| 6 | Enter negative credits value | [Date] | Field accepts input | | | |
| 7 | Attempt submit | [Date] | Validation catches invalid value | | | |
| 8 | Verify error for credits field | [Date] | Error message shown | | | |

---

### Test Case #16

**TEST TITLE:** Verify Student Registration Form | **PRIORITY:** High | **TEST CASE ID:** TC_016 | **TEST NUMBER:** 16 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test new student account creation | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test new student account creation | **TEST DEPENDENCIES:** None | **TEST CONDITIONS:** Browser: Chrome, Role: Unauthenticated | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to registration page | [Date] | Form loads | | | |
| 2 | Enter name: 'John Doe' | [Date] | Field accepts input | | | |
| 3 | Enter email: 'john.doe@student.edu' | [Date] | Email field accepts input | | | |
| 4 | Enter password: 'password123' | [Date] | Password field masked | | | |
| 5 | Confirm password: 'password123' | [Date] | Confirmation field matches | | | |
| 6 | Select role: 'Student' | [Date] | Dropdown selection works | | | |
| 7 | Enter student ID: 'STU2025001' | [Date] | Field accepts input | | | |
| 8 | Select year: '2' | [Date] | Dropdown selection works | | | |
| 9 | Click 'Create Account' | [Date] | Registration submitted | | | |
| 10 | Verify account created | [Date] | Success message and redirect to dashboard | | | |

---

### Test Case #17

**TEST TITLE:** Verify Schedule Creation | **PRIORITY:** High | **TEST CASE ID:** TC_017 | **TEST NUMBER:** 17 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test creating a custom schedule | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test creating a custom schedule | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to schedules page | [Date] | Page loads | | | |
| 2 | Click 'Create Schedule' button | [Date] | Creation modal/form opens | | | |
| 3 | Enter schedule name: 'Spring 2025' | [Date] | Field accepts input | | | |
| 4 | Select semester: 'Spring' | [Date] | Dropdown works | | | |
| 5 | Enter year: 2025 | [Date] | Field accepts input | | | |
| 6 | Click 'Save Schedule' | [Date] | Schedule created | | | |
| 7 | Verify schedule appears in list | [Date] | New schedule visible | | | |

---

### Test Case #18

**TEST TITLE:** Verify Course Detail Page Display | **PRIORITY:** High | **TEST CASE ID:** TC_018 | **TEST NUMBER:** 18 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test course detail page shows all information | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test course detail page shows all information | **TEST DEPENDENCIES:** Course exists | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to courses list | [Date] | Courses displayed | | | |
| 2 | Click on specific course | [Date] | Course detail page loads | | | |
| 3 | Verify course name is displayed | [Date] | Name shown prominently | | | |
| 4 | Verify course code is displayed | [Date] | Code visible | | | |
| 5 | Verify credits are shown | [Date] | Credit hours displayed | | | |
| 6 | Verify description is visible | [Date] | Full description shown | | | |
| 7 | Verify associated lecture slots | [Date] | Related slots listed | | | |

---

### Test Case #19

**TEST TITLE:** Verify Lecture Slot Detail View | **PRIORITY:** High | **TEST CASE ID:** TC_019 | **TEST NUMBER:** 19 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test lecture slot detail page | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test lecture slot detail page | **TEST DEPENDENCIES:** Lecture slot exists | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots list | [Date] | Slots displayed | | | |
| 2 | Click on a specific slot | [Date] | Detail page opens | | | |
| 3 | Verify subject name | [Date] | Subject displayed | | | |
| 4 | Verify faculty information | [Date] | Faculty name and details shown | | | |
| 5 | Verify schedule (day/time) | [Date] | Day and time visible | | | |
| 6 | Verify venue | [Date] | Location displayed | | | |
| 7 | Verify capacity information | [Date] | Total and available seats shown | | | |
| 8 | Verify enrollment button status | [Date] | Button enabled/disabled based on capacity | | | |

---

### Test Case #20

**TEST TITLE:** Verify Faculty Can View Enrolled Students | **PRIORITY:** High | **TEST CASE ID:** TC_020 | **TEST NUMBER:** 20 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test faculty viewing student enrollment list | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test faculty viewing student enrollment list | **TEST DEPENDENCIES:** Faculty owns slot with enrollments | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Lecture Slots' | [Date] | Faculty slots listed | | | |
| 2 | Click on a slot with enrollments | [Date] | Slot detail page opens | | | |
| 3 | Click 'View Enrolled Students' button | [Date] | Student list loads | | | |
| 4 | Verify student names are listed | [Date] | All enrolled students shown | | | |
| 5 | Verify student IDs are visible | [Date] | IDs displayed | | | |
| 6 | Verify enrollment dates | [Date] | Enrollment timestamps shown | | | |
| 7 | Verify waitlist section if applicable | [Date] | Waitlisted students shown separately | | | |

---

### Test Case #21

**TEST TITLE:** Verify Lecture Slot Update Functionality | **PRIORITY:** High | **TEST CASE ID:** TC_021 | **TEST NUMBER:** 21 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test faculty editing lecture slot | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test faculty editing lecture slot | **TEST DEPENDENCIES:** Faculty owns lecture slot | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Lecture Slots' | [Date] | Slots listed | | | |
| 2 | Click 'Edit' on a slot | [Date] | Edit form loads with current data | | | |
| 3 | Update capacity from 50 to 60 | [Date] | Field accepts new value | | | |
| 4 | Update venue to 'Room 301' | [Date] | Field accepts change | | | |
| 5 | Click 'Save Changes' | [Date] | Update submitted | | | |
| 6 | Verify success notification | [Date] | Toast message appears | | | |
| 7 | Verify changes reflected in list | [Date] | Updated values displayed | | | |

---

### Test Case #22

**TEST TITLE:** Verify Course Update by Admin | **PRIORITY:** High | **TEST CASE ID:** TC_022 | **TEST NUMBER:** 22 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test admin editing course information | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test admin editing course information | **TEST DEPENDENCIES:** Admin logged in, course exists | **TEST CONDITIONS:** Browser: Chrome, Role: Admin | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to courses management | [Date] | Courses listed | | | |
| 2 | Select course to edit | [Date] | Edit form loads | | | |
| 3 | Update course name | [Date] | Field accepts change | | | |
| 4 | Update credits | [Date] | Field accepts new value | | | |
| 5 | Update description | [Date] | Text area accepts input | | | |
| 6 | Save changes | [Date] | Update processed | | | |
| 7 | Verify changes saved | [Date] | Updated information displayed | | | |

---

### Test Case #23

**TEST TITLE:** Verify User Profile Update | **PRIORITY:** High | **TEST CASE ID:** TC_023 | **TEST NUMBER:** 23 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test user updating own profile | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test user updating own profile | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to profile page | [Date] | Profile displays | | | |
| 2 | Click 'Edit Profile' button | [Date] | Edit mode activated | | | |
| 3 | Change name to 'Updated Name' | [Date] | Field accepts input | | | |
| 4 | Update phone number | [Date] | Field accepts input | | | |
| 5 | Click 'Save' | [Date] | Changes submitted | | | |
| 6 | Verify success message | [Date] | Confirmation shown | | | |
| 7 | Refresh page | [Date] | Changes persist | | | |

---

### Test Case #24

**TEST TITLE:** Verify Lecture Slot Deletion with Confirmation | **PRIORITY:** High | **TEST CASE ID:** TC_024 | **TEST NUMBER:** 24 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test delete functionality with confirmation | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test delete functionality with confirmation | **TEST DEPENDENCIES:** Faculty owns lecture slot | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Lecture Slots' | [Date] | Slots listed | | | |
| 2 | Click 'Delete' button on a slot | [Date] | Confirmation modal appears | | | |
| 3 | Verify warning message | [Date] | Modal shows deletion warning | | | |
| 4 | Click 'Cancel' | [Date] | Modal closes, slot not deleted | | | |
| 5 | Click 'Delete' again | [Date] | Modal reappears | | | |
| 6 | Click 'Confirm Delete' | [Date] | Slot deletion processed | | | |
| 7 | Verify slot removed from list | [Date] | Slot no longer visible | | | |
| 8 | Verify success notification | [Date] | Deletion confirmed message shown | | | |

---

### Test Case #25

**TEST TITLE:** Verify Course Deletion by Admin | **PRIORITY:** High | **TEST CASE ID:** TC_025 | **TEST NUMBER:** 25 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test admin deleting a course | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test admin deleting a course | **TEST DEPENDENCIES:** Admin logged in, course exists | **TEST CONDITIONS:** Browser: Chrome, Role: Admin | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to course management | [Date] | Courses listed | | | |
| 2 | Click delete icon on course | [Date] | Confirmation dialog appears | | | |
| 3 | Verify confirmation message | [Date] | Warning about deletion shown | | | |
| 4 | Confirm deletion | [Date] | Course deleted | | | |
| 5 | Verify course removed | [Date] | No longer in list | | | |
| 6 | Verify associated data handled | [Date] | Related slots addressed appropriately | | | |

---

### Test Case #26

**TEST TITLE:** Verify Schedule Deletion | **PRIORITY:** High | **TEST CASE ID:** TC_026 | **TEST NUMBER:** 26 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test deleting a custom schedule | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test deleting a custom schedule | **TEST DEPENDENCIES:** User has created schedule | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to schedules page | [Date] | Schedules listed | | | |
| 2 | Click delete on a schedule | [Date] | Confirmation prompt shows | | | |
| 3 | Confirm deletion | [Date] | Schedule deleted | | | |
| 4 | Verify removal from list | [Date] | Schedule no longer visible | | | |

---

### Test Case #27

**TEST TITLE:** Verify Timetable Export to PDF | **PRIORITY:** High | **TEST CASE ID:** TC_027 | **TEST NUMBER:** 27 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test exporting timetable as PDF | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test exporting timetable as PDF | **TEST DEPENDENCIES:** Student has enrollments | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to timetable page | [Date] | Timetable displays | | | |
| 2 | Click 'Export' button | [Date] | Export options appear | | | |
| 3 | Select 'PDF' format | [Date] | PDF option selected | | | |
| 4 | Click 'Download' | [Date] | Download initiates | | | |
| 5 | Verify file downloads | [Date] | PDF file received | | | |
| 6 | Open PDF and verify content | [Date] | Timetable data correctly formatted in PDF | | | |

---

### Test Case #28

**TEST TITLE:** Verify Timetable Print Functionality | **PRIORITY:** High | **TEST CASE ID:** TC_028 | **TEST NUMBER:** 28 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test print feature for timetable | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test print feature for timetable | **TEST DEPENDENCIES:** Student has enrollments | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to timetable page | [Date] | Timetable visible | | | |
| 2 | Click 'Print' button | [Date] | Print dialog opens | | | |
| 3 | Verify print preview shows timetable | [Date] | Content properly formatted for printing | | | |
| 4 | Verify all data is visible in preview | [Date] | No content cut off | | | |

---

### Test Case #29

**TEST TITLE:** Verify User Can Change Password | **PRIORITY:** High | **TEST CASE ID:** TC_029 | **TEST NUMBER:** 29 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test password change functionality | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test password change functionality | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to settings/profile page | [Date] | Page loads | | | |
| 2 | Click 'Change Password' link | [Date] | Password change form appears | | | |
| 3 | Enter current password | [Date] | Field accepts input | | | |
| 4 | Enter new password | [Date] | Field accepts input | | | |
| 5 | Confirm new password | [Date] | Confirmation field matches | | | |
| 6 | Click 'Update Password' | [Date] | Password updated | | | |
| 7 | Verify success message | [Date] | Confirmation shown | | | |
| 8 | Logout and login with new password | [Date] | New password works | | | |

---

### Test Case #30

**TEST TITLE:** Verify Admin User Management Settings | **PRIORITY:** High | **TEST CASE ID:** TC_030 | **TEST NUMBER:** 30 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test admin viewing user management | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test admin viewing user management | **TEST DEPENDENCIES:** Admin logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Admin | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to admin settings | [Date] | Admin panel loads | | | |
| 2 | Click 'User Management' | [Date] | User list displays | | | |
| 3 | Verify all users are listed | [Date] | Users from all roles visible | | | |
| 4 | Verify user role information | [Date] | Roles displayed correctly | | | |
| 5 | Verify user status (active/inactive) | [Date] | Status indicators shown | | | |

---

### Test Case #31

**TEST TITLE:** Verify Navigation Menu Functionality | **PRIORITY:** High | **TEST CASE ID:** TC_031 | **TEST NUMBER:** 31 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test main navigation menu | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test main navigation menu | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Verify navigation menu is visible | [Date] | Menu displayed | | | |
| 2 | Click 'Dashboard' link | [Date] | Navigates to dashboard | | | |
| 3 | Verify active menu item highlighted | [Date] | Dashboard link highlighted | | | |
| 4 | Click 'Courses' link | [Date] | Navigates to courses page | | | |
| 5 | Verify active state updates | [Date] | Courses link now highlighted | | | |
| 6 | Test all menu items | [Date] | All navigation links work correctly | | | |

---

### Test Case #32

**TEST TITLE:** Verify Breadcrumb Navigation | **PRIORITY:** High | **TEST CASE ID:** TC_032 | **TEST NUMBER:** 32 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test breadcrumb trail on nested pages | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test breadcrumb trail on nested pages | **TEST DEPENDENCIES:** User navigating deep pages | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to course detail page | [Date] | Page loads | | | |
| 2 | Verify breadcrumb trail shows: Home > Courses > Course Name | [Date] | Breadcrumb visible | | | |
| 3 | Click 'Courses' in breadcrumb | [Date] | Returns to courses list | | | |
| 4 | Verify navigation worked | [Date] | Courses list displayed | | | |

---

### Test Case #33

**TEST TITLE:** Verify Mobile Navigation Menu | **PRIORITY:** High | **TEST CASE ID:** TC_033 | **TEST NUMBER:** 33 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test navigation on mobile viewport | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test navigation on mobile viewport | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome (375px width), Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Resize browser to mobile width | [Date] | Layout adapts | | | |
| 2 | Verify hamburger menu icon visible | [Date] | Menu icon shown | | | |
| 3 | Click hamburger menu | [Date] | Navigation menu expands | | | |
| 4 | Verify menu items accessible | [Date] | All links visible | | | |
| 5 | Click a menu item | [Date] | Navigation works | | | |
| 6 | Verify menu closes after navigation | [Date] | Menu collapses | | | |

---

### Test Case #34

**TEST TITLE:** Verify Success Notification on Enrollment | **PRIORITY:** High | **TEST CASE ID:** TC_034 | **TEST NUMBER:** 34 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test toast notification on successful enrollment | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test toast notification on successful enrollment | **TEST DEPENDENCIES:** Student logged in, slot available | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots | [Date] | Slots listed | | | |
| 2 | Click 'Enroll' on available slot | [Date] | Enrollment initiated | | | |
| 3 | Verify success toast appears | [Date] | Green notification shown | | | |
| 4 | Verify message content | [Date] | Message states 'Successfully enrolled' | | | |
| 5 | Verify toast auto-dismisses | [Date] | Notification disappears after few seconds | | | |

---

### Test Case #35

**TEST TITLE:** Verify Error Notification on Failed Action | **PRIORITY:** High | **TEST CASE ID:** TC_035 | **TEST NUMBER:** 35 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test error notification display | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test error notification display | **TEST DEPENDENCIES:** Student logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to profile edit | [Date] | Edit form loads | | | |
| 2 | Clear required field | [Date] | Field empty | | | |
| 3 | Attempt to save | [Date] | Validation fails | | | |
| 4 | Verify error notification | [Date] | Red error toast appears | | | |
| 5 | Verify error message clarity | [Date] | Message explains issue | | | |
| 6 | Dismiss notification | [Date] | Can close manually | | | |

---

### Test Case #36

**TEST TITLE:** Verify Waitlist Notification | **PRIORITY:** High | **TEST CASE ID:** TC_036 | **TEST NUMBER:** 36 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test notification when joining waitlist | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test notification when joining waitlist | **TEST DEPENDENCIES:** Student trying to enroll in full slot | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots | [Date] | Slots displayed | | | |
| 2 | Click 'Enroll' on full slot | [Date] | Waitlist option appears | | | |
| 3 | Confirm joining waitlist | [Date] | Waitlist enrollment processed | | | |
| 4 | Verify notification message | [Date] | Toast shows 'Added to waitlist' | | | |
| 5 | Verify waitlist position shown | [Date] | Position number displayed | | | |

---

### Test Case #37

**TEST TITLE:** Verify Student Cannot Access Faculty Features | **PRIORITY:** High | **TEST CASE ID:** TC_037 | **TEST NUMBER:** 37 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test access control for student role | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test access control for student role | **TEST DEPENDENCIES:** Student logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Attempt to navigate to /faculty/create-slot | [Date] | Access blocked | | | |
| 2 | Verify redirect or error message | [Date] | 403 Forbidden or redirect to dashboard | | | |
| 3 | Attempt to access admin panel | [Date] | Access denied | | | |
| 4 | Verify appropriate error message | [Date] | Error states insufficient permissions | | | |

---

### Test Case #38

**TEST TITLE:** Verify Faculty Cannot Access Admin Features | **PRIORITY:** High | **TEST CASE ID:** TC_038 | **TEST NUMBER:** 38 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test faculty role restrictions | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test faculty role restrictions | **TEST DEPENDENCIES:** Faculty logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Attempt to navigate to /admin/users | [Date] | Access blocked | | | |
| 2 | Verify error response | [Date] | 403 Forbidden shown | | | |
| 3 | Attempt to delete users | [Date] | Action not permitted | | | |
| 4 | Verify faculty can access own features | [Date] | Faculty dashboard accessible | | | |

---

### Test Case #39

**TEST TITLE:** Verify Admin Has Full Access | **PRIORITY:** High | **TEST CASE ID:** TC_039 | **TEST NUMBER:** 39 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test admin role permissions | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test admin role permissions | **TEST DEPENDENCIES:** Admin logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Admin | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to user management | [Date] | Access granted | | | |
| 2 | Navigate to course management | [Date] | Access granted | | | |
| 3 | Navigate to all system settings | [Date] | All areas accessible | | | |
| 4 | Verify admin-specific actions available | [Date] | Delete, edit all resources possible | | | |

---

### Test Case #40

**TEST TITLE:** Verify Student Enrollment in Available Slot | **PRIORITY:** High | **TEST CASE ID:** TC_040 | **TEST NUMBER:** 40 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test successful enrollment workflow | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test successful enrollment workflow | **TEST DEPENDENCIES:** Student logged in, slot available | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots | [Date] | Slots listed | | | |
| 2 | Identify slot with available capacity | [Date] | Slot shows available seats | | | |
| 3 | Click 'Enroll' button | [Date] | Enrollment modal appears | | | |
| 4 | Confirm enrollment | [Date] | Enrollment processed | | | |
| 5 | Verify success message | [Date] | Confirmation shown | | | |
| 6 | Verify enrollment in 'My Enrollments' | [Date] | Slot appears in enrollments list | | | |
| 7 | Verify capacity decremented | [Date] | Available seats reduced by 1 | | | |

---

### Test Case #41

**TEST TITLE:** Verify Student Drops Enrollment | **PRIORITY:** High | **TEST CASE ID:** TC_041 | **TEST NUMBER:** 41 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test drop enrollment functionality | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test drop enrollment functionality | **TEST DEPENDENCIES:** Student enrolled in slot | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Enrollments' | [Date] | Enrollments listed | | | |
| 2 | Click 'Drop' button on enrollment | [Date] | Confirmation dialog appears | | | |
| 3 | Confirm drop action | [Date] | Enrollment cancelled | | | |
| 4 | Verify success message | [Date] | Confirmation displayed | | | |
| 5 | Verify enrollment removed from list | [Date] | No longer in 'My Enrollments' | | | |
| 6 | Verify slot capacity increased | [Date] | Available seats incremented | | | |

---

### Test Case #42

**TEST TITLE:** Verify Waitlist Automatic Promotion | **PRIORITY:** High | **TEST CASE ID:** TC_042 | **TEST NUMBER:** 42 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test waitlist promotion when spot opens | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test waitlist promotion when spot opens | **TEST DEPENDENCIES:** Slot full with waitlist, one student drops | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Student A enrolled, Student B on waitlist | [Date] | Initial state set | | | |
| 2 | Student A drops enrollment | [Date] | Spot opens | | | |
| 3 | System automatically enrolls Student B | [Date] | Promotion occurs | | | |
| 4 | Verify Student B receives notification | [Date] | Email/notification sent | | | |
| 5 | Verify Student B now shows as enrolled | [Date] | Status updated to 'Enrolled' | | | |
| 6 | Verify waitlist position updated for others | [Date] | Remaining waitlist moves up | | | |

---

### Test Case #43

**TEST TITLE:** Verify Duplicate Enrollment Prevention | **PRIORITY:** High | **TEST CASE ID:** TC_043 | **TEST NUMBER:** 43 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test system prevents enrolling in same slot twice | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test system prevents enrolling in same slot twice | **TEST DEPENDENCIES:** Student already enrolled in slot | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to lecture slots | [Date] | Slots displayed | | | |
| 2 | Attempt to enroll in already enrolled slot | [Date] | Enroll button clicked | | | |
| 3 | Verify error message | [Date] | Error: 'Already enrolled in this slot' | | | |
| 4 | Verify enrollment count unchanged | [Date] | No duplicate created | | | |

---

### Test Case #44

**TEST TITLE:** Verify Time Conflict Detection | **PRIORITY:** High | **TEST CASE ID:** TC_044 | **TEST NUMBER:** 44 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test enrollment blocked for time conflicts | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test enrollment blocked for time conflicts | **TEST DEPENDENCIES:** Student enrolled in Mon 10:00-11:30 | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Attempt to enroll in Mon 10:30-12:00 slot | [Date] | Conflicting time | | | |
| 2 | Verify conflict warning appears | [Date] | Warning message shown | | | |
| 3 | Verify conflict details provided | [Date] | Shows conflicting slot name and time | | | |
| 4 | Verify enrollment blocked or requires confirmation | [Date] | Cannot proceed without acknowledging conflict | | | |

---

### Test Case #45

**TEST TITLE:** Verify Timetable Display | **PRIORITY:** High | **TEST CASE ID:** TC_045 | **TEST NUMBER:** 45 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test student timetable view | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test student timetable view | **TEST DEPENDENCIES:** Student with multiple enrollments | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Timetable' | [Date] | Timetable page loads | | | |
| 2 | Verify weekly grid layout | [Date] | Days as columns, times as rows | | | |
| 3 | Verify all enrolled courses shown | [Date] | Each enrollment appears in correct time slot | | | |
| 4 | Verify color coding | [Date] | Different subjects have distinct colors | | | |
| 5 | Verify course details on hover/click | [Date] | Faculty, venue shown | | | |
| 6 | Verify no overlapping courses | [Date] | Grid handles conflicts visually | | | |

---

### Test Case #46

**TEST TITLE:** Verify Empty Timetable Handling | **PRIORITY:** High | **TEST CASE ID:** TC_046 | **TEST NUMBER:** 46 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test timetable with no enrollments | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test timetable with no enrollments | **TEST DEPENDENCIES:** Student with no enrollments | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Timetable' | [Date] | Page loads | | | |
| 2 | Verify empty state message | [Date] | Message: 'No enrollments yet' | | | |
| 3 | Verify call-to-action present | [Date] | Link to browse courses shown | | | |
| 4 | Click 'Browse Courses' link | [Date] | Navigates to courses page | | | |

---



### Test Case #47

**TEST TITLE:** Verify Login with Valid Credentials | **PRIORITY:** High | **TEST CASE ID:** TC_047 | **TEST NUMBER:** 47 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test user login functionality with correct credentials | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test user login functionality with correct credentials | **TEST DEPENDENCIES:** User account exists | **TEST CONDITIONS:** Browser: Chrome, Role: Any | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to login page | [Date] | Login page displays | | | |
| 2 | Enter valid email | [Date] | Email field accepts input | | | |
| 3 | Enter valid password | [Date] | Password field masked | | | |
| 4 | Click 'Sign In' button | [Date] | Authentication processed | | | |
| 5 | Verify redirect to dashboard | [Date] | User redirected based on role | | | |

---

### Test Case #48

**TEST TITLE:** Verify Login with Invalid Password | **PRIORITY:** High | **TEST CASE ID:** TC_048 | **TEST NUMBER:** 48 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test login failure with wrong password | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test login failure with wrong password | **TEST DEPENDENCIES:** User account exists | **TEST CONDITIONS:** Browser: Chrome, Role: Any | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to login page | [Date] | Page loads | | | |
| 2 | Enter valid email | [Date] | Email accepted | | | |
| 3 | Enter incorrect password | [Date] | Password entered | | | |
| 4 | Click 'Sign In' | [Date] | Login attempted | | | |
| 5 | Verify error message | [Date] | Error: 'Invalid credentials' shown | | | |
| 6 | Verify user stays on login page | [Date] | No redirect occurs | | | |

---

### Test Case #49

**TEST TITLE:** Verify Password Field Masking | **PRIORITY:** High | **TEST CASE ID:** TC_049 | **TEST NUMBER:** 49 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test password visibility toggle | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test password visibility toggle | **TEST DEPENDENCIES:** On login or registration page | **TEST CONDITIONS:** Browser: Chrome, Role: Any | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to login page | [Date] | Page loads | | | |
| 2 | Enter password in password field | [Date] | Password hidden by default | | | |
| 3 | Click 'Show Password' icon | [Date] | Password becomes visible | | | |
| 4 | Click 'Hide Password' icon | [Date] | Password masked again | | | |

---

### Test Case #50

**TEST TITLE:** Verify Logout Functionality | **PRIORITY:** High | **TEST CASE ID:** TC_050 | **TEST NUMBER:** 50 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test user logout clears session | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test user logout clears session | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, Role: Any | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Click user menu icon | [Date] | Dropdown menu opens | | | |
| 2 | Click 'Logout' option | [Date] | Logout initiated | | | |
| 3 | Verify redirect to login/home | [Date] | User logged out | | | |
| 4 | Attempt to access protected route | [Date] | Redirect to login page | | | |
| 5 | Verify session cleared | [Date] | Cannot access without re-login | | | |

---

### Test Case #51

**TEST TITLE:** Verify API Response Time | **PRIORITY:** High | **TEST CASE ID:** TC_051 | **TEST NUMBER:** 51 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test API endpoints respond within acceptable time | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test API endpoints respond within acceptable time | **TEST DEPENDENCIES:** Server running | **TEST CONDITIONS:** Browser: Chrome with DevTools | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Open DevTools Network tab | [Date] | Network monitoring active | | | |
| 2 | Navigate to lecture slots page | [Date] | Page loads | | | |
| 3 | Check API response time for /api/lecture-slots | [Date] | Response time recorded | | | |
| 4 | Verify response time < 500ms | [Date] | Performance acceptable | | | |
| 5 | Test multiple endpoints | [Date] | All meet performance criteria | | | |

---

### Test Case #52

**TEST TITLE:** Verify Responsive Design on Tablet | **PRIORITY:** High | **TEST CASE ID:** TC_052 | **TEST NUMBER:** 52 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test layout on tablet viewport | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test layout on tablet viewport | **TEST DEPENDENCIES:** Application accessible | **TEST CONDITIONS:** Browser: Chrome (768px width) | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Resize browser to tablet width | [Date] | Viewport adjusted | | | |
| 2 | Navigate through key pages | [Date] | All pages load | | | |
| 3 | Verify layout adapts properly | [Date] | No horizontal scrolling | | | |
| 4 | Verify touch targets are adequate size | [Date] | Buttons easily clickable | | | |
| 5 | Test navigation menu | [Date] | Menu accessible and functional | | | |

---

### Test Case #53

**TEST TITLE:** Verify Form Field Required Indicators | **PRIORITY:** High | **TEST CASE ID:** TC_053 | **TEST NUMBER:** 53 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test required field marking on forms | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test required field marking on forms | **TEST DEPENDENCIES:** On any form page | **TEST CONDITIONS:** Browser: Chrome, Role: Any | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to registration form | [Date] | Form displays | | | |
| 2 | Verify required fields marked with asterisk | [Date] | All required fields indicated | | | |
| 3 | Attempt to submit without required fields | [Date] | Validation triggers | | | |
| 4 | Verify error messages for each required field | [Date] | Clear error indicators shown | | | |

---

### Test Case #54

**TEST TITLE:** Verify Loading Spinner During Data Fetch | **PRIORITY:** High | **TEST CASE ID:** TC_054 | **TEST NUMBER:** 54 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test loading indicators appear during async operations | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test loading indicators appear during async operations | **TEST DEPENDENCIES:** Network can be throttled | **TEST CONDITIONS:** Browser: Chrome with slow 3G | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Throttle network to slow 3G | [Date] | Network limited | | | |
| 2 | Navigate to courses page | [Date] | Page starts loading | | | |
| 3 | Verify loading spinner appears | [Date] | Spinner visible | | | |
| 4 | Wait for data to load | [Date] | Content loads | | | |
| 5 | Verify spinner disappears | [Date] | Loading indicator removed | | | |

---

### Test Case #55

**TEST TITLE:** Verify Keyboard Accessibility for Forms | **PRIORITY:** High | **TEST CASE ID:** TC_055 | **TEST NUMBER:** 55 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test form navigation using keyboard only | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test form navigation using keyboard only | **TEST DEPENDENCIES:** On any form | **TEST CONDITIONS:** Browser: Chrome, Keyboard only | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to registration form using Tab | [Date] | Focus moves between fields | | | |
| 2 | Verify focus indicators visible | [Date] | Focused fields highlighted | | | |
| 3 | Fill form using keyboard only | [Date] | All fields accessible | | | |
| 4 | Submit form using Enter key | [Date] | Form submits successfully | | | |

---

### Test Case #56

**TEST TITLE:** Verify Faculty Slot Capacity Management | **PRIORITY:** High | **TEST CASE ID:** TC_056 | **TEST NUMBER:** 56 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test increasing slot capacity automatically enrolls waitlist | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test increasing slot capacity automatically enrolls waitlist | **TEST DEPENDENCIES:** Slot full with waitlist | **TEST CONDITIONS:** Browser: Chrome, Role: Faculty | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to 'My Lecture Slots' | [Date] | Slots listed | | | |
| 2 | Select slot with waitlist | [Date] | Slot details shown | | | |
| 3 | Increase capacity from 50 to 55 | [Date] | Capacity updated | | | |
| 4 | Save changes | [Date] | Update processed | | | |
| 5 | Verify waitlisted students auto-enrolled | [Date] | First 5 on waitlist now enrolled | | | |
| 6 | Verify notifications sent | [Date] | Students notified of enrollment | | | |

---

### Test Case #57

**TEST TITLE:** Verify Browser Back Button Behavior | **PRIORITY:** High | **TEST CASE ID:** TC_057 | **TEST NUMBER:** 57 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test application handles back button correctly | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test application handles back button correctly | **TEST DEPENDENCIES:** User navigating multiple pages | **TEST CONDITIONS:** Browser: Chrome, Role: Student | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate from Dashboard to Courses to Course Detail | [Date] | Navigation sequence | | | |
| 2 | Click browser back button | [Date] | Returns to courses list | | | |
| 3 | Verify page state preserved | [Date] | Filters/selections maintained | | | |
| 4 | Click back again | [Date] | Returns to dashboard | | | |
| 5 | Verify no errors occur | [Date] | Navigation works smoothly | | | |

---

### Test Case #58

**TEST TITLE:** Verify Session Timeout Handling | **PRIORITY:** High | **TEST CASE ID:** TC_058 | **TEST NUMBER:** 58 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test user session expires after inactivity | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test user session expires after inactivity | **TEST DEPENDENCIES:** User logged in | **TEST CONDITIONS:** Browser: Chrome, JWT expiration configured | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Login to application | [Date] | Session started | | | |
| 2 | Wait for token expiration (or simulate) | [Date] | Time passes | | | |
| 3 | Attempt to perform action after expiration | [Date] | Action attempted | | | |
| 4 | Verify session expired message | [Date] | User notified | | | |
| 5 | Verify redirect to login | [Date] | Must re-authenticate | | | |

---

### Test Case #59

**TEST TITLE:** Verify XSS Prevention in Text Fields | **PRIORITY:** High | **TEST CASE ID:** TC_059 | **TEST NUMBER:** 59 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test application sanitizes script inputs | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test application sanitizes script inputs | **TEST DEPENDENCIES:** User can edit profile or create content | **TEST CONDITIONS:** Browser: Chrome, Role: Any | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to profile edit page | [Date] | Form loads | | | |
| 2 | Enter script tag in name field: <script>alert('XSS')</script> | [Date] | Malicious input entered | | | |
| 3 | Save changes | [Date] | Data submitted | | | |
| 4 | View profile page | [Date] | Profile displays | | | |
| 5 | Verify script did not execute | [Date] | No alert popup | | | |
| 6 | Verify script tags escaped/removed | [Date] | Input sanitized | | | |

---

### Test Case #60

**TEST TITLE:** Verify Course Code Uniqueness Validation | **PRIORITY:** High | **TEST CASE ID:** TC_060 | **TEST NUMBER:** 60 | **TEST DATE:** [Date]

**TEST DESCRIPTION:** Test system prevents duplicate course codes | **TEST DESIGNED BY:** [Tester Name] | **TEST EXECUTED BY:** [Tester Name] | **EXECUTION DATE:** [Date]

**TEST DESCRIPTION:** Test system prevents duplicate course codes | **TEST DEPENDENCIES:** Course with code 'CS101' exists | **TEST CONDITIONS:** Browser: Chrome, Role: Admin | **TEST CONTROL:** Manual

| STEP ID | STEP DESCRIPTION | TEST DATE | EXPECTED RESULTS | ACTUAL RESULTS | PASS / FAIL | ADDITIONAL NOTES |
|---------|------------------|-----------|------------------|----------------|-------------|------------------|
| 1 | Navigate to create course page | [Date] | Form loads | | | |
| 2 | Enter course name and existing code 'CS101' | [Date] | Duplicate code entered | | | |
| 3 | Attempt to submit | [Date] | Validation triggered | | | |
| 4 | Verify error message | [Date] | Error: 'Course code already exists' | | | |
| 5 | Change to unique code | [Date] | New code entered | | | |
| 6 | Submit successfully | [Date] | Course created | | | |

---

## Test Execution Summary

**Total Test Cases:** 61  
**Status:** Ready for Execution  
**Test Environment:** Chrome Browser, Local Development Environment  
**Test Data:** Seeded database with sample users and content

### Priority Distribution:
- **High Priority:** All test cases (Critical functionality)

### Functional Area Distribution:
- Dashboard & Homepage: 3 test cases
- User Profile: 3 test cases  
- Data Lists: 3 test cases
- Search & Filtering: 4 test cases
- Create/Add New Item: 4 test cases
- View Item Details: 3 test cases
- Edit/Update Items: 3 test cases
- Delete Items: 3 test cases
- File Download: 2 test cases
- Settings: 2 test cases
- Navigation: 3 test cases
- Notifications: 3 test cases
- Role-Based Access: 3 test cases
- Enrollment: 5 test cases
- Timetable: 2 test cases
- Additional areas: 5 test cases

---

## Test Credentials

**Admin Account:**
- Email: admin@college.edu
- Password: admin123

**Faculty Account:**
- Email: sarah.johnson@college.edu
- Password: password123

**Student Accounts:**
- Email: john.smith@student.college.edu
- Password: password123
- Email: alice.johnson@student.college.edu
- Password: password123

---

## Notes

- All test cases use placeholders `[Date]` and `[Tester Name]` for execution tracking
- Actual results, pass/fail status, and additional notes should be filled during test execution
- Test cases cover all major functional areas of the application beyond just login/signup
- Each test case includes detailed step-by-step instructions and expected results
- Test control is set to "Manual" but can be updated to "Automated" for automated test cases

**END OF DOCUMENT**
