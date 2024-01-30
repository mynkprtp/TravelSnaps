# TravelSnaps

Welcome to TravelSnaps – your go-to repository for capturing and sharing your travel adventures through captivating snapshots! This project is designed to provide a platform where travel enthusiasts can showcase their favorite moments, discover new destinations, and connect with fellow globetrotters.

## Features

- **Photo Uploads:** Share your travel experiences by uploading stunning snapshots.
- **Destination Discovery:** Explore a curated collection of photos from various destinations around the world.
- **User Profiles:** Create and customize your user profile to showcase your travel history.
- **Likes and Comments:** Engage with the community through likes and comments on shared photos.
- **Search Functionality:** Find specific destinations or users easily with our search feature.

## Technologies Used

- **Frontend:**
  - **React.js:** A powerful JavaScript library for building user interfaces.
  - **CSS3:** Styling language for a visually appealing user experience.

- **Backend:**
  - **Node.js:** JavaScript runtime for server-side development.
  - **Express.js:** Web application framework for Node.js.
  - **MongoDB:** NoSQL database for storing photo and user data.
  - **Mongoose:** MongoDB object modeling for Node.js.

- **Image Storage:**
  - **Cloudinary:** Cloud-based solution for efficient image storage and retrieval.
## API Endpoints

### Photos

- `GET /api/photos`: Retrieve all photos.
- `GET /api/photos/:photoId`: Retrieve a specific photo by ID.
- `POST /api/photos`: Upload a new photo.
- `PUT /api/photos/:photoId`: Update a specific photo by ID.
- `DELETE /api/photos/:photoId`: Delete a specific photo by ID.

### Users

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:userId`: Retrieve a specific user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a specific user by ID.
- `DELETE /api/users/:userId`: Delete a specific user by ID.

### Comments

- `GET /api/comments/:photoId`: Retrieve all comments for a specific photo.
- `POST /api/comments/:photoId`: Add a new comment to a specific photo.
- `PUT /api/comments/:commentId`: Update a specific comment by ID.
- `DELETE /api/comments/:commentId`: Delete a specific comment by ID.

### Likes

- `GET /api/likes/:photoId`: Retrieve all likes for a specific photo.
- `POST /api/likes/:photoId`: Add a new like to a specific photo.
- `DELETE /api/likes/:likeId`: Remove a like from a specific photo.
  
## Getting Started

To get started with TravelSnaps, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mynkprtp/TravelSnaps.git
2. Install Dependencies
   ```bash
   cd TravelSnaps
   npm install
3. Set up your constants in .env.local file under backend:
- Configure the Mongodb database connection
- Configure the JWT key and secret
4. Start the backend server:
    ```bash
    cd .\backend
    npm start
5. Start the backend server:
    ```bash
    cd .\frontend
    npm start
6. Visit http://localhost:3000 in your web browser.

## Contributing
- If you would like to contribute to the project, please follow our contribution guidelines.

## License
- This project is licensed under the MIT License.

## Acknowledgments
- Special thanks to contributors who have helped make this project possible.
- Feel free to reach out if you have any questions or suggestions!
