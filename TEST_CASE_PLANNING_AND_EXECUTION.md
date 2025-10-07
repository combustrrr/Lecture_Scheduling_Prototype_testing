# TEST CASE PLANNING AND EXECUTION DOCUMENT

**Project:** Lecture Scheduling System  
**Version:** 1.0  
**Date:** 2025-10-07  
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

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Dashboard Loads Correctly on Login | High | TC_001 | 1 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Ensure dashboard displays all widgets and statistics after user login | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Ensure dashboard displays all widgets and statistics after user login | User must be logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to login page | 2025-10-07 | Login page displays correctly | | | |
| 2 | Enter valid credentials | 2025-10-07 | Credentials accepted | | | |
| 3 | Click 'Sign In' button | 2025-10-07 | User is redirected to dashboard | | | |
| 4 | Verify dashboard widgets load | 2025-10-07 | All statistics, upcoming classes, and quick actions are visible | | | |

---

### Test Case #2

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Homepage Navigation for Unauthenticated User | High | TC_002 | 2 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test homepage displays correctly for users not logged in | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test homepage displays correctly for users not logged in | None | Browser: Chrome, Role: Unauthenticated | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to homepage | 2025-10-07 | Homepage loads with welcome message | | | |
| 2 | Verify 'Get Started' button is visible | 2025-10-07 | Button displays prominently | | | |
| 3 | Verify 'Sign In' button is visible | 2025-10-07 | Button is accessible | | | |
| 4 | Click 'Sign In' button | 2025-10-07 | User is redirected to login page | | | |

---

### Test Case #3

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Faculty Dashboard Analytics Display | High | TC_003 | 3 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Ensure faculty dashboard shows enrollment statistics | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Ensure faculty dashboard shows enrollment statistics | Faculty user logged in | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to faculty dashboard | 2025-10-07 | Dashboard loads successfully | | | |
| 2 | Verify total lecture slots count | 2025-10-07 | Correct number displayed | | | |
| 3 | Verify enrolled students count | 2025-10-07 | Accurate count shown | | | |
| 4 | Verify upcoming lectures section | 2025-10-07 | Upcoming lectures list is visible | | | |

---

### Test Case #4

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify User Can View Profile Information | High | TC_004 | 4 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test that user profile page displays all user details | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test that user profile page displays all user details | User must be logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to profile page | 2025-10-07 | Profile page loads | | | |
| 2 | Verify name is displayed | 2025-10-07 | User's full name shown correctly | | | |
| 3 | Verify email is displayed | 2025-10-07 | Email address shown correctly | | | |
| 4 | Verify role is displayed | 2025-10-07 | User role (Student) displayed | | | |
| 5 | Verify student ID is displayed | 2025-10-07 | Student ID shown correctly | | | |

---

### Test Case #5

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify User Can Edit Profile Information | High | TC_005 | 5 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test profile update functionality | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test profile update functionality | User logged in with existing profile | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to profile edit page | 2025-10-07 | Edit form loads with pre-filled data | | | |
| 2 | Update name field to 'Updated Name' | 2025-10-07 | Field accepts new value | | | |
| 3 | Update year field | 2025-10-07 | Dropdown selection works | | | |
| 4 | Click 'Save Changes' button | 2025-10-07 | Success message appears | | | |
| 5 | Refresh page and verify changes | 2025-10-07 | Updated information persists | | | |

---

### Test Case #6

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Profile Update Validation | High | TC_006 | 6 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test validation on profile update form | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test validation on profile update form | User logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to profile edit page | 2025-10-07 | Form loads | | | |
| 2 | Clear required name field | 2025-10-07 | Field is empty | | | |
| 3 | Attempt to save changes | 2025-10-07 | Validation error displayed | | | |
| 4 | Verify error message clarity | 2025-10-07 | Error states 'Name is required' | | | |

---

### Test Case #7

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Lecture Slots List Displays All Available Slots | High | TC_007 | 7 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test lecture slots listing page shows all active slots | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test lecture slots listing page shows all active slots | Lecture slots exist in database | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots page | 2025-10-07 | Page loads successfully | | | |
| 2 | Verify list contains lecture slots | 2025-10-07 | At least one slot is visible | | | |
| 3 | Verify each slot shows subject name | 2025-10-07 | Subject names displayed | | | |
| 4 | Verify each slot shows faculty name | 2025-10-07 | Faculty information visible | | | |
| 5 | Verify each slot shows time and venue | 2025-10-07 | Schedule details shown | | | |
| 6 | Verify available seats count | 2025-10-07 | Capacity information displayed | | | |

---

### Test Case #8

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course List Pagination | High | TC_008 | 8 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test pagination controls on course listing | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test pagination controls on course listing | More than 10 courses exist | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to courses page | 2025-10-07 | Course list loads | | | |
| 2 | Verify pagination controls are visible | 2025-10-07 | Next/Previous buttons shown | | | |
| 3 | Click 'Next Page' button | 2025-10-07 | Second page of courses loads | | | |
| 4 | Verify page number updates | 2025-10-07 | Page indicator shows '2' | | | |
| 5 | Click 'Previous Page' | 2025-10-07 | Returns to first page | | | |

---

### Test Case #9

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Enrollment List Shows Student's Enrollments | High | TC_009 | 9 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test my enrollments page displays correct data | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test my enrollments page displays correct data | Student has active enrollments | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Enrollments' page | 2025-10-07 | Page loads | | | |
| 2 | Verify enrolled courses are listed | 2025-10-07 | All enrollments visible | | | |
| 3 | Verify enrollment status is shown | 2025-10-07 | Status displays as 'Enrolled' or 'Waitlisted' | | | |
| 4 | Verify 'Drop' button is present | 2025-10-07 | Action button available for each enrollment | | | |

---

### Test Case #10

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course Search by Name | High | TC_010 | 10 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test search functionality on courses page | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test search functionality on courses page | Multiple courses exist | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to courses page | 2025-10-07 | Page loads with all courses | | | |
| 2 | Enter 'Data Structures' in search box | 2025-10-07 | Search input accepts text | | | |
| 3 | Press Enter or click Search | 2025-10-07 | Results filter in real-time | | | |
| 4 | Verify only matching courses appear | 2025-10-07 | Only courses with 'Data Structures' in name shown | | | |
| 5 | Clear search field | 2025-10-07 | All courses reappear | | | |

---

### Test Case #11

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Lecture Slot Filter by Day | High | TC_011 | 11 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test filtering lecture slots by day of week | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test filtering lecture slots by day of week | Slots exist for multiple days | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots page | 2025-10-07 | All slots displayed | | | |
| 2 | Select 'Monday' from day filter dropdown | 2025-10-07 | Dropdown selection works | | | |
| 3 | Click 'Apply Filter' | 2025-10-07 | Filter is applied | | | |
| 4 | Verify only Monday slots are shown | 2025-10-07 | Results match filter criteria | | | |
| 5 | Reset filter | 2025-10-07 | All slots visible again | | | |

---

### Test Case #12

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Lecture Slot Filter by Faculty | High | TC_012 | 12 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test filtering slots by faculty member | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test filtering slots by faculty member | Multiple faculty with slots | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots page | 2025-10-07 | Page loads | | | |
| 2 | Select faculty from dropdown | 2025-10-07 | Faculty list populated | | | |
| 3 | Apply filter | 2025-10-07 | Filter applied successfully | | | |
| 4 | Verify only selected faculty's slots shown | 2025-10-07 | Results filtered correctly | | | |

---

### Test Case #13

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Search with No Results Handling | High | TC_013 | 13 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test behavior when search returns no results | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test behavior when search returns no results | Courses exist | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to courses page | 2025-10-07 | Page loads | | | |
| 2 | Enter 'NonExistentCourse123' in search | 2025-10-07 | Search input accepts text | | | |
| 3 | Execute search | 2025-10-07 | Search completes | | | |
| 4 | Verify 'No results found' message | 2025-10-07 | Helpful message displayed | | | |
| 5 | Verify suggestion to clear filters | 2025-10-07 | User guidance provided | | | |

---

### Test Case #14

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Faculty Can Create New Lecture Slot | High | TC_014 | 14 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test lecture slot creation form | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test lecture slot creation form | Faculty user logged in | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'Create Lecture Slot' page | 2025-10-07 | Form loads | | | |
| 2 | Enter subject name: 'Advanced Algorithms' | 2025-10-07 | Field accepts input | | | |
| 3 | Enter venue: 'Room 201' | 2025-10-07 | Field accepts input | | | |
| 4 | Set capacity to 50 | 2025-10-07 | Number field accepts value | | | |
| 5 | Select day: Monday | 2025-10-07 | Dropdown selection works | | | |
| 6 | Set start time: 10:00 | 2025-10-07 | Time picker works | | | |
| 7 | Set end time: 11:30 | 2025-10-07 | Time picker works | | | |
| 8 | Check 'Recurring' checkbox | 2025-10-07 | Checkbox toggles | | | |
| 9 | Click 'Create Slot' button | 2025-10-07 | Slot created successfully | | | |
| 10 | Verify success notification | 2025-10-07 | Toast message appears | | | |
| 11 | Verify redirect to slot list | 2025-10-07 | New slot visible in list | | | |

---

### Test Case #15

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course Creation Form Validation | High | TC_015 | 15 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test validation on course creation | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test validation on course creation | Admin/Instructor logged in | Browser: Chrome, Role: Admin | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'Create Course' page | 2025-10-07 | Form displays | | | |
| 2 | Leave course name empty | 2025-10-07 | Required field empty | | | |
| 3 | Attempt to submit form | 2025-10-07 | Submission blocked | | | |
| 4 | Verify error message for course name | 2025-10-07 | Error: 'Course name is required' | | | |
| 5 | Enter valid course name | 2025-10-07 | Error clears | | | |
| 6 | Enter negative credits value | 2025-10-07 | Field accepts input | | | |
| 7 | Attempt submit | 2025-10-07 | Validation catches invalid value | | | |
| 8 | Verify error for credits field | 2025-10-07 | Error message shown | | | |

---

### Test Case #16

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Student Registration Form | High | TC_016 | 16 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test new student account creation | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test new student account creation | None | Browser: Chrome, Role: Unauthenticated | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to registration page | 2025-10-07 | Form loads | | | |
| 2 | Enter name: 'John Doe' | 2025-10-07 | Field accepts input | | | |
| 3 | Enter email: 'john.doe@student.edu' | 2025-10-07 | Email field accepts input | | | |
| 4 | Enter password: 'password123' | 2025-10-07 | Password field masked | | | |
| 5 | Confirm password: 'password123' | 2025-10-07 | Confirmation field matches | | | |
| 6 | Select role: 'Student' | 2025-10-07 | Dropdown selection works | | | |
| 7 | Enter student ID: 'STU2025001' | 2025-10-07 | Field accepts input | | | |
| 8 | Select year: '2' | 2025-10-07 | Dropdown selection works | | | |
| 9 | Click 'Create Account' | 2025-10-07 | Registration submitted | | | |
| 10 | Verify account created | 2025-10-07 | Success message and redirect to dashboard | | | |

---

### Test Case #17

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Schedule Creation | High | TC_017 | 17 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test creating a custom schedule | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test creating a custom schedule | User logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to schedules page | 2025-10-07 | Page loads | | | |
| 2 | Click 'Create Schedule' button | 2025-10-07 | Creation modal/form opens | | | |
| 3 | Enter schedule name: 'Spring 2025' | 2025-10-07 | Field accepts input | | | |
| 4 | Select semester: 'Spring' | 2025-10-07 | Dropdown works | | | |
| 5 | Enter year: 2025 | 2025-10-07 | Field accepts input | | | |
| 6 | Click 'Save Schedule' | 2025-10-07 | Schedule created | | | |
| 7 | Verify schedule appears in list | 2025-10-07 | New schedule visible | | | |

---

### Test Case #18

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course Detail Page Display | High | TC_018 | 18 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test course detail page shows all information | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test course detail page shows all information | Course exists | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to courses list | 2025-10-07 | Courses displayed | | | |
| 2 | Click on specific course | 2025-10-07 | Course detail page loads | | | |
| 3 | Verify course name is displayed | 2025-10-07 | Name shown prominently | | | |
| 4 | Verify course code is displayed | 2025-10-07 | Code visible | | | |
| 5 | Verify credits are shown | 2025-10-07 | Credit hours displayed | | | |
| 6 | Verify description is visible | 2025-10-07 | Full description shown | | | |
| 7 | Verify associated lecture slots | 2025-10-07 | Related slots listed | | | |

---

### Test Case #19

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Lecture Slot Detail View | High | TC_019 | 19 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test lecture slot detail page | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test lecture slot detail page | Lecture slot exists | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots list | 2025-10-07 | Slots displayed | | | |
| 2 | Click on a specific slot | 2025-10-07 | Detail page opens | | | |
| 3 | Verify subject name | 2025-10-07 | Subject displayed | | | |
| 4 | Verify faculty information | 2025-10-07 | Faculty name and details shown | | | |
| 5 | Verify schedule (day/time) | 2025-10-07 | Day and time visible | | | |
| 6 | Verify venue | 2025-10-07 | Location displayed | | | |
| 7 | Verify capacity information | 2025-10-07 | Total and available seats shown | | | |
| 8 | Verify enrollment button status | 2025-10-07 | Button enabled/disabled based on capacity | | | |

---

### Test Case #20

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Faculty Can View Enrolled Students | High | TC_020 | 20 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test faculty viewing student enrollment list | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test faculty viewing student enrollment list | Faculty owns slot with enrollments | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Faculty slots listed | | | |
| 2 | Click on a slot with enrollments | 2025-10-07 | Slot detail page opens | | | |
| 3 | Click 'View Enrolled Students' button | 2025-10-07 | Student list loads | | | |
| 4 | Verify student names are listed | 2025-10-07 | All enrolled students shown | | | |
| 5 | Verify student IDs are visible | 2025-10-07 | IDs displayed | | | |
| 6 | Verify enrollment dates | 2025-10-07 | Enrollment timestamps shown | | | |
| 7 | Verify waitlist section if applicable | 2025-10-07 | Waitlisted students shown separately | | | |

---

### Test Case #21

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Lecture Slot Update Functionality | High | TC_021 | 21 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test faculty editing lecture slot | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test faculty editing lecture slot | Faculty owns lecture slot | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Slots listed | | | |
| 2 | Click 'Edit' on a slot | 2025-10-07 | Edit form loads with current data | | | |
| 3 | Update capacity from 50 to 60 | 2025-10-07 | Field accepts new value | | | |
| 4 | Update venue to 'Room 301' | 2025-10-07 | Field accepts change | | | |
| 5 | Click 'Save Changes' | 2025-10-07 | Update submitted | | | |
| 6 | Verify success notification | 2025-10-07 | Toast message appears | | | |
| 7 | Verify changes reflected in list | 2025-10-07 | Updated values displayed | | | |

---

### Test Case #22

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course Update by Admin | High | TC_022 | 22 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test admin editing course information | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test admin editing course information | Admin logged in, course exists | Browser: Chrome, Role: Admin | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to courses management | 2025-10-07 | Courses listed | | | |
| 2 | Select course to edit | 2025-10-07 | Edit form loads | | | |
| 3 | Update course name | 2025-10-07 | Field accepts change | | | |
| 4 | Update credits | 2025-10-07 | Field accepts new value | | | |
| 5 | Update description | 2025-10-07 | Text area accepts input | | | |
| 6 | Save changes | 2025-10-07 | Update processed | | | |
| 7 | Verify changes saved | 2025-10-07 | Updated information displayed | | | |

---

### Test Case #23

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify User Profile Update | High | TC_023 | 23 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test user updating own profile | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test user updating own profile | User logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to profile page | 2025-10-07 | Profile displays | | | |
| 2 | Click 'Edit Profile' button | 2025-10-07 | Edit mode activated | | | |
| 3 | Change name to 'Updated Name' | 2025-10-07 | Field accepts input | | | |
| 4 | Update phone number | 2025-10-07 | Field accepts input | | | |
| 5 | Click 'Save' | 2025-10-07 | Changes submitted | | | |
| 6 | Verify success message | 2025-10-07 | Confirmation shown | | | |
| 7 | Refresh page | 2025-10-07 | Changes persist | | | |

---

### Test Case #24

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Lecture Slot Deletion with Confirmation | High | TC_024 | 24 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test delete functionality with confirmation | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test delete functionality with confirmation | Faculty owns lecture slot | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Slots listed | | | |
| 2 | Click 'Delete' button on a slot | 2025-10-07 | Confirmation modal appears | | | |
| 3 | Verify warning message | 2025-10-07 | Modal shows deletion warning | | | |
| 4 | Click 'Cancel' | 2025-10-07 | Modal closes, slot not deleted | | | |
| 5 | Click 'Delete' again | 2025-10-07 | Modal reappears | | | |
| 6 | Click 'Confirm Delete' | 2025-10-07 | Slot deletion processed | | | |
| 7 | Verify slot removed from list | 2025-10-07 | Slot no longer visible | | | |
| 8 | Verify success notification | 2025-10-07 | Deletion confirmed message shown | | | |

---

### Test Case #25

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course Deletion by Admin | High | TC_025 | 25 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test admin deleting a course | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test admin deleting a course | Admin logged in, course exists | Browser: Chrome, Role: Admin | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to course management | 2025-10-07 | Courses listed | | | |
| 2 | Click delete icon on course | 2025-10-07 | Confirmation dialog appears | | | |
| 3 | Verify confirmation message | 2025-10-07 | Warning about deletion shown | | | |
| 4 | Confirm deletion | 2025-10-07 | Course deleted | | | |
| 5 | Verify course removed | 2025-10-07 | No longer in list | | | |
| 6 | Verify associated data handled | 2025-10-07 | Related slots addressed appropriately | | | |

---

### Test Case #26

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Schedule Deletion | High | TC_026 | 26 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test deleting a custom schedule | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test deleting a custom schedule | User has created schedule | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to schedules page | 2025-10-07 | Schedules listed | | | |
| 2 | Click delete on a schedule | 2025-10-07 | Confirmation prompt shows | | | |
| 3 | Confirm deletion | 2025-10-07 | Schedule deleted | | | |
| 4 | Verify removal from list | 2025-10-07 | Schedule no longer visible | | | |

---

### Test Case #27

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Timetable Export to PDF | High | TC_027 | 27 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test exporting timetable as PDF | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test exporting timetable as PDF | Student has enrollments | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to timetable page | 2025-10-07 | Timetable displays | | | |
| 2 | Click 'Export' button | 2025-10-07 | Export options appear | | | |
| 3 | Select 'PDF' format | 2025-10-07 | PDF option selected | | | |
| 4 | Click 'Download' | 2025-10-07 | Download initiates | | | |
| 5 | Verify file downloads | 2025-10-07 | PDF file received | | | |
| 6 | Open PDF and verify content | 2025-10-07 | Timetable data correctly formatted in PDF | | | |

---

### Test Case #28

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Timetable Print Functionality | High | TC_028 | 28 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test print feature for timetable | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test print feature for timetable | Student has enrollments | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to timetable page | 2025-10-07 | Timetable visible | | | |
| 2 | Click 'Print' button | 2025-10-07 | Print dialog opens | | | |
| 3 | Verify print preview shows timetable | 2025-10-07 | Content properly formatted for printing | | | |
| 4 | Verify all data is visible in preview | 2025-10-07 | No content cut off | | | |

---

### Test Case #29

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify User Can Change Password | High | TC_029 | 29 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test password change functionality | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test password change functionality | User logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to settings/profile page | 2025-10-07 | Page loads | | | |
| 2 | Click 'Change Password' link | 2025-10-07 | Password change form appears | | | |
| 3 | Enter current password | 2025-10-07 | Field accepts input | | | |
| 4 | Enter new password | 2025-10-07 | Field accepts input | | | |
| 5 | Confirm new password | 2025-10-07 | Confirmation field matches | | | |
| 6 | Click 'Update Password' | 2025-10-07 | Password updated | | | |
| 7 | Verify success message | 2025-10-07 | Confirmation shown | | | |
| 8 | Logout and login with new password | 2025-10-07 | New password works | | | |

---

### Test Case #30

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Admin User Management Settings | High | TC_030 | 30 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test admin viewing user management | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test admin viewing user management | Admin logged in | Browser: Chrome, Role: Admin | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to admin settings | 2025-10-07 | Admin panel loads | | | |
| 2 | Click 'User Management' | 2025-10-07 | User list displays | | | |
| 3 | Verify all users are listed | 2025-10-07 | Users from all roles visible | | | |
| 4 | Verify user role information | 2025-10-07 | Roles displayed correctly | | | |
| 5 | Verify user status (active/inactive) | 2025-10-07 | Status indicators shown | | | |

---

### Test Case #31

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Navigation Menu Functionality | High | TC_031 | 31 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test main navigation menu | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test main navigation menu | User logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Verify navigation menu is visible | 2025-10-07 | Menu displayed | | | |
| 2 | Click 'Dashboard' link | 2025-10-07 | Navigates to dashboard | | | |
| 3 | Verify active menu item highlighted | 2025-10-07 | Dashboard link highlighted | | | |
| 4 | Click 'Courses' link | 2025-10-07 | Navigates to courses page | | | |
| 5 | Verify active state updates | 2025-10-07 | Courses link now highlighted | | | |
| 6 | Test all menu items | 2025-10-07 | All navigation links work correctly | | | |

---

### Test Case #32

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Breadcrumb Navigation | High | TC_032 | 32 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test breadcrumb trail on nested pages | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test breadcrumb trail on nested pages | User navigating deep pages | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to course detail page | 2025-10-07 | Page loads | | | |
| 2 | Verify breadcrumb trail shows: Home > Courses > Course Name | 2025-10-07 | Breadcrumb visible | | | |
| 3 | Click 'Courses' in breadcrumb | 2025-10-07 | Returns to courses list | | | |
| 4 | Verify navigation worked | 2025-10-07 | Courses list displayed | | | |

---

### Test Case #33

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Mobile Navigation Menu | High | TC_033 | 33 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test navigation on mobile viewport | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test navigation on mobile viewport | User logged in | Browser: Chrome (375px width), Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Resize browser to mobile width | 2025-10-07 | Layout adapts | | | |
| 2 | Verify hamburger menu icon visible | 2025-10-07 | Menu icon shown | | | |
| 3 | Click hamburger menu | 2025-10-07 | Navigation menu expands | | | |
| 4 | Verify menu items accessible | 2025-10-07 | All links visible | | | |
| 5 | Click a menu item | 2025-10-07 | Navigation works | | | |
| 6 | Verify menu closes after navigation | 2025-10-07 | Menu collapses | | | |

---

### Test Case #34

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Success Notification on Enrollment | High | TC_034 | 34 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test toast notification on successful enrollment | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test toast notification on successful enrollment | Student logged in, slot available | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots | 2025-10-07 | Slots listed | | | |
| 2 | Click 'Enroll' on available slot | 2025-10-07 | Enrollment initiated | | | |
| 3 | Verify success toast appears | 2025-10-07 | Green notification shown | | | |
| 4 | Verify message content | 2025-10-07 | Message states 'Successfully enrolled' | | | |
| 5 | Verify toast auto-dismisses | 2025-10-07 | Notification disappears after few seconds | | | |

---

### Test Case #35

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Error Notification on Failed Action | High | TC_035 | 35 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test error notification display | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test error notification display | Student logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to profile edit | 2025-10-07 | Edit form loads | | | |
| 2 | Clear required field | 2025-10-07 | Field empty | | | |
| 3 | Attempt to save | 2025-10-07 | Validation fails | | | |
| 4 | Verify error notification | 2025-10-07 | Red error toast appears | | | |
| 5 | Verify error message clarity | 2025-10-07 | Message explains issue | | | |
| 6 | Dismiss notification | 2025-10-07 | Can close manually | | | |

---

### Test Case #36

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Waitlist Notification | High | TC_036 | 36 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test notification when joining waitlist | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test notification when joining waitlist | Student trying to enroll in full slot | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots | 2025-10-07 | Slots displayed | | | |
| 2 | Click 'Enroll' on full slot | 2025-10-07 | Waitlist option appears | | | |
| 3 | Confirm joining waitlist | 2025-10-07 | Waitlist enrollment processed | | | |
| 4 | Verify notification message | 2025-10-07 | Toast shows 'Added to waitlist' | | | |
| 5 | Verify waitlist position shown | 2025-10-07 | Position number displayed | | | |

---

### Test Case #37

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Student Cannot Access Faculty Features | High | TC_037 | 37 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test access control for student role | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test access control for student role | Student logged in | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Attempt to navigate to /faculty/create-slot | 2025-10-07 | Access blocked | | | |
| 2 | Verify redirect or error message | 2025-10-07 | 403 Forbidden or redirect to dashboard | | | |
| 3 | Attempt to access admin panel | 2025-10-07 | Access denied | | | |
| 4 | Verify appropriate error message | 2025-10-07 | Error states insufficient permissions | | | |

---

### Test Case #38

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Faculty Cannot Access Admin Features | High | TC_038 | 38 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test faculty role restrictions | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test faculty role restrictions | Faculty logged in | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Attempt to navigate to /admin/users | 2025-10-07 | Access blocked | | | |
| 2 | Verify error response | 2025-10-07 | 403 Forbidden shown | | | |
| 3 | Attempt to delete users | 2025-10-07 | Action not permitted | | | |
| 4 | Verify faculty can access own features | 2025-10-07 | Faculty dashboard accessible | | | |

---

### Test Case #39

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Admin Has Full Access | High | TC_039 | 39 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test admin role permissions | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test admin role permissions | Admin logged in | Browser: Chrome, Role: Admin | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to user management | 2025-10-07 | Access granted | | | |
| 2 | Navigate to course management | 2025-10-07 | Access granted | | | |
| 3 | Navigate to all system settings | 2025-10-07 | All areas accessible | | | |
| 4 | Verify admin-specific actions available | 2025-10-07 | Delete, edit all resources possible | | | |

---

### Test Case #40

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Student Enrollment in Available Slot | High | TC_040 | 40 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test successful enrollment workflow | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test successful enrollment workflow | Student logged in, slot available | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots | 2025-10-07 | Slots listed | | | |
| 2 | Identify slot with available capacity | 2025-10-07 | Slot shows available seats | | | |
| 3 | Click 'Enroll' button | 2025-10-07 | Enrollment modal appears | | | |
| 4 | Confirm enrollment | 2025-10-07 | Enrollment processed | | | |
| 5 | Verify success message | 2025-10-07 | Confirmation shown | | | |
| 6 | Verify enrollment in 'My Enrollments' | 2025-10-07 | Slot appears in enrollments list | | | |
| 7 | Verify capacity decremented | 2025-10-07 | Available seats reduced by 1 | | | |

---

### Test Case #41

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Student Drops Enrollment | High | TC_041 | 41 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test drop enrollment functionality | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test drop enrollment functionality | Student enrolled in slot | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Enrollments' | 2025-10-07 | Enrollments listed | | | |
| 2 | Click 'Drop' button on enrollment | 2025-10-07 | Confirmation dialog appears | | | |
| 3 | Confirm drop action | 2025-10-07 | Enrollment cancelled | | | |
| 4 | Verify success message | 2025-10-07 | Confirmation displayed | | | |
| 5 | Verify enrollment removed from list | 2025-10-07 | No longer in 'My Enrollments' | | | |
| 6 | Verify slot capacity increased | 2025-10-07 | Available seats incremented | | | |

---

### Test Case #42

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Waitlist Automatic Promotion | High | TC_042 | 42 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test waitlist promotion when spot opens | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test waitlist promotion when spot opens | Slot full with waitlist, one student drops | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Student A enrolled, Student B on waitlist | 2025-10-07 | Initial state set | | | |
| 2 | Student A drops enrollment | 2025-10-07 | Spot opens | | | |
| 3 | System automatically enrolls Student B | 2025-10-07 | Promotion occurs | | | |
| 4 | Verify Student B receives notification | 2025-10-07 | Email/notification sent | | | |
| 5 | Verify Student B now shows as enrolled | 2025-10-07 | Status updated to 'Enrolled' | | | |
| 6 | Verify waitlist position updated for others | 2025-10-07 | Remaining waitlist moves up | | | |

---

### Test Case #43

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Duplicate Enrollment Prevention | High | TC_043 | 43 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test system prevents enrolling in same slot twice | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test system prevents enrolling in same slot twice | Student already enrolled in slot | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to lecture slots | 2025-10-07 | Slots displayed | | | |
| 2 | Attempt to enroll in already enrolled slot | 2025-10-07 | Enroll button clicked | | | |
| 3 | Verify error message | 2025-10-07 | Error: 'Already enrolled in this slot' | | | |
| 4 | Verify enrollment count unchanged | 2025-10-07 | No duplicate created | | | |

---

### Test Case #44

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Time Conflict Detection | High | TC_044 | 44 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test enrollment blocked for time conflicts | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test enrollment blocked for time conflicts | Student enrolled in Mon 10:00-11:30 | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Attempt to enroll in Mon 10:30-12:00 slot | 2025-10-07 | Conflicting time | | | |
| 2 | Verify conflict warning appears | 2025-10-07 | Warning message shown | | | |
| 3 | Verify conflict details provided | 2025-10-07 | Shows conflicting slot name and time | | | |
| 4 | Verify enrollment blocked or requires confirmation | 2025-10-07 | Cannot proceed without acknowledging conflict | | | |

---

### Test Case #45

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Timetable Display | High | TC_045 | 45 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test student timetable view | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test student timetable view | Student with multiple enrollments | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Timetable' | 2025-10-07 | Timetable page loads | | | |
| 2 | Verify weekly grid layout | 2025-10-07 | Days as columns, times as rows | | | |
| 3 | Verify all enrolled courses shown | 2025-10-07 | Each enrollment appears in correct time slot | | | |
| 4 | Verify color coding | 2025-10-07 | Different subjects have distinct colors | | | |
| 5 | Verify course details on hover/click | 2025-10-07 | Faculty, venue shown | | | |
| 6 | Verify no overlapping courses | 2025-10-07 | Grid handles conflicts visually | | | |

---

### Test Case #46

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Empty Timetable Handling | High | TC_046 | 46 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test timetable with no enrollments | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test timetable with no enrollments | Student with no enrollments | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Timetable' | 2025-10-07 | Page loads | | | |
| 2 | Verify empty state message | 2025-10-07 | Message: 'No enrollments yet' | | | |
| 3 | Verify call-to-action present | 2025-10-07 | Link to browse courses shown | | | |
| 4 | Click 'Browse Courses' link | 2025-10-07 | Navigates to courses page | | | |

---

### Test Case #47

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Login with Valid Credentials | High | TC_047 | 47 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test user login functionality with correct credentials | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test user login functionality with correct credentials | User account exists | Browser: Chrome, Role: Any | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to login page | 2025-10-07 | Login page displays | | | |
| 2 | Enter valid email | 2025-10-07 | Email field accepts input | | | |
| 3 | Enter valid password | 2025-10-07 | Password field masked | | | |
| 4 | Click 'Sign In' button | 2025-10-07 | Authentication processed | | | |
| 5 | Verify redirect to dashboard | 2025-10-07 | User redirected based on role | | | |

---

### Test Case #48

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Login with Invalid Password | High | TC_048 | 48 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test login failure with wrong password | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test login failure with wrong password | User account exists | Browser: Chrome, Role: Any | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to login page | 2025-10-07 | Page loads | | | |
| 2 | Enter valid email | 2025-10-07 | Email accepted | | | |
| 3 | Enter incorrect password | 2025-10-07 | Password entered | | | |
| 4 | Click 'Sign In' | 2025-10-07 | Login attempted | | | |
| 5 | Verify error message | 2025-10-07 | Error: 'Invalid credentials' shown | | | |
| 6 | Verify user stays on login page | 2025-10-07 | No redirect occurs | | | |

---

### Test Case #49

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Password Field Masking | High | TC_049 | 49 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test password visibility toggle | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test password visibility toggle | On login or registration page | Browser: Chrome, Role: Any | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to login page | 2025-10-07 | Page loads | | | |
| 2 | Enter password in password field | 2025-10-07 | Password hidden by default | | | |
| 3 | Click 'Show Password' icon | 2025-10-07 | Password becomes visible | | | |
| 4 | Click 'Hide Password' icon | 2025-10-07 | Password masked again | | | |

---

### Test Case #50

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Logout Functionality | High | TC_050 | 50 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test user logout clears session | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test user logout clears session | User logged in | Browser: Chrome, Role: Any | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Click user menu icon | 2025-10-07 | Dropdown menu opens | | | |
| 2 | Click 'Logout' option | 2025-10-07 | Logout initiated | | | |
| 3 | Verify redirect to login/home | 2025-10-07 | User logged out | | | |
| 4 | Attempt to access protected route | 2025-10-07 | Redirect to login page | | | |
| 5 | Verify session cleared | 2025-10-07 | Cannot access without re-login | | | |

---

### Test Case #51

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify API Response Time | High | TC_051 | 51 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test API endpoints respond within acceptable time | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test API endpoints respond within acceptable time | Server running | Browser: Chrome with DevTools | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Open DevTools Network tab | 2025-10-07 | Network monitoring active | | | |
| 2 | Navigate to lecture slots page | 2025-10-07 | Page loads | | | |
| 3 | Check API response time for /api/lecture-slots | 2025-10-07 | Response time recorded | | | |
| 4 | Verify response time < 500ms | 2025-10-07 | Performance acceptable | | | |
| 5 | Test multiple endpoints | 2025-10-07 | All meet performance criteria | | | |

---

### Test Case #52

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Responsive Design on Tablet | High | TC_052 | 52 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test layout on tablet viewport | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test layout on tablet viewport | Application accessible | Browser: Chrome (768px width) | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Resize browser to tablet width | 2025-10-07 | Viewport adjusted | | | |
| 2 | Navigate through key pages | 2025-10-07 | All pages load | | | |
| 3 | Verify layout adapts properly | 2025-10-07 | No horizontal scrolling | | | |
| 4 | Verify touch targets are adequate size | 2025-10-07 | Buttons easily clickable | | | |
| 5 | Test navigation menu | 2025-10-07 | Menu accessible and functional | | | |

---

### Test Case #53

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Form Field Required Indicators | High | TC_053 | 53 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test required field marking on forms | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test required field marking on forms | On any form page | Browser: Chrome, Role: Any | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to registration form | 2025-10-07 | Form displays | | | |
| 2 | Verify required fields marked with asterisk | 2025-10-07 | All required fields indicated | | | |
| 3 | Attempt to submit without required fields | 2025-10-07 | Validation triggers | | | |
| 4 | Verify error messages for each required field | 2025-10-07 | Clear error indicators shown | | | |

---

### Test Case #54

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Loading Spinner During Data Fetch | High | TC_054 | 54 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test loading indicators appear during async operations | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test loading indicators appear during async operations | Network can be throttled | Browser: Chrome with slow 3G | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Throttle network to slow 3G | 2025-10-07 | Network limited | | | |
| 2 | Navigate to courses page | 2025-10-07 | Page starts loading | | | |
| 3 | Verify loading spinner appears | 2025-10-07 | Spinner visible | | | |
| 4 | Wait for data to load | 2025-10-07 | Content loads | | | |
| 5 | Verify spinner disappears | 2025-10-07 | Loading indicator removed | | | |

---

### Test Case #55

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Keyboard Accessibility for Forms | High | TC_055 | 55 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test form navigation using keyboard only | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test form navigation using keyboard only | On any form | Browser: Chrome, Keyboard only | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to registration form using Tab | 2025-10-07 | Focus moves between fields | | | |
| 2 | Verify focus indicators visible | 2025-10-07 | Focused fields highlighted | | | |
| 3 | Fill form using keyboard only | 2025-10-07 | All fields accessible | | | |
| 4 | Submit form using Enter key | 2025-10-07 | Form submits successfully | | | |

---

### Test Case #56

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Faculty Slot Capacity Management | High | TC_056 | 56 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test increasing slot capacity automatically enrolls waitlist | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test increasing slot capacity automatically enrolls waitlist | Slot full with waitlist | Browser: Chrome, Role: Faculty | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Slots listed | | | |
| 2 | Select slot with waitlist | 2025-10-07 | Slot details shown | | | |
| 3 | Increase capacity from 50 to 55 | 2025-10-07 | Capacity updated | | | |
| 4 | Save changes | 2025-10-07 | Update processed | | | |
| 5 | Verify waitlisted students auto-enrolled | 2025-10-07 | First 5 on waitlist now enrolled | | | |
| 6 | Verify notifications sent | 2025-10-07 | Students notified of enrollment | | | |

---

### Test Case #57

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Browser Back Button Behavior | High | TC_057 | 57 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test application handles back button correctly | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test application handles back button correctly | User navigating multiple pages | Browser: Chrome, Role: Student | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate from Dashboard to Courses to Course Detail | 2025-10-07 | Navigation sequence | | | |
| 2 | Click browser back button | 2025-10-07 | Returns to courses list | | | |
| 3 | Verify page state preserved | 2025-10-07 | Filters/selections maintained | | | |
| 4 | Click back again | 2025-10-07 | Returns to dashboard | | | |
| 5 | Verify no errors occur | 2025-10-07 | Navigation works smoothly | | | |

---

### Test Case #58

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Session Timeout Handling | High | TC_058 | 58 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test user session expires after inactivity | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test user session expires after inactivity | User logged in | Browser: Chrome, JWT expiration configured | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Login to application | 2025-10-07 | Session started | | | |
| 2 | Wait for token expiration (or simulate) | 2025-10-07 | Time passes | | | |
| 3 | Attempt to perform action after expiration | 2025-10-07 | Action attempted | | | |
| 4 | Verify session expired message | 2025-10-07 | User notified | | | |
| 5 | Verify redirect to login | 2025-10-07 | Must re-authenticate | | | |

---

### Test Case #59

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify XSS Prevention in Text Fields | High | TC_059 | 59 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test application sanitizes script inputs | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test application sanitizes script inputs | User can edit profile or create content | Browser: Chrome, Role: Any | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to profile edit page | 2025-10-07 | Form loads | | | |
| 2 | Enter script tag in name field: <script>alert('XSS')</script> | 2025-10-07 | Malicious input entered | | | |
| 3 | Save changes | 2025-10-07 | Data submitted | | | |
| 4 | View profile page | 2025-10-07 | Profile displays | | | |
| 5 | Verify script did not execute | 2025-10-07 | No alert popup | | | |
| 6 | Verify script tags escaped/removed | 2025-10-07 | Input sanitized | | | |

---

### Test Case #60

| **TEST TITLE** | **PRIORITY** | **TEST CASE ID** | **TEST NUMBER** | **TEST DATE** |
|---|---|---|---|---|
| Verify Course Code Uniqueness Validation | High | TC_060 | 60 | 2025-10-07 |

| **TEST DESCRIPTION** | **TEST DESIGNED BY** | **TEST EXECUTED BY** | **EXECUTION DATE** |
|---|---|---|---|
| Test system prevents duplicate course codes | [Tester Name] | [Tester Name] | [Date] |

| **TEST DESCRIPTION** | **TEST DEPENDENCIES** | **TEST CONDITIONS** | **TEST CONTROL** |
|---|---|---|---|
| Test system prevents duplicate course codes | Course with code 'CS101' exists | Browser: Chrome, Role: Admin | Manual |

| **STEP ID** | **STEP DESCRIPTION** | **TEST DATE** | **EXPECTED RESULTS** | **ACTUAL RESULTS** | **PASS / FAIL** | **ADDITIONAL NOTES** |
|---|---|---|---|---|---|---|
| 1 | Navigate to create course page | 2025-10-07 | Form loads | | | |
| 2 | Enter course name and existing code 'CS101' | 2025-10-07 | Duplicate code entered | | | |
| 3 | Attempt to submit | 2025-10-07 | Validation triggered | | | |
| 4 | Verify error message | 2025-10-07 | Error: 'Course code already exists' | | | |
| 5 | Change to unique code | 2025-10-07 | New code entered | | | |
| 6 | Submit successfully | 2025-10-07 | Course created | | | |

---


## Test Execution Summary

**Total Test Cases:** 60  
**Status:** Ready for Execution  
**Test Environment:** Chrome Browser, Local Development Environment  
**Test Data:** Seeded database with sample users and content  
**Execution Start Date:** 2025-10-07

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
- Navigation: 4 test cases
- Notifications: 3 test cases
- Role-Based Access: 3 test cases
- Enrollment: 5 test cases
- Timetable: 2 test cases
- Authentication: 4 test cases
- Performance: 1 test case
- UI/UX: 3 test cases
- Accessibility: 1 test case
- Capacity Management: 1 test case
- Security: 2 test cases
- Validation: 1 test case

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

- All test cases use actual test date: 2025-10-07 for execution tracking
- **[Tester Name]** and **[Date]** placeholders should be filled during test execution
- **Actual results**, **pass/fail status**, and **additional notes** should be filled during test execution
- Test cases cover all major functional areas of the application beyond just login/signup
- Each test case includes detailed step-by-step instructions and expected results
- Test control is set to "Manual" but can be updated to "Automated" for automated test cases

**END OF DOCUMENT**
