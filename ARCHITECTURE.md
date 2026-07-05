# TMeet Architecture Documentation

## Overview
TMeet is a React-based web application built with Vite and Tailwind CSS. It focuses on a role-based dashboard experience for school management, currently featuring a client-side authentication system using `localStorage`.

## Application Structure
- **/src/pages/auth/**: Authentication-related pages (`Login.jsx`, `Signin.jsx`, `MakePassword.jsx`, `EmailVerification.jsx`).
- **/src/pages/main/**: Core application pages (Home, Meetings).
- **/src/layouts/**: Page wrappers (`RootLayout.jsx`, `Dashboard.jsx`).
- **/src/components/**: Reusable UI components (`Header.jsx`).
- **/src/App.jsx**: Global routing configuration.

## Authentication System
The application uses a client-side authentication pattern:
1.  **Registration Flow**: 
    - `Signin.jsx` stores partial registration data in `localStorage` under `tempRegData`.
    - `MakePassword.jsx` consumes this data, collects the password, saves a complete user object to a `users` array in `localStorage`, sets the `currentUser` session, and redirects to the dashboard.
2.  **Login Flow**: 
    - `Login.jsx` verifies provided credentials against the `users` array in `localStorage`.
    - Upon success, the user object is set as the active `currentUser` session.
3.  **Route Protection**:
    - `Dashboard.jsx` acts as a route wrapper that reads `currentUser` from `localStorage`.
    - If no user is authenticated, it redirects to `/auth`.
4.  **Role-Based Logic**:
    - Users have an `isPrincipal` boolean flag.
    - **Home.jsx**: Reads this flag to conditionally render a Principal-only announcement posting UI. All announcements are rendered in a card-based layout.
    - **Meetings.jsx**: Displays meetings in card-based layouts, featuring tags for teacher departments.

## Maintenance
This document is updated whenever the architecture or core authentication logic is modified.
