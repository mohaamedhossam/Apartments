# Apartment Listing App

## Overview
This is a simple apartment listing application that allows users to view and manage apartments. The application consists of a backend API built with Node.js, TypeScript, and Express, and a frontend built with Next.js.

## Technologies Used
- **Backend**: Node.js, TypeScript, Express
- **Database**: PostgreSQL
- **Frontend**: Next.js
- **Containerization**: Docker, Docker Compose

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
2. Build and run the application:
   ```bash
   docker copmose up --build
 # Apartment Listing App

## Accessing the Application
- **Backend API**: [http://localhost:3000](http://localhost:3000)
- **Frontend Application**: [http://localhost:3001/apartments](http://localhost:3001/apartments)

## API Endpoints

### Save an Apartment
- **Endpoint**: `POST /apartments`
- **URL**: `http://localhost:3000/apartments`
- **Body**: {
  "name": "Ocean View Apartment",
  "unitNumber": "A101",
  "project": "Seaside Towers",
  "description": "A beautiful luxury apartment with a stunning ocean view.",
  "location": "Miami Beach",
  "price": 450000,
  "available": true
}


### List All Apartments
- **Endpoint**: `GET /apartments`
- **URL**: `http://localhost:3000/apartments`
- **Response**: An array of apartment objects.

### Search Apartments
- **Endpoint**: `GET /apartments?search=SearchTerm`
- **URL**: `http://localhost:3000/apartments?search=SearchTerm`
- **Description**: List all apartments that match the search term.

### Get Apartment by ID
- **Endpoint**: `GET /apartments/:id`
- **URL**: `http://localhost:3000/apartments/:id`
- **Description**: Fetch details of a specific apartment by ID.

### Filter Apartments
- **Endpoint**: `GET /apartments/filter`
- **URL**: `http://localhost:3000/apartments/filter?name=test&minPrice=90000&maxPrice=210000`
- **Description**: List apartments with specific attributes (name, price range).

### Delete Specific Apartment
- **Endpoint**: `DELETE /apartments/:id`
- **URL**: `http://localhost:3000/apartments/:id`
- **Description**: Delete a specific apartment by ID.

## Frontend Pages

### Apartment Listing Page
- Displays a list of all apartments with search and filter functionality.

### Apartment Details Page
- Shows detailed information for a selected apartment.

## Bonus Features
- Search and filter functionality to easily find apartments by name, number, or project.

   
