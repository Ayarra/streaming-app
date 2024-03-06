# Streaming App

## Overview

This project aims to build a web application, allowing users to search and watch videos streamed through BitTorrent technology. It will incorporate user features like registration, profiles, and comments.

## Key functionalities

- User Management:
  - User registration and login with various authentication options (including Omniauth).
  - User profiles with basic information and picture.
- Search:
  - Users can search for videos across multiple external sources.
  - Search results display thumbnails with relevant information (title, year, rating).
- Video Playback:
  - Videos play directly within the web app using streamed BitTorrent data.
  - Users can view video details (description, cast, year) and leave comments.

## Technology Stack

- **Frontend**: React.js and Axios.js
- **Backend**: Node.js and Express.js
- **Database**: MongoDB
- **User authentication**: Passport.js (with Omniauth)
- **BitTorrent handling**:
- **Backend testing** : Jest, Supertest and Mongodb-memory-server

## Running the app

First, clone the app `gcl git@github.com:Ayarra/streaming-app.git`

### The backend

```
    cd streaming-app
    cd server
    npm i
    npm run dev
```

### The frontend

```
    cd streaming-app
    cd client
    npm i
    npm run dev
```
