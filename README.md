#BLUE#

This Project is a Real-time video chat application. The application allows users to create video chat rooms and communicate with other users in real time. In general, it has a structure that includes features such as Video chat, camera sharing, screen sharing, live chat, etc., similar to Discord or Messenger applications.

The Project is developed using the following.

Node.js Express.js MongoDB Redis Agora API Socket.io HTML CSS JavaScript Features

Home page with information and visuals.

Navigation bar with logo and login/sign up buttons.

Login and registration pages with forms to register and log in.

Authorization is done in the backend with Redis to store and refresh the token, cache and JWT token system.

All data stored in MongoDB.

Lobby page where users can create a room to video chat with others.

Main landing page with list of participants, video stream and chat session.

Agora API is used for video and message sections.

Exit button on room creation and video streaming landing page to redirect to home page.

Participant list displays names of all users in the room including current user.

Chatbot sends a welcome message with user’s name when entering the room.

Users can join the broadcast by granting microphone and camera permission in browser.

User’s video is displayed in square boxes in the middle of the landing page.

Four options (toggle functions) are provided for camera on/off, mute/unmute, screen sharing and leaving the broadcast.

Chatbot sends message when user joins or leaves the room.

When a user sends a message in the chat, username with message is displayed in the chat section.

Website is designed to be fully responsive and optimized for various screen sizes.

Homepage: Homepage is designed to be fully responsive and optimized for various screen sizes. Images, text and navigation bar dynamically adjust to fit screen size; navigation bar turns into a hamburger menu on smaller screens. The layout is clean and easy to read, with images scaled to fit different screen resolutions.

Login/Register pages: The login and signup pages are also designed to be fully responsive and optimized for different screen sizes. The forms and images dynamically adjust to fit the screen size, with form fields and buttons scaling to fit different screen resolutions. The pages are easy to navigate and user-friendly, with clear instructions and error messages to guide the user.

Lobby page: The lobby page is designed to be fully responsive and optimized for different screen sizes. The form to create a new room and the list of available rooms dynamically adjust to fit the screen size, with form fields and buttons scaled to fit different screen resolutions. The page is clean and easy to navigate, with clear instructions and error messages.

Main landing page: The main landing page is also designed to be fully responsive and optimized for different screen sizes. The video feed and chat session dynamically adjust to fit the screen size, with the layout and formatting scaling to fit different screen resolutions. The participant list on the left side of the page is also responsive, with names and avatars scaled to fit different screen sizes. The page is easy to navigate and user-friendly, with clear instructions and error messages to guide the user.

#Project Setup#

To start this project, follow these steps:

Clone the repository: git clone https://github.com/ErtugrulTKN/Web-Programming-Project Install dependencies: npm install Set environment variables: MONGODB_URI - MongoDB connection URI REDIS_URL - Redis connection URL JWT_SECRET - JWT secret key JWT_EXPIRY - JWT token expiration time (e.g. "1 day") AGORA_APP_ID - Agora.io application ID Run the application: npm start Usage

To create a new account, click on the "Register" button on the homepage and fill in the registration form with your name, email address and password.

Click on the "Submit" button to create your account.

Click on the "Sign in" button on the homepage to log in to your account.

Enter your email address and password, then click the "Sign in" button.

Once you log in, you will be taken to the lobby page where you can create a room or join an existing room.

To create a room, enter a room name and click the "Create Room" button. You will be taken to the room's landing page.

When you enter the room, you will see your name listed in the participant list on the left side of the page, and a welcome message from the chatbot in the chat section on the right side of the page.

Click the "Join Broadcast" button to join the video stream. You will be asked to allow the browser to access your microphone and camera.

Once you grant permission, your video will appear in a square box in the middle of the landing page along with the videos of other participants.

At the bottom of the page, there are four options with toggle functions: turn camera on/off, mute/unmute, screen share, and leave broadcast. You can use these options to control your video and audio during the chat.

The chatbot will notify you with a message in the chat section if a participant joins or leaves the room. If a participant sends a message in the chat section, their username and message will be displayed.

