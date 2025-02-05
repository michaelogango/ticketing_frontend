# Event/Ticket Management Platform

## Overview

This platform is an event/ticket management system designed to help administrators manage their entire event while making it easier for users to track and access necessary event details. It allows admins to add, edit, and delete events, venues, and users, while attendees can browse events and manage their tickets seamlessly.

## Live Link

[Event Management Platform](#)

## Backend Repository and Hosting

[GitHub - Ticketing Backend](https://github.com/michaelogango/Ticketing)
[Backend - Hosting](https://ticket-db-dtex.onrender.com/)

## Frontend Repository and Hosting

[GitHub - Ticketing Frontend](https://github.com/michaelogango/ticketing_frontend)
[Frontend - Hosting](https://marvelous-moonbeam-57b80e.netlify.app/)

## Technologies Used

- **Frontend:** JavaScript, Tailwind CSS  
- **Backend:** Python (Flask)  
- **Hosting:** Netlify (Frontend), Render (Backend)  

## Features

### Home Page
- This is the landing page of the platform.
- It provides an overview of the platform and its capabilities.
- Users can navigate to other sections from here.

### Event List Page
- Displays all the events uploaded to the platform.
- Users can browse through different events.
- Provides filters or search options to quickly find events.

### My Tickets Page
- Shows a list of events that the user has signed up for.
- Allows users to view event details and ticket information.
- Users can track their upcoming and past events.

### Manage Events Page (Admin Only)
- Allows administrators to add, edit, and delete events.
- Provides functionality to manage venues and users.
- Ensures smooth organization and control over the event management process.

## Installation & Setup

### Frontend

1. Clone the repository:
   ```sh
   git clone <frontend-repo-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd frontend-folder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### Backend

1. Clone the backend repository:
   ```sh
   git clone https://github.com/michaelogango/Ticketing
   ```
2. Navigate to the backend folder:
   ```sh
   cd backend-folder
   ```
3. Set up a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  
   ```
4. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Run the Flask server:
   ```sh
   python app.py
   ```

## API Endpoints

| Endpoint             | Method | Description                          |
|----------------------|--------|--------------------------------------|
| `/events`            | GET    | Fetch all events                     |
| `/events/<event_id>` | GET    | Fetch details of a specific event    |
| `/events`            | POST   | Create a new event (Admin only)      |
| `/events/<event_id>` | PUT    | Update an event (Admin only)         |
| `/events/<event_id>` | DELETE | Delete an event (Admin only)         |
| `/tickets`           | GET    | Fetch tickets for the logged-in user |
| `/users`             | GET    | Fetch all users (Admin only)         |
| `/users/<user_id>`   | GET    | Fetch user by ID                     |
| `/venues`            | GET    | Fetch all venues                        |

---


