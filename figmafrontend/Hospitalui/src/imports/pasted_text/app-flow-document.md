This is exactly the document you should create **before UI design, database design, or coding**.

For your HMS, I would not start with screens. I would start with **User Journey → Modules → Screens → Actions → States**.

The BRD contains 15 modules and 10 user roles. 

# APP FLOW DOCUMENT

# 1. APPLICATION ENTRY FLOW

## Screen: Login

### Components

```text
Hospital Logo
Email / Username
Password
Remember Me
Forgot Password
Login Button
```

### Actions

| Action            | Result                  |
| ----------------- | ----------------------- |
| Enter credentials | Validate fields         |
| Click Login       | Authenticate            |
| Forgot Password   | Navigate Reset Password |

### Success State

```text
Redirect user to role dashboard
```

### Error State

```text
Invalid Credentials
Account Disabled
Tenant Expired
```

### Empty State

```text
Email Required
Password Required
```

---

# 2. GLOBAL NAVIGATION

After login:

```text
Sidebar
│
├ Dashboard
├ Patients
├ Appointments
├ Doctors
├ Staff
├ OP
├ IP
├ Prescriptions
├ Pharmacy
├ Laboratory
├ Vehicles
├ Finance
├ Followups
├ Reports
├ Settings
└ Logout
```

Visibility controlled by RBAC.

---

# 3. DASHBOARD FLOW

## Screen: Dashboard

### Widgets

```text
Patients Today

Appointments Today

OP Count

IP Count

Revenue Today

Expenses Today

Profit

Doctor Availability
```

### Actions

```text
Click Patients Today
→ Patients List

Click Revenue
→ Finance Dashboard

Click Doctor
→ Doctor Detail
```

### Empty State

```text
No activity available
```

---

# MODULE 1

# PATIENT MANAGEMENT

## Screen: Patient List

### Components

```text
Search
Filter
Add Patient
Export
Table
```

### Table Actions

```text
View
Edit
Delete
History
Book Appointment
```

---

## Button: Add Patient

### Opens

```text
Patient Registration Form
```

Fields:

```text
Name
Mobile
Gender
DOB
Age
Address
Blood Group
Emergency Contact
```

### Validation

```text
Name Required

Mobile Unique

DOB Valid
```

### Success

```text
Patient Created
Generate Patient ID
Redirect Profile
```

### Error

```text
Duplicate Mobile
Server Error
```

---

## Screen: Patient Profile

Tabs:

```text
Overview

Visits

Medical History

Prescriptions

Lab Reports

Billing
```

### Actions

```text
Book Appointment

Create OP Visit

View Lab Report

Print Summary
```

---

# MODULE 2

# APPOINTMENT MANAGEMENT

## Screen: Appointment List

Filters:

```text
Date

Doctor

Status

Branch
```

Actions:

```text
View

Check In

Cancel

Reschedule
```

---

## Book Appointment

### Step 1

Select Patient

### Step 2

Select Doctor

### Step 3

Select Date

### Step 4

Select Time Slot

### Step 5

Confirm

---

Success

```text
Appointment Created

Token Generated
```

---

Error

```text
Slot Unavailable
Doctor Leave
```

---

# MODULE 3

# DOCTOR MANAGEMENT

## Doctor List

Actions

```text
Add Doctor

View

Edit

Deactivate
```

---

## Doctor Profile

Tabs

```text
Overview

Schedule

Patients

Revenue

Attendance
```

---

## Schedule Management

Actions

```text
Add Availability

Edit Timing

Mark Leave
```

---

Success

```text
Schedule Updated
```

---

# MODULE 4

# STAFF MANAGEMENT

## Staff List

Actions

```text
Add Employee

View

Edit

Assign Task
```

---

## Staff Profile

Tabs

```text
Attendance

Tasks

Performance

Documents
```

---

# MODULE 5

# OP MANAGEMENT

## OP Queue Screen

Displays

```text
Current Token

Waiting Count

Doctor

Status
```

---

Actions

```text
Call Next

Start Consultation

Complete Consultation
```

---

Success

```text
Patient Moved To Consultation
```

---

# Consultation Screen

Sections

```text
Vitals

Diagnosis

Prescription

Lab Request

Follow Up
```

Buttons

```text
Save Draft

Complete Visit

Print Prescription
```

---

# MODULE 6

# IP MANAGEMENT

## Admission Screen

Actions

```text
Search Patient

Assign Ward

Assign Room

Assign Bed

Assign Doctor
```

---

Success

```text
Admission Number Generated
```

---

## Inpatient Detail

Tabs

```text
Vitals

Procedures

Treatments

Lab Investigations

Diet Plans

Discharge
```

---

## Daily Monitoring

Actions

```text
Add Morning Check

Add Afternoon Check

Add Night Check
```

---

# MODULE 7

# PRESCRIPTION MANAGEMENT

## Create Prescription

Flow

```text
Select Medicine

Set Dosage

Set Frequency

Set Duration
```

---

Buttons

```text
Save

Print

Send To Pharmacy
```

---

Success

```text
Prescription Linked To Patient
```

---

# MODULE 8

# PHARMACY

## Inventory Screen

Filters

```text
Category

Expiry

Stock Level
```

---

Actions

```text
Add Medicine

Edit

Purchase

Issue Stock
```

---

## Medicine Detail

Displays

```text
Batch

Expiry

Manufacturer

Stock
```

---

Alerts

```text
Low Stock

Near Expiry
```

---

## Sales Flow

```text
Receive Prescription

Verify Stock

Generate Bill

Dispense Medicine
```

---

# MODULE 9

# LAB MANAGEMENT

## Lab Orders

Actions

```text
Collect Sample

Start Processing

Upload Report

Complete
```

---

## Upload Report

Actions

```text
Upload PDF

Preview

Save
```

---

Success

```text
Report Available
Notification Sent
```

---

# MODULE 10

# VEHICLE MANAGEMENT

## Vehicle List

Actions

```text
Add Vehicle

Edit

Expense Entry

Maintenance Log
```

---

## Alerts

```text
Insurance Expiry

Permit Expiry

Service Due
```

---

# MODULE 11

# FINANCE

## Finance Dashboard

Widgets

```text
Income

Expense

Profit

Cash Flow
```

---

Actions

```text
View Report

Export Excel

Export PDF
```

---

## Expense Entry

Fields

```text
Category

Amount

Date

Remarks
```

---

Success

```text
Expense Added
```

---

# MODULE 12

# FOLLOW-UP

## Follow-up Dashboard

Sections

```text
Due Today

Missed

Completed

Rescheduled
```

---

Actions

```text
Call Patient

Send WhatsApp

Mark Completed

Reschedule
```

---

# MODULE 13

# ROLE MANAGEMENT

## Roles Screen

Actions

```text
Create Role

Edit Permissions

Assign Users
```

---

Permissions Matrix

```text
Patient Create

Patient Edit

Patient Delete

Finance View

Finance Edit

Lab Upload

etc.
```

---

# MODULE 14

# REPORTING

Reports

```text
Patient Reports

Doctor Reports

Revenue Reports

Expense Reports

Inventory Reports

Lab Reports

Follow-up Reports
```

---

Actions

```text
Filter

Export PDF

Export Excel
```

---

# MODULE 15

# SETTINGS

## Branch Management

Actions

```text
Add Branch

Edit Branch

Deactivate Branch
```

---

## Department Management

Actions

```text
Add Department

Edit Department
```

---

## User Management

Actions

```text
Create User

Reset Password

Disable User
```

---

# UNIVERSAL UI STATES (APPLY TO EVERY SCREEN)

## Loading State

```text
Skeleton Loader
```

---

## Empty State

```text
No Data Found

Create New Record
```

CTA:

```text
+ Add New
```

---

## Error State

```text
Something Went Wrong

Retry Button
```

---

## Success State

```text
Toast Notification

Action Completed Successfully
```

---

# COMPLETE PRIMARY USER FLOWS

### Receptionist

```text
Login
→ Register Patient
→ Book Appointment
→ Check-In Patient
→ Generate Token
→ OP Queue
```

### Doctor

```text
Login
→ View Queue
→ Open Patient
→ Consultation
→ Prescription
→ Lab Request
→ Complete Visit
```

### Lab Technician

```text
Login
→ View Orders
→ Collect Sample
→ Upload Report
→ Complete
```

### Pharmacist

```text
Login
→ Receive Prescription
→ Dispense Medicine
→ Generate Bill
```

### Accountant

```text
Login
→ Revenue
→ Expenses
→ Reports
```

### Hospital Admin

```text
Login
→ Dashboard
→ Doctors
→ Staff
→ Finance
→ Reports
```