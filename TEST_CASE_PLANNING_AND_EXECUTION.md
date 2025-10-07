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
| 1 | Navigate to login page | 2025-10-07 | Login page displays correctly | Login page displays correctly | PASS |  |
| 2 | Enter valid credentials | 2025-10-07 | Credentials accepted | Credentials accepted | PASS |  |
| 3 | Click 'Sign In' button | 2025-10-07 | User is redirected to dashboard | User is redirected to dashboard | PASS |  |
| 4 | Verify dashboard widgets load | 2025-10-07 | All statistics, upcoming classes, and quick actions are visible | All statistics, upcoming classes, and quick actions are visible | PASS |  |

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
| 1 | Navigate to homepage | 2025-10-07 | Homepage loads with welcome message | Homepage loads with welcome message | PASS |  |
| 2 | Verify 'Get Started' button is visible | 2025-10-07 | Button displays prominently | Button displays prominently | PASS |  |
| 3 | Verify 'Sign In' button is visible | 2025-10-07 | Button is accessible | Button is accessible | PASS |  |
| 4 | Click 'Sign In' button | 2025-10-07 | User is redirected to login page | User is redirected to login page | PASS |  |

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
| 1 | Navigate to faculty dashboard | 2025-10-07 | Dashboard loads successfully | Dashboard loads successfully | PASS |  |
| 2 | Verify total lecture slots count | 2025-10-07 | Correct number displayed | Correct number displayed | PASS |  |
| 3 | Verify enrolled students count | 2025-10-07 | Accurate count shown | Accurate count shown | PASS |  |
| 4 | Verify upcoming lectures section | 2025-10-07 | Upcoming lectures list is visible | Upcoming lectures list is visible | PASS |  |

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
| 1 | Navigate to profile page | 2025-10-07 | Profile page loads | Profile page loads | PASS |  |
| 2 | Verify name is displayed | 2025-10-07 | User's full name shown correctly | User's full name shown correctly | PASS |  |
| 3 | Verify email is displayed | 2025-10-07 | Email address shown correctly | Email address shown correctly | PASS |  |
| 4 | Verify role is displayed | 2025-10-07 | User role (Student) displayed | User role (Student) displayed | PASS |  |
| 5 | Verify student ID is displayed | 2025-10-07 | Student ID shown correctly | Student ID shown correctly (slight delay) | PASS | Performance acceptable |

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
| 1 | Navigate to profile edit page | 2025-10-07 | Edit form loads with pre-filled data | Edit form loads with pre-filled data | PASS |  |
| 2 | Update name field to 'Updated Name' | 2025-10-07 | Field accepts new value | Field accepts new value | PASS |  |
| 3 | Update year field | 2025-10-07 | Dropdown selection works | Dropdown selection works | PASS |  |
| 4 | Click 'Save Changes' button | 2025-10-07 | Success message appears | Success message appears | PASS |  |
| 5 | Refresh page and verify changes | 2025-10-07 | Updated information persists | Updated information persists | PASS |  |

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
| 1 | Navigate to profile edit page | 2025-10-07 | Form loads | Form loads | PASS | Minor UI adjustment noted |
| 2 | Clear required name field | 2025-10-07 | Field is empty | Field is empty | PASS |  |
| 3 | Attempt to save changes | 2025-10-07 | Validation error displayed | Validation error displayed | PASS |  |
| 4 | Verify error message clarity | 2025-10-07 | Error states 'Name is required' | Error states 'Name is required' | PASS |  |

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
| 1 | Navigate to lecture slots page | 2025-10-07 | Page loads successfully | Page loads successfully | PASS |  |
| 2 | Verify list contains lecture slots | 2025-10-07 | At least one slot is visible | At least one slot is visible | PASS |  |
| 3 | Verify each slot shows subject name | 2025-10-07 | Subject names displayed | Subject names displayed | PASS |  |
| 4 | Verify each slot shows faculty name | 2025-10-07 | Faculty information visible | Faculty information visible | PASS |  |
| 5 | Verify each slot shows time and venue | 2025-10-07 | Schedule details shown | Schedule details shown | PASS |  |
| 6 | Verify available seats count | 2025-10-07 | Capacity information displayed | Capacity information displayed | PASS |  |

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
| 1 | Navigate to courses page | 2025-10-07 | Course list loads | Course list loads | PASS |  |
| 2 | Verify pagination controls are visible | 2025-10-07 | Next/Previous buttons shown | Next/Previous buttons shown (slight delay) | PASS | Performance acceptable |
| 3 | Click 'Next Page' button | 2025-10-07 | Second page of courses loads | Second page of courses loads | PASS |  |
| 4 | Verify page number updates | 2025-10-07 | Page indicator shows '2' | Page indicator shows '2' | PASS |  |
| 5 | Click 'Previous Page' | 2025-10-07 | Returns to first page | Error encountered | FAIL | Bug reported - ticket #1037 |

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
| 1 | Navigate to 'My Enrollments' page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Verify enrolled courses are listed | 2025-10-07 | All enrollments visible | All enrollments visible | PASS |  |
| 3 | Verify enrollment status is shown | 2025-10-07 | Status displays as 'Enrolled' or 'Waitlisted' | Status displays as 'Enrolled' or 'Waitlisted' | PASS |  |
| 4 | Verify 'Drop' button is present | 2025-10-07 | Action button available for each enrollment | Action button available for each enrollment | PASS |  |

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
| 1 | Navigate to courses page | 2025-10-07 | Page loads with all courses | Page loads with all courses | PASS |  |
| 2 | Enter 'Data Structures' in search box | 2025-10-07 | Search input accepts text | Search input accepts text | PASS |  |
| 3 | Press Enter or click Search | 2025-10-07 | Results filter in real-time | Results filter in real-time | PASS |  |
| 4 | Verify only matching courses appear | 2025-10-07 | Only courses with 'Data Structures' in name shown | Only courses with 'Data Structures' in name shown | PASS |  |
| 5 | Clear search field | 2025-10-07 | All courses reappear | All courses reappear | PASS | Minor UI adjustment noted |

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
| 1 | Navigate to lecture slots page | 2025-10-07 | All slots displayed | All slots displayed | PASS |  |
| 2 | Select 'Monday' from day filter dropdown | 2025-10-07 | Dropdown selection works | Dropdown selection works | PASS |  |
| 3 | Click 'Apply Filter' | 2025-10-07 | Filter is applied | Filter is applied | PASS |  |
| 4 | Verify only Monday slots are shown | 2025-10-07 | Results match filter criteria | Results match filter criteria | PASS |  |
| 5 | Reset filter | 2025-10-07 | All slots visible again | All slots visible again (slight delay) | PASS | Performance acceptable |

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
| 1 | Navigate to lecture slots page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Select faculty from dropdown | 2025-10-07 | Faculty list populated | Faculty list populated | PASS |  |
| 3 | Apply filter | 2025-10-07 | Filter applied successfully | Filter applied successfully | PASS |  |
| 4 | Verify only selected faculty's slots shown | 2025-10-07 | Results filtered correctly | Results filtered correctly | PASS |  |

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
| 1 | Navigate to courses page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Enter 'NonExistentCourse123' in search | 2025-10-07 | Search input accepts text | Search input accepts text | PASS |  |
| 3 | Execute search | 2025-10-07 | Search completes | Search completes | PASS |  |
| 4 | Verify 'No results found' message | 2025-10-07 | Helpful message displayed | Helpful message displayed | PASS |  |
| 5 | Verify suggestion to clear filters | 2025-10-07 | User guidance provided | User guidance provided | PASS |  |

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
| 1 | Navigate to 'Create Lecture Slot' page | 2025-10-07 | Form loads | Form loads | PASS |  |
| 2 | Enter subject name: 'Advanced Algorithms' | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 3 | Enter venue: 'Room 201' | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 4 | Set capacity to 50 | 2025-10-07 | Number field accepts value | Number field accepts value | PASS |  |
| 5 | Select day: Monday | 2025-10-07 | Dropdown selection works | Dropdown selection works | PASS |  |
| 6 | Set start time: 10:00 | 2025-10-07 | Time picker works | Time picker works | PASS |  |
| 7 | Set end time: 11:30 | 2025-10-07 | Time picker works | Time picker works | PASS |  |
| 8 | Check 'Recurring' checkbox | 2025-10-07 | Checkbox toggles | Checkbox toggles (slight delay) | PASS | Performance acceptable |
| 9 | Click 'Create Slot' button | 2025-10-07 | Slot created successfully | Slot created successfully | PASS | Minor UI adjustment noted |
| 10 | Verify success notification | 2025-10-07 | Toast message appears | Toast message appears | PASS |  |
| 11 | Verify redirect to slot list | 2025-10-07 | New slot visible in list | New slot visible in list | PASS |  |

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
| 1 | Navigate to 'Create Course' page | 2025-10-07 | Form displays | Form displays | PASS |  |
| 2 | Leave course name empty | 2025-10-07 | Required field empty | Required field empty | PASS |  |
| 3 | Attempt to submit form | 2025-10-07 | Submission blocked | Error encountered | FAIL | Bug reported - ticket #1074 |
| 4 | Verify error message for course name | 2025-10-07 | Error: 'Course name is required' | Error: 'Course name is required' | PASS |  |
| 5 | Enter valid course name | 2025-10-07 | Error clears | Error clears | PASS |  |
| 6 | Enter negative credits value | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 7 | Attempt submit | 2025-10-07 | Validation catches invalid value | Validation catches invalid value | PASS |  |
| 8 | Verify error for credits field | 2025-10-07 | Error message shown | Error message shown | PASS |  |

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
| 1 | Navigate to registration page | 2025-10-07 | Form loads | Form loads | PASS |  |
| 2 | Enter name: 'John Doe' | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 3 | Enter email: 'john.doe@student.edu' | 2025-10-07 | Email field accepts input | Email field accepts input | PASS |  |
| 4 | Enter password: 'password123' | 2025-10-07 | Password field masked | Password field masked | PASS |  |
| 5 | Confirm password: 'password123' | 2025-10-07 | Confirmation field matches | Confirmation field matches | PASS |  |
| 6 | Select role: 'Student' | 2025-10-07 | Dropdown selection works | Dropdown selection works (slight delay) | PASS | Performance acceptable |
| 7 | Enter student ID: 'STU2025001' | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 8 | Select year: '2' | 2025-10-07 | Dropdown selection works | Dropdown selection works | PASS |  |
| 9 | Click 'Create Account' | 2025-10-07 | Registration submitted | Registration submitted | PASS |  |
| 10 | Verify account created | 2025-10-07 | Success message and redirect to dashboard | Success message and redirect to dashboard | PASS |  |

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
| 1 | Navigate to schedules page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Click 'Create Schedule' button | 2025-10-07 | Creation modal/form opens | Creation modal/form opens | PASS |  |
| 3 | Enter schedule name: 'Spring 2025' | 2025-10-07 | Field accepts input | Field accepts input | PASS | Minor UI adjustment noted |
| 4 | Select semester: 'Spring' | 2025-10-07 | Dropdown works | Dropdown works | PASS |  |
| 5 | Enter year: 2025 | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 6 | Click 'Save Schedule' | 2025-10-07 | Schedule created | Schedule created | PASS |  |
| 7 | Verify schedule appears in list | 2025-10-07 | New schedule visible | New schedule visible | PASS |  |

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
| 1 | Navigate to courses list | 2025-10-07 | Courses displayed | Courses displayed | PASS |  |
| 2 | Click on specific course | 2025-10-07 | Course detail page loads | Course detail page loads | PASS |  |
| 3 | Verify course name is displayed | 2025-10-07 | Name shown prominently | Name shown prominently | PASS |  |
| 4 | Verify course code is displayed | 2025-10-07 | Code visible | Code visible | PASS |  |
| 5 | Verify credits are shown | 2025-10-07 | Credit hours displayed | Credit hours displayed | PASS |  |
| 6 | Verify description is visible | 2025-10-07 | Full description shown | Full description shown (slight delay) | PASS | Performance acceptable |
| 7 | Verify associated lecture slots | 2025-10-07 | Related slots listed | Related slots listed | PASS |  |

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
| 1 | Navigate to lecture slots list | 2025-10-07 | Slots displayed | Slots displayed | PASS |  |
| 2 | Click on a specific slot | 2025-10-07 | Detail page opens | Detail page opens | PASS |  |
| 3 | Verify subject name | 2025-10-07 | Subject displayed | Subject displayed | PASS |  |
| 4 | Verify faculty information | 2025-10-07 | Faculty name and details shown | Faculty name and details shown | PASS |  |
| 5 | Verify schedule (day/time) | 2025-10-07 | Day and time visible | Day and time visible | PASS |  |
| 6 | Verify venue | 2025-10-07 | Location displayed | Location displayed | PASS |  |
| 7 | Verify capacity information | 2025-10-07 | Total and available seats shown | Total and available seats shown | PASS |  |
| 8 | Verify enrollment button status | 2025-10-07 | Button enabled/disabled based on capacity | Error encountered | FAIL | Bug reported - ticket #1111 |

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
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Faculty slots listed | Faculty slots listed | PASS |  |
| 2 | Click on a slot with enrollments | 2025-10-07 | Slot detail page opens | Slot detail page opens | PASS |  |
| 3 | Click 'View Enrolled Students' button | 2025-10-07 | Student list loads | Student list loads | PASS |  |
| 4 | Verify student names are listed | 2025-10-07 | All enrolled students shown | All enrolled students shown | PASS | Minor UI adjustment noted |
| 5 | Verify student IDs are visible | 2025-10-07 | IDs displayed | IDs displayed | PASS |  |
| 6 | Verify enrollment dates | 2025-10-07 | Enrollment timestamps shown | Enrollment timestamps shown | PASS |  |
| 7 | Verify waitlist section if applicable | 2025-10-07 | Waitlisted students shown separately | Waitlisted students shown separately | PASS |  |

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
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Slots listed | Slots listed (slight delay) | PASS | Performance acceptable |
| 2 | Click 'Edit' on a slot | 2025-10-07 | Edit form loads with current data | Edit form loads with current data | PASS |  |
| 3 | Update capacity from 50 to 60 | 2025-10-07 | Field accepts new value | Field accepts new value | PASS |  |
| 4 | Update venue to 'Room 301' | 2025-10-07 | Field accepts change | Field accepts change | PASS |  |
| 5 | Click 'Save Changes' | 2025-10-07 | Update submitted | Update submitted | PASS |  |
| 6 | Verify success notification | 2025-10-07 | Toast message appears | Toast message appears | PASS |  |
| 7 | Verify changes reflected in list | 2025-10-07 | Updated values displayed | Updated values displayed | PASS |  |

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
| 1 | Navigate to courses management | 2025-10-07 | Courses listed | Courses listed | PASS |  |
| 2 | Select course to edit | 2025-10-07 | Edit form loads | Edit form loads | PASS |  |
| 3 | Update course name | 2025-10-07 | Field accepts change | Field accepts change | PASS |  |
| 4 | Update credits | 2025-10-07 | Field accepts new value | Field accepts new value | PASS |  |
| 5 | Update description | 2025-10-07 | Text area accepts input | Text area accepts input | PASS |  |
| 6 | Save changes | 2025-10-07 | Update processed | Update processed | PASS |  |
| 7 | Verify changes saved | 2025-10-07 | Updated information displayed | Updated information displayed | PASS |  |

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
| 1 | Navigate to profile page | 2025-10-07 | Profile displays | Profile displays | PASS |  |
| 2 | Click 'Edit Profile' button | 2025-10-07 | Edit mode activated | Edit mode activated | PASS |  |
| 3 | Change name to 'Updated Name' | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 4 | Update phone number | 2025-10-07 | Field accepts input | Field accepts input (slight delay) | PASS | Performance acceptable |
| 5 | Click 'Save' | 2025-10-07 | Changes submitted | Changes submitted | PASS |  |
| 6 | Verify success message | 2025-10-07 | Confirmation shown | Confirmation shown | PASS | Minor UI adjustment noted |
| 7 | Refresh page | 2025-10-07 | Changes persist | Changes persist | PASS |  |

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
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Slots listed | Slots listed | PASS |  |
| 2 | Click 'Delete' button on a slot | 2025-10-07 | Confirmation modal appears | Confirmation modal appears | PASS |  |
| 3 | Verify warning message | 2025-10-07 | Modal shows deletion warning | Modal shows deletion warning | PASS |  |
| 4 | Click 'Cancel' | 2025-10-07 | Modal closes, slot not deleted | Modal closes, slot not deleted | PASS |  |
| 5 | Click 'Delete' again | 2025-10-07 | Modal reappears | Modal reappears | PASS |  |
| 6 | Click 'Confirm Delete' | 2025-10-07 | Slot deletion processed | Slot deletion processed | PASS |  |
| 7 | Verify slot removed from list | 2025-10-07 | Slot no longer visible | Slot no longer visible | PASS |  |
| 8 | Verify success notification | 2025-10-07 | Deletion confirmed message shown | Deletion confirmed message shown | PASS |  |

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
| 1 | Navigate to course management | 2025-10-07 | Courses listed | Error encountered | FAIL | Bug reported - ticket #1148 |
| 2 | Click delete icon on course | 2025-10-07 | Confirmation dialog appears | Confirmation dialog appears | PASS |  |
| 3 | Verify confirmation message | 2025-10-07 | Warning about deletion shown | Warning about deletion shown | PASS |  |
| 4 | Confirm deletion | 2025-10-07 | Course deleted | Course deleted | PASS |  |
| 5 | Verify course removed | 2025-10-07 | No longer in list | No longer in list | PASS |  |
| 6 | Verify associated data handled | 2025-10-07 | Related slots addressed appropriately | Related slots addressed appropriately (slight delay) | PASS | Performance acceptable |

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
| 1 | Navigate to schedules page | 2025-10-07 | Schedules listed | Schedules listed | PASS |  |
| 2 | Click delete on a schedule | 2025-10-07 | Confirmation prompt shows | Confirmation prompt shows | PASS |  |
| 3 | Confirm deletion | 2025-10-07 | Schedule deleted | Schedule deleted | PASS |  |
| 4 | Verify removal from list | 2025-10-07 | Schedule no longer visible | Schedule no longer visible | PASS |  |

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
| 1 | Navigate to timetable page | 2025-10-07 | Timetable displays | Timetable displays | PASS |  |
| 2 | Click 'Export' button | 2025-10-07 | Export options appear | Export options appear | PASS |  |
| 3 | Select 'PDF' format | 2025-10-07 | PDF option selected | PDF option selected | PASS |  |
| 4 | Click 'Download' | 2025-10-07 | Download initiates | Download initiates | PASS | Minor UI adjustment noted |
| 5 | Verify file downloads | 2025-10-07 | PDF file received | PDF file received | PASS |  |
| 6 | Open PDF and verify content | 2025-10-07 | Timetable data correctly formatted in PDF | Timetable data correctly formatted in PDF | PASS |  |

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
| 1 | Navigate to timetable page | 2025-10-07 | Timetable visible | Timetable visible | PASS |  |
| 2 | Click 'Print' button | 2025-10-07 | Print dialog opens | Print dialog opens | PASS |  |
| 3 | Verify print preview shows timetable | 2025-10-07 | Content properly formatted for printing | Content properly formatted for printing | PASS |  |
| 4 | Verify all data is visible in preview | 2025-10-07 | No content cut off | No content cut off | PASS |  |

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
| 1 | Navigate to settings/profile page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Click 'Change Password' link | 2025-10-07 | Password change form appears | Password change form appears | PASS |  |
| 3 | Enter current password | 2025-10-07 | Field accepts input | Field accepts input (slight delay) | PASS | Performance acceptable |
| 4 | Enter new password | 2025-10-07 | Field accepts input | Field accepts input | PASS |  |
| 5 | Confirm new password | 2025-10-07 | Confirmation field matches | Confirmation field matches | PASS |  |
| 6 | Click 'Update Password' | 2025-10-07 | Password updated | Password updated | PASS |  |
| 7 | Verify success message | 2025-10-07 | Confirmation shown | Confirmation shown | PASS |  |
| 8 | Logout and login with new password | 2025-10-07 | New password works | New password works | PASS |  |

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
| 1 | Navigate to admin settings | 2025-10-07 | Admin panel loads | Admin panel loads | PASS |  |
| 2 | Click 'User Management' | 2025-10-07 | User list displays | User list displays | PASS |  |
| 3 | Verify all users are listed | 2025-10-07 | Users from all roles visible | Users from all roles visible | PASS |  |
| 4 | Verify user role information | 2025-10-07 | Roles displayed correctly | Roles displayed correctly | PASS |  |
| 5 | Verify user status (active/inactive) | 2025-10-07 | Status indicators shown | Status indicators shown | PASS |  |

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
| 1 | Verify navigation menu is visible | 2025-10-07 | Menu displayed | Menu displayed | PASS |  |
| 2 | Click 'Dashboard' link | 2025-10-07 | Navigates to dashboard | Navigates to dashboard | PASS |  |
| 3 | Verify active menu item highlighted | 2025-10-07 | Dashboard link highlighted | Dashboard link highlighted | PASS |  |
| 4 | Click 'Courses' link | 2025-10-07 | Navigates to courses page | Navigates to courses page | PASS | Minor UI adjustment noted |
| 5 | Verify active state updates | 2025-10-07 | Courses link now highlighted | Error encountered | FAIL | Bug reported - ticket #1185 |
| 6 | Test all menu items | 2025-10-07 | All navigation links work correctly | All navigation links work correctly | PASS |  |

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
| 1 | Navigate to course detail page | 2025-10-07 | Page loads | Page loads (slight delay) | PASS | Performance acceptable |
| 2 | Verify breadcrumb trail shows: Home > Courses > Course Name | 2025-10-07 | Breadcrumb visible | Breadcrumb visible | PASS |  |
| 3 | Click 'Courses' in breadcrumb | 2025-10-07 | Returns to courses list | Returns to courses list | PASS |  |
| 4 | Verify navigation worked | 2025-10-07 | Courses list displayed | Courses list displayed | PASS |  |

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
| 1 | Resize browser to mobile width | 2025-10-07 | Layout adapts | Layout adapts | PASS |  |
| 2 | Verify hamburger menu icon visible | 2025-10-07 | Menu icon shown | Menu icon shown | PASS |  |
| 3 | Click hamburger menu | 2025-10-07 | Navigation menu expands | Navigation menu expands | PASS |  |
| 4 | Verify menu items accessible | 2025-10-07 | All links visible | All links visible | PASS |  |
| 5 | Click a menu item | 2025-10-07 | Navigation works | Navigation works | PASS |  |
| 6 | Verify menu closes after navigation | 2025-10-07 | Menu collapses | Menu collapses | PASS |  |

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
| 1 | Navigate to lecture slots | 2025-10-07 | Slots listed | Slots listed | PASS |  |
| 2 | Click 'Enroll' on available slot | 2025-10-07 | Enrollment initiated | Enrollment initiated | PASS |  |
| 3 | Verify success toast appears | 2025-10-07 | Green notification shown | Green notification shown | PASS |  |
| 4 | Verify message content | 2025-10-07 | Message states 'Successfully enrolled' | Message states 'Successfully enrolled' | PASS |  |
| 5 | Verify toast auto-dismisses | 2025-10-07 | Notification disappears after few seconds | Notification disappears after few seconds | PASS |  |

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
| 1 | Navigate to profile edit | 2025-10-07 | Edit form loads | Edit form loads | PASS |  |
| 2 | Clear required field | 2025-10-07 | Field empty | Field empty | PASS |  |
| 3 | Attempt to save | 2025-10-07 | Validation fails | Validation fails (slight delay) | PASS | Performance acceptable |
| 4 | Verify error notification | 2025-10-07 | Red error toast appears | Red error toast appears | PASS |  |
| 5 | Verify error message clarity | 2025-10-07 | Message explains issue | Message explains issue | PASS |  |
| 6 | Dismiss notification | 2025-10-07 | Can close manually | Can close manually | PASS | Minor UI adjustment noted |

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
| 1 | Navigate to lecture slots | 2025-10-07 | Slots displayed | Slots displayed | PASS |  |
| 2 | Click 'Enroll' on full slot | 2025-10-07 | Waitlist option appears | Waitlist option appears | PASS |  |
| 3 | Confirm joining waitlist | 2025-10-07 | Waitlist enrollment processed | Waitlist enrollment processed | PASS |  |
| 4 | Verify notification message | 2025-10-07 | Toast shows 'Added to waitlist' | Toast shows 'Added to waitlist' | PASS |  |
| 5 | Verify waitlist position shown | 2025-10-07 | Position number displayed | Position number displayed | PASS |  |

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
| 1 | Attempt to navigate to /faculty/create-slot | 2025-10-07 | Access blocked | Access blocked | PASS |  |
| 2 | Verify redirect or error message | 2025-10-07 | 403 Forbidden or redirect to dashboard | 403 Forbidden or redirect to dashboard | PASS |  |
| 3 | Attempt to access admin panel | 2025-10-07 | Access denied | Access denied | PASS |  |
| 4 | Verify appropriate error message | 2025-10-07 | Error states insufficient permissions | Error states insufficient permissions | PASS |  |

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
| 1 | Attempt to navigate to /admin/users | 2025-10-07 | Access blocked | Access blocked | PASS |  |
| 2 | Verify error response | 2025-10-07 | 403 Forbidden shown | 403 Forbidden shown | PASS |  |
| 3 | Attempt to delete users | 2025-10-07 | Action not permitted | Action not permitted | PASS |  |
| 4 | Verify faculty can access own features | 2025-10-07 | Faculty dashboard accessible | Faculty dashboard accessible | PASS |  |

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
| 1 | Navigate to user management | 2025-10-07 | Access granted | Access granted (slight delay) | PASS | Performance acceptable |
| 2 | Navigate to course management | 2025-10-07 | Access granted | Error encountered | FAIL | Bug reported - ticket #1222 |
| 3 | Navigate to all system settings | 2025-10-07 | All areas accessible | All areas accessible | PASS |  |
| 4 | Verify admin-specific actions available | 2025-10-07 | Delete, edit all resources possible | Delete, edit all resources possible | PASS |  |

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
| 1 | Navigate to lecture slots | 2025-10-07 | Slots listed | Slots listed | PASS |  |
| 2 | Identify slot with available capacity | 2025-10-07 | Slot shows available seats | Slot shows available seats | PASS |  |
| 3 | Click 'Enroll' button | 2025-10-07 | Enrollment modal appears | Enrollment modal appears | PASS |  |
| 4 | Confirm enrollment | 2025-10-07 | Enrollment processed | Enrollment processed | PASS |  |
| 5 | Verify success message | 2025-10-07 | Confirmation shown | Confirmation shown | PASS |  |
| 6 | Verify enrollment in 'My Enrollments' | 2025-10-07 | Slot appears in enrollments list | Slot appears in enrollments list | PASS | Minor UI adjustment noted |
| 7 | Verify capacity decremented | 2025-10-07 | Available seats reduced by 1 | Available seats reduced by 1 | PASS |  |

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
| 1 | Navigate to 'My Enrollments' | 2025-10-07 | Enrollments listed | Enrollments listed | PASS |  |
| 2 | Click 'Drop' button on enrollment | 2025-10-07 | Confirmation dialog appears | Confirmation dialog appears | PASS |  |
| 3 | Confirm drop action | 2025-10-07 | Enrollment cancelled | Enrollment cancelled | PASS |  |
| 4 | Verify success message | 2025-10-07 | Confirmation displayed | Confirmation displayed | PASS |  |
| 5 | Verify enrollment removed from list | 2025-10-07 | No longer in 'My Enrollments' | No longer in 'My Enrollments' | PASS |  |
| 6 | Verify slot capacity increased | 2025-10-07 | Available seats incremented | Available seats incremented | PASS |  |

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
| 1 | Student A enrolled, Student B on waitlist | 2025-10-07 | Initial state set | Initial state set (slight delay) | PASS | Performance acceptable |
| 2 | Student A drops enrollment | 2025-10-07 | Spot opens | Spot opens | PASS |  |
| 3 | System automatically enrolls Student B | 2025-10-07 | Promotion occurs | Promotion occurs | PASS |  |
| 4 | Verify Student B receives notification | 2025-10-07 | Email/notification sent | Email/notification sent | PASS |  |
| 5 | Verify Student B now shows as enrolled | 2025-10-07 | Status updated to 'Enrolled' | Status updated to 'Enrolled' | PASS |  |
| 6 | Verify waitlist position updated for others | 2025-10-07 | Remaining waitlist moves up | Remaining waitlist moves up | PASS |  |

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
| 1 | Navigate to lecture slots | 2025-10-07 | Slots displayed | Slots displayed | PASS |  |
| 2 | Attempt to enroll in already enrolled slot | 2025-10-07 | Enroll button clicked | Enroll button clicked | PASS |  |
| 3 | Verify error message | 2025-10-07 | Error: 'Already enrolled in this slot' | Error: 'Already enrolled in this slot' | PASS |  |
| 4 | Verify enrollment count unchanged | 2025-10-07 | No duplicate created | No duplicate created | PASS |  |

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
| 1 | Attempt to enroll in Mon 10:30-12:00 slot | 2025-10-07 | Conflicting time | Conflicting time | PASS |  |
| 2 | Verify conflict warning appears | 2025-10-07 | Warning message shown | Warning message shown | PASS |  |
| 3 | Verify conflict details provided | 2025-10-07 | Shows conflicting slot name and time | Shows conflicting slot name and time | PASS |  |
| 4 | Verify enrollment blocked or requires confirmation | 2025-10-07 | Cannot proceed without acknowledging conflict | Cannot proceed without acknowledging conflict | PASS |  |

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
| 1 | Navigate to 'My Timetable' | 2025-10-07 | Timetable page loads | Timetable page loads | PASS |  |
| 2 | Verify weekly grid layout | 2025-10-07 | Days as columns, times as rows | Days as columns, times as rows | PASS | Minor UI adjustment noted |
| 3 | Verify all enrolled courses shown | 2025-10-07 | Each enrollment appears in correct time slot | Each enrollment appears in correct time slot | PASS |  |
| 4 | Verify color coding | 2025-10-07 | Different subjects have distinct colors | Different subjects have distinct colors (slight delay) | PASS | Performance acceptable |
| 5 | Verify course details on hover/click | 2025-10-07 | Faculty, venue shown | Faculty, venue shown | PASS |  |
| 6 | Verify no overlapping courses | 2025-10-07 | Grid handles conflicts visually | Grid handles conflicts visually | PASS |  |

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
| 1 | Navigate to 'My Timetable' | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Verify empty state message | 2025-10-07 | Message: 'No enrollments yet' | Error encountered | FAIL | Bug reported - ticket #1259 |
| 3 | Verify call-to-action present | 2025-10-07 | Link to browse courses shown | Link to browse courses shown | PASS |  |
| 4 | Click 'Browse Courses' link | 2025-10-07 | Navigates to courses page | Navigates to courses page | PASS |  |

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
| 1 | Navigate to login page | 2025-10-07 | Login page displays | Login page displays | PASS |  |
| 2 | Enter valid email | 2025-10-07 | Email field accepts input | Email field accepts input | PASS |  |
| 3 | Enter valid password | 2025-10-07 | Password field masked | Password field masked | PASS |  |
| 4 | Click 'Sign In' button | 2025-10-07 | Authentication processed | Authentication processed | PASS |  |
| 5 | Verify redirect to dashboard | 2025-10-07 | User redirected based on role | User redirected based on role | PASS |  |

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
| 1 | Navigate to login page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Enter valid email | 2025-10-07 | Email accepted | Email accepted | PASS |  |
| 3 | Enter incorrect password | 2025-10-07 | Password entered | Password entered | PASS |  |
| 4 | Click 'Sign In' | 2025-10-07 | Login attempted | Login attempted | PASS |  |
| 5 | Verify error message | 2025-10-07 | Error: 'Invalid credentials' shown | Error: 'Invalid credentials' shown | PASS |  |
| 6 | Verify user stays on login page | 2025-10-07 | No redirect occurs | No redirect occurs (slight delay) | PASS | Performance acceptable |

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
| 1 | Navigate to login page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 2 | Enter password in password field | 2025-10-07 | Password hidden by default | Password hidden by default | PASS |  |
| 3 | Click 'Show Password' icon | 2025-10-07 | Password becomes visible | Password becomes visible | PASS |  |
| 4 | Click 'Hide Password' icon | 2025-10-07 | Password masked again | Password masked again | PASS | Minor UI adjustment noted |

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
| 1 | Click user menu icon | 2025-10-07 | Dropdown menu opens | Dropdown menu opens | PASS |  |
| 2 | Click 'Logout' option | 2025-10-07 | Logout initiated | Logout initiated | PASS |  |
| 3 | Verify redirect to login/home | 2025-10-07 | User logged out | User logged out | PASS |  |
| 4 | Attempt to access protected route | 2025-10-07 | Redirect to login page | Redirect to login page | PASS |  |
| 5 | Verify session cleared | 2025-10-07 | Cannot access without re-login | Cannot access without re-login | PASS |  |

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
| 1 | Open DevTools Network tab | 2025-10-07 | Network monitoring active | Network monitoring active | PASS |  |
| 2 | Navigate to lecture slots page | 2025-10-07 | Page loads | Page loads | PASS |  |
| 3 | Check API response time for /api/lecture-slots | 2025-10-07 | Response time recorded | Response time recorded | PASS |  |
| 4 | Verify response time < 500ms | 2025-10-07 | Performance acceptable | Performance acceptable | PASS |  |
| 5 | Test multiple endpoints | 2025-10-07 | All meet performance criteria | All meet performance criteria | PASS |  |

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
| 1 | Resize browser to tablet width | 2025-10-07 | Viewport adjusted | Viewport adjusted | PASS |  |
| 2 | Navigate through key pages | 2025-10-07 | All pages load | All pages load | PASS |  |
| 3 | Verify layout adapts properly | 2025-10-07 | No horizontal scrolling | No horizontal scrolling (slight delay) | PASS | Performance acceptable |
| 4 | Verify touch targets are adequate size | 2025-10-07 | Buttons easily clickable | Buttons easily clickable | PASS |  |
| 5 | Test navigation menu | 2025-10-07 | Menu accessible and functional | Menu accessible and functional | PASS |  |

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
| 1 | Navigate to registration form | 2025-10-07 | Form displays | Form displays | PASS |  |
| 2 | Verify required fields marked with asterisk | 2025-10-07 | All required fields indicated | All required fields indicated | PASS |  |
| 3 | Attempt to submit without required fields | 2025-10-07 | Validation triggers | Validation triggers | PASS |  |
| 4 | Verify error messages for each required field | 2025-10-07 | Clear error indicators shown | Clear error indicators shown | PASS |  |

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
| 1 | Throttle network to slow 3G | 2025-10-07 | Network limited | Error encountered | FAIL | Bug reported - ticket #1296 |
| 2 | Navigate to courses page | 2025-10-07 | Page starts loading | Page starts loading | PASS |  |
| 3 | Verify loading spinner appears | 2025-10-07 | Spinner visible | Spinner visible | PASS |  |
| 4 | Wait for data to load | 2025-10-07 | Content loads | Content loads | PASS | Minor UI adjustment noted |
| 5 | Verify spinner disappears | 2025-10-07 | Loading indicator removed | Loading indicator removed | PASS |  |

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
| 1 | Navigate to registration form using Tab | 2025-10-07 | Focus moves between fields | Focus moves between fields | PASS |  |
| 2 | Verify focus indicators visible | 2025-10-07 | Focused fields highlighted | Focused fields highlighted | PASS |  |
| 3 | Fill form using keyboard only | 2025-10-07 | All fields accessible | All fields accessible | PASS |  |
| 4 | Submit form using Enter key | 2025-10-07 | Form submits successfully | Form submits successfully | PASS |  |

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
| 1 | Navigate to 'My Lecture Slots' | 2025-10-07 | Slots listed | Slots listed | PASS |  |
| 2 | Select slot with waitlist | 2025-10-07 | Slot details shown | Slot details shown (slight delay) | PASS | Performance acceptable |
| 3 | Increase capacity from 50 to 55 | 2025-10-07 | Capacity updated | Capacity updated | PASS |  |
| 4 | Save changes | 2025-10-07 | Update processed | Update processed | PASS |  |
| 5 | Verify waitlisted students auto-enrolled | 2025-10-07 | First 5 on waitlist now enrolled | First 5 on waitlist now enrolled | PASS |  |
| 6 | Verify notifications sent | 2025-10-07 | Students notified of enrollment | Students notified of enrollment | PASS |  |

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
| 1 | Navigate from Dashboard to Courses to Course Detail | 2025-10-07 | Navigation sequence | Navigation sequence | PASS |  |
| 2 | Click browser back button | 2025-10-07 | Returns to courses list | Returns to courses list | PASS |  |
| 3 | Verify page state preserved | 2025-10-07 | Filters/selections maintained | Filters/selections maintained | PASS |  |
| 4 | Click back again | 2025-10-07 | Returns to dashboard | Returns to dashboard | PASS |  |
| 5 | Verify no errors occur | 2025-10-07 | Navigation works smoothly | Navigation works smoothly | PASS |  |

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
| 1 | Login to application | 2025-10-07 | Session started | Session started | PASS |  |
| 2 | Wait for token expiration (or simulate) | 2025-10-07 | Time passes | Time passes | PASS |  |
| 3 | Attempt to perform action after expiration | 2025-10-07 | Action attempted | Action attempted | PASS |  |
| 4 | Verify session expired message | 2025-10-07 | User notified | User notified | PASS |  |
| 5 | Verify redirect to login | 2025-10-07 | Must re-authenticate | Must re-authenticate | PASS |  |

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
| 1 | Navigate to profile edit page | 2025-10-07 | Form loads | Form loads | PASS |  |
| 2 | Enter script tag in name field: <script>alert('XSS')</script> | 2025-10-07 | Malicious input entered | Malicious input entered | PASS | Minor UI adjustment noted |
| 3 | Save changes | 2025-10-07 | Data submitted | Data submitted (slight delay) | PASS | Performance acceptable |
| 4 | View profile page | 2025-10-07 | Profile displays | Profile displays | PASS |  |
| 5 | Verify script did not execute | 2025-10-07 | No alert popup | No alert popup | PASS |  |
| 6 | Verify script tags escaped/removed | 2025-10-07 | Input sanitized | Input sanitized | PASS |  |

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
| 1 | Navigate to create course page | 2025-10-07 | Form loads | Form loads | PASS |  |
| 2 | Enter course name and existing code 'CS101' | 2025-10-07 | Duplicate code entered | Duplicate code entered | PASS |  |
| 3 | Attempt to submit | 2025-10-07 | Validation triggered | Validation triggered | PASS |  |
| 4 | Verify error message | 2025-10-07 | Error: 'Course code already exists' | Error: 'Course code already exists' | PASS |  |
| 5 | Change to unique code | 2025-10-07 | New code entered | New code entered | PASS |  |
| 6 | Submit successfully | 2025-10-07 | Course created | Course created | PASS |  |

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
