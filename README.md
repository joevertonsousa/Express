# Lead Management API

A simple Express.js API for managing leads, offering functionalities like creating and fetching leads by email.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)


## Introduction

This project is a basic Express.js-based RESTful API designed for managing lead data. Whether you're capturing sales leads or any other kind of information, this project provides a foundational structure to create and retrieve leads.

## Features

- **Create a New Lead:** Add a new lead to the database.
- **Retrieve a Lead by Email:** Fetch a specific lead's details using their email address.

## Prerequisites

- Node.js
- npm (typically bundled with Node.js)
- A code editor (e.g., Visual Studio Code)
- A REST client (like Postman or Insomnia) for testing API endpoints.

## Installation

```bash
# Clone the repository
git clone https://github.com/joevertonsousa/Express.git
# Navigate to the directory
cd Express

# Install dependencies
npm install
```

## Usage Guide

1. Start the server:

```bash
   npm start
```

Your server should now be running on `http://localhost:3000`.

2. Use your REST client to send requests to the provided endpoints.
   oints

- **Create a New Lead**
  - **URL:** `http://localhost:3000/leads/criar`
  - **Method:** POST
  - **Body:**
    ```json
    {
      "name": "Sample Name",
      "email": "sample@email.com",
      "phone": "1234567890",
      "age": 25,
      "address": "123 Street, City"
    }
    ```

- **Get a Lead by Email**
  - **URL:** `http://localhost:3000/leads/consultar`
  - **Method:** GET
  - **Body:**
    ```json
    {
      "email": "sample@email.com"
    }
    ```

## Future Improvements

- Integration with robust databases like MongoDB or PostgreSQL.
- Expand functionalities to include updating and deleting leads.
- Integrate authentication and authorization mechanisms.
- Enhance error handling and data validation.

## Contributing

Contributions are always welcome! Please fork the repository and make changes as you'd like.
