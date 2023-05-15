# Club Details Backend API

This project provides a backend API for managing club details. Users can add, fetch, and delete club details using the provided API endpoints.

## API Endpoints

The following API endpoints are available:

- POST `/api/clubs`: Adds a new club to the database
- GET `/api/clubs`: Fetches a list of all clubs in the database
- GET `/api/clubs/:id`: Fetches the details of a specific club by ID
- DELETE `/api/clubs/:id`: Deletes the club with the specified ID from the database

With POST request to `/api/clubs` send data in following format with APi request body:

`
{
  "clubname":"name of club",
  "type":"type of club",
  "address":"address of club",
  "fee":5000
}
`

## Getting Started

To use the API in a local server, follow these steps:

1. Clone the project repository: `git clone https://github.com/kisnatwari/bca-club-api.git`
2. Change to the project directory: `cd ./bca-club-api`
3. Install the project dependencies: `npm install`
4. Configure the database and details in the `.env` file
5. Start the server: `npm start`

Once the server is running, you can send requests to the API endpoints using a tool such as Postman or a custom frontend application.

Server will probably run in port 5000  inside localhost.

## Error Handling

The API endpoints include error handling to ensure that requests are handled properly. If a request is missing required parameters or if there is an error with the database, the API will return an appropriate error response.

`{
    "message":"error message"
}`

## Technologies Used

This project was built using the following technologies:

- Node.js
- Express.js
- Sequelize ORM

## Author

This project was developed by Krishna Tiwari.
