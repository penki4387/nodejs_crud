# Node.js User Management API

A RESTful API built with Node.js, Express.js, and MongoDB for user management with CRUD operations and login functionality.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/penki4387/nodejs_crud)

## Features
- User Registration and Login
- CRUD Operations for User Management
- MongoDB Database Integration
- RESTful API Design
- Error Handling
- Input Validation

## Project Structure
```
├── app.js              # Main application file
├── model/
│   └── usermodel.js    # User schema definition
├── service/
│   └── userservice.js  # Business logic layer
├── controllers/
│   └── usercontroller.js # Request handlers
└── routes/
    └── userroute.js    # API routes
```

## Prerequisites
- Node.js (v12 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/penki4387/nodejs_crud.git
cd nodejs_crud
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB:
Make sure MongoDB is running on your system. By default, it runs on `mongodb://localhost:27017`

4. Start the server:
```bash
node app.js
```
The server will start on `http://localhost:3000`

## API Documentation

### 1. Create User (Register)
```http
POST /api/users
Content-Type: application/json

Request Body:
{
    "full_name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}

Response (201 Created):
{
    "_id": "user_id",
    "full_name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "createdAt": "2024-03-21T10:00:00.000Z",
    "updatedAt": "2024-03-21T10:00:00.000Z"
}
```

### 2. Login User
```http
POST /api/users/login
Content-Type: application/json

Request Body:
{
    "email": "john@example.com",
    "password": "password123"
}

Response (200 OK):
{
    "message": "Login successful",
    "user": {
        "id": "user_id",
        "full_name": "John Doe",
        "email": "john@example.com"
    }
}
```

### 3. Get All Users
```http
GET /api/users

Response (200 OK):
[
    {
        "_id": "user_id",
        "full_name": "John Doe",
        "email": "john@example.com",
        "password": "password123",
        "createdAt": "2024-03-21T10:00:00.000Z",
        "updatedAt": "2024-03-21T10:00:00.000Z"
    }
]
```

### 4. Get User by ID
```http
GET /api/users/:id

Response (200 OK):
{
    "_id": "user_id",
    "full_name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "createdAt": "2024-03-21T10:00:00.000Z",
    "updatedAt": "2024-03-21T10:00:00.000Z"
}
```

### 5. Update User
```http
PUT /api/users/:id
Content-Type: application/json

Request Body:
{
    "full_name": "John Updated",
    "email": "john.updated@example.com",
    "password": "newpassword123"
}

Response (200 OK):
{
    "_id": "user_id",
    "full_name": "John Updated",
    "email": "john.updated@example.com",
    "password": "newpassword123",
    "createdAt": "2024-03-21T10:00:00.000Z",
    "updatedAt": "2024-03-21T10:30:00.000Z"
}
```

### 6. Delete User
```http
DELETE /api/users/:id

Response (200 OK):
{
    "message": "User deleted successfully"
}
```

## Testing the APIs

### Using PowerShell
```powershell
# Create User
Invoke-RestMethod -Uri "http://localhost:3000/api/users" -Method Post -Body (@{
    full_name = "Test User"
    email = "test@example.com"
    password = "test123"
} | ConvertTo-Json) -ContentType "application/json"

# Login
Invoke-RestMethod -Uri "http://localhost:3000/api/users/login" -Method Post -Body (@{
    email = "test@example.com"
    password = "test123"
} | ConvertTo-Json) -ContentType "application/json"

# Get All Users
Invoke-RestMethod -Uri "http://localhost:3000/api/users" -Method Get

# Get User by ID
Invoke-RestMethod -Uri "http://localhost:3000/api/users/<user_id>" -Method Get

# Update User
Invoke-RestMethod -Uri "http://localhost:3000/api/users/<user_id>" -Method Put -Body (@{
    full_name = "Updated User"
    email = "updated@example.com"
    password = "newpass"
} | ConvertTo-Json) -ContentType "application/json"

# Delete User
Invoke-RestMethod -Uri "http://localhost:3000/api/users/<user_id>" -Method Delete
```

### Using cURL (Git Bash or WSL)
```bash
# Create User
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"full_name":"Test User","email":"test@example.com","password":"test123"}'

# Login
curl -X POST http://localhost:3000/api/users/login \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com","password":"test123"}'

# Get All Users
curl -X GET http://localhost:3000/api/users

# Get User by ID
curl -X GET http://localhost:3000/api/users/<user_id>

# Update User
curl -X PUT http://localhost:3000/api/users/<user_id> \
-H "Content-Type: application/json" \
-d '{"full_name":"Updated User","email":"updated@example.com","password":"newpass"}'

# Delete User
curl -X DELETE http://localhost:3000/api/users/<user_id>
```

## Error Responses

### 400 Bad Request
```json
{
    "message": "Email and password are required"
}
```

### 401 Unauthorized
```json
{
    "message": "Invalid password"
}
```

### 404 Not Found
```json
{
    "message": "User not found"
}
```

### 500 Internal Server Error
```json
{
    "message": "Something went wrong!"
}
```

## Dependencies
- express: Web framework
- mongoose: MongoDB object modeling
- dotenv: Environment variable management

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the ISC License.

## Contact
GitHub: [@penki4387](https://github.com/penki4387) 