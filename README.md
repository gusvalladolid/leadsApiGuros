# Backend Challenge: Lead Management API
This project is a backend application designed to manage leads for a car insurance quotation system. It provides a RESTful API built using Node.js and TypeScript. The API includes endpoints for creating, updating, and listing leads.

## Features
- RESTful API for lead management
- Built with Node.js and TypeScript
- PostgreSQL as the database and Sequelize as ORM
- Docker for containerization

# Setup Instructions
- Node.js (v16 or higeher)
- Docker
- Git
## Steps to Run Locally

1. Clone the repository:
```
git clone https://gitlab.com/personalprojects4494152/leadapiguros.git
cd <repository-folder>
```
2. Install dependencies:
```
npm install
```
3. Set up environment variables:
Create a .env file in the root directory with the following variables:
```
POSTGRES_DB=your_database_name
POSTGRES_USER=your_database_user
POSTGRES_PASSWORD=your_database_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```
4. Start the Docker container:
```
docker-compose up
```
5. Access the API at http://localhost:3000/api/v1/leads

# Endpoints
### 1. Add a lead
POST /api/v1/leads
- Request body:
```
{
  "phone": "1234567890",
  "email": "example@mail.com",
  "fullName": "John Doe",
  "status": "registered",
  "postalCode": "12345",
  "birthDate": "1990-01-01",
  "gender": "male",
  "vehicle": {
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2020
  }
}
```
- Response: 201 Created
### 2. Find Lead by PhoneNumber/Email
GET /api/v1/leads/params?email=example@gmail

GET /api/v1/leads/params?phoneNumber=123456789

- Query Parameters: phoneNumber or email
- Response: 
```
{
    message: 'Successfully retrieved lead',
    status: 'Ok!',
    data: {Lead Information}
}
```

### 3. Update Lead status
PUT /api/v1/leads/
- Request body:
```
{
    "phone": "1234567890",
    "status": "quotation_unfinished"
}
```
- Response: 200 OK

### 4. List Leads by status
GET /api/v1/leads/status/:status
- Path Parameter: status
- Response: 
```
{
    "message": "Lead status updated successfully",
    "status": "Updated!"
}
```

## Technologies Used
- Node.JS and TypeScript.
- Express.
- PostgreSQL.
- Docker.
- Sequelize.

### Author
Developed by Gustavo Valladolid
