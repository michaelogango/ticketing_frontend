Event/Ticket Management Platform

Overview

This platform is an event/ticket management system designed to help administrators manage their entire event while making it easier for users to track and access necessary event details. It allows admins to add, edit, and delete events, venues, and users, while attendees can browse events and manage their tickets seamlessly.

Live Link

Event Management Platform

Backend Repository

GitHub - Ticketing Backend

Technologies Used

Frontend: JavaScript, Tailwind CSS

Backend: Python (Flask)

Hosting: Netlify (Frontend), Backend hosted separately Render

Features

Home Page

This is the landing page of the platform.

It provides an overview of the platform and its capabilities.

Users can navigate to other sections from here.

Event List Page

Displays all the events uploaded to the platform.

Users can browse through different events.

Provides filters or search options to quickly find events.

My Tickets Page

Shows a list of events that the user has signed up for.

Allows users to view event details and ticket information.

Users can track their upcoming and past events.

Manage Events Page

Accessible only by admins.

Allows administrators to add, edit, and delete events.

Provides functionality to manage venues and users.

Ensures smooth organization and control over the event management process.

Installation & Setup

To run the platform locally, follow these steps:

Frontend

Clone the repository:

git clone <frontend-repo-url>

Navigate to the project directory:

cd frontend-folder

Install dependencies:

npm install

Start the development server:

npm run dev

Backend

Clone the backend repository:

git clone https://github.com/michaelogango/Ticketing

Navigate to the backend folder:

cd backend-folder

Set up a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

Install dependencies:

pip install -r requirements.txt

Run the Flask server:

python app.py

API Endpoints

The backend provides several API endpoints to manage events and user data. Below are some key endpoints:

Endpoint

Method

Description

/events

GET

Fetch all events

/events/<event_id>

GET

Fetch details of a specific event

/events

POST

Create a new event (Admin only)

/events/<event_id>

PUT

Update an event (Admin only)

/events/<event_id>

DELETE

Delete an event (Admin only)

/tickets

GET

Fetch tickets for the logged-in user

/users

GET

Fetch all users (Admin only)

/venues

GET

Fetch all venues