# Quote API

## Overview

The Quote API is a simple RESTful API that allows users to create, read, and delete quotes. This project includes both the backend API and a frontend interface for interacting with the API.

## Features

- **Create a Quote**: Add a new quote to the database.
- **Read Quotes**: Retrieve all quotes or a specific quote by ID.
- **Delete a Quote**: Remove a quote from the database.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/quote-api.git
   cd quote-api
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node server
   ```

4. Open your browser and navigate to `http://localhost:4001`.

## API Endpoints

### Create a Quote

- **URL**: `/api/quotes`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "quote": "Your quote here",
    "person": "Author name"
  }
  ```

### Read All Quotes

- **URL**: `/api/quotes`
- **Method**: `GET`

### Read a Specific Quote

- **URL**: `/api/quotes/:id`
- **Method**: `GET`

### Update a Quote

- **URL**: `/api/quotes/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "quote": "Updated quote",
    "person": "Updated author name"
  }
  ```

### Delete a Quote

- **URL**: `/api/quotes/:id/delete`
- **Method**: `DELETE`

## Frontend

The frontend interface allows users to interact with the API. It includes forms for creating, updating, and deleting quotes, as well as a list of all quotes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
