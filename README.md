# URL Shortener Using JSON File As Storage

A simple URL shortener built with Node.js and Express.js that stores shortened URLs in a JSON file. This project allows users to create short URLs and redirect to the original URLs.

## Features

- Shorten long URLs and access them using a shorter link.
- Store and manage URL mappings in a JSON file.
- Enhanced Error handling.

## Technologies Used
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- Node.js
- Express.js
- shortid (For creating short id for url)
- NPM (For downloading dependencies)
- Html/CSS/Javascript (For 404 webpage page)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sunjay-dev/URL-Shortener-using-json-file/
   cd URL-Shortener-using-json-file
   npm install
   npm start

## Project Structure
- controllers/: Contains the logic for handling requests and responses.
- public/: Holds static files like 404 page.
- data.json: The JSON file used to store short URLs and their corresponding original URLs.
- routes/: Contains information about routes

## Routes

The application provides the following routes:

### GET `/shortid`
- **Description**: Handles requests to the shortened URL and redirects to the original URL.
- **Parameters**:
  - `shortId`: The short ID of the URL to redirect.
- **Response**:
  - On success, redirects to the original URL.
  - If the short ID does not exist, returns a 404 error.
  
### POST `/`
- **Description**: Creates a new shortened URL.
- **Request Body**:
  - `url`: The original URL to be shortened.
- **Response**:
  - Returns a JSON object containing the shortened URL.

### POST `/custom`
- **Description**: Creates a new shortened URL with a custom alias.
- **Request Body**:
  - `url`: The original URL to be shortened.
  - `custom`: The custom alias for the shortened URL.
- **Response**:
  - Returns a JSON object containing the shortened URL with the custom alias.
  - If the custom alias is already in use, returns an 409 error message.

### GET `/api/details?url=shortId`
- **Description**: Provides details about shortened url.
- **Parameters**:
  - `shortId`: The short ID of the URL to retrieve.
- **Response**:
  - On success, returns a JSON object containing number of click, original url, and array of lastOpened times.
  - If the short ID does not exist, returns a 404 error.




## Contributing
Feel free to submit issues or pull requests if you have suggestions for improvements.
