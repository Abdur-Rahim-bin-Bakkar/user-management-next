# User Management App

A simple full-stack user management application built with Next.js, Express.js, and HeroUI.

This project allows users to:

* view all users
* add a new user using a form
* redirect to the users page after successful submission

---

## Tech Stack

### Frontend

* Next.js
* React
* HeroUI

### Backend

* Node.js
* Express.js
* CORS

---

## Features

* Fetch user data from backend API
* Submit new user data using a form
* Display user list in a responsive grid
* Redirect after successful form submission
* Simple REST API integration

---

## Project Structure

```bash id="9pr6kc"
project-root/
│
├── client/
│   ├── app/
│   │   ├── users/
│   │   │   └── page.jsx
│   │   └── new/
│   │       └── page.jsx
│   │
│   └── components/
│
├── server/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash id="n6jzlh"
git clone https://github.com/your-username/your-repository-name.git
```

---

### Go to the project folder

```bash id="s6d4qa"
cd your-repository-name
```

---

## Backend Setup

Go to the server folder:

```bash id="lr6y8z"
cd server
```

Install dependencies:

```bash id="ln8s4c"
npm install
```

Start the backend server:

```bash id="8zjlwm"
node index.js
```

The server will run at:

```bash id="xy1n6t"
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal and go to the client folder:

```bash id="e3qg2u"
cd client
```

Install dependencies:

```bash id="w9x4bd"
npm install
```

Run the frontend:

```bash id="w5pn2f"
npm run dev
```

Frontend will run at:

```bash id="4hcm7e"
http://localhost:3000
```

---

## API Endpoints

### GET `/user`

Returns all users.

Example response:

```json id="2bjlwm"
[
  {
    "id": 1,
    "name": "Rahim",
    "email": "rahim@example.com"
  }
]
```

---

### POST `/user`

Creates a new user.

Request body:

```json id="g9a4uq"
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Response:

```json id="o3qjlwm"
{
  "success": true,
  "message": "post method is working",
  "data": {
    "id": 5,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## Pages

### `/users`

Displays all users from the API.

### `/new`

Provides a form to create a new user.

---

## Notes

* User data is currently stored in memory.
* Restarting the backend server resets the data.
* This project is suitable for learning API requests, form handling, and basic full-stack integration.

---

## Author

Md Rahim Sikdar
