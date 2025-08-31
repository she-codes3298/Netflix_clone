# Netflix Clone

A Netflix-inspired streaming platform clone built with React.js and Firebase authentication.

## 🎬 Features

- **User Authentication**: Secure login/signup with Firebase Auth
- **Responsive Design**: Mobile-first design that works on all devices
- **Movie/TV Show Browsing**: Browse content by categories
- **Search Functionality**: Find your favorite movies and shows
- **User Profiles**: Personalized user experience
- **Watchlist**: Save content to watch later
- **Video Streaming**: Stream content seamlessly

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Styling**: CSS3 / Styled Components
- **Build Tool**: Create React App
- **Deployment**: Firebase Hosting (optional)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Git

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd netflix-clone
```

### Step 2: Install Dependencies

**Important**: Since node_modules is stored separately due to size constraints, you have two options:

**Option A: Download from Drive Link**
1. Download the node_modules folder from the provided drive link
2. Extract and place it in the root directory of the project
3. Skip to Step 3

**Option B: Install Fresh Dependencies**
```bash
npm install
# or
yarn install
```

### Step 3: Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)

2. Enable Authentication and Firestore Database

3. Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Replace the placeholder values with your actual Firebase configuration values

### Step 4: Run the Application

```bash
npm start
# or
yarn start
```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
netflix-clone/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Titlecards/
│   │   ├── Footer/
│   │   
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Player/
│   ├── firebase/
│   │   └── config.js
│   ├── utils/
│   ├── App.jsx
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

## 🔥 Firebase Setup Details

### Authentication Setup
1. Go to Firebase Console → Authentication → Sign-in method
2. Enable Email/Password authentication
3. Optionally enable Google sign-in for social authentication

### Firestore Database Setup
1. Go to Firebase Console → Firestore Database
2. Create database in test mode (or production mode with proper security rules)
3. Set up collections for users, movies, watchlists, etc.

### Security Rules Example
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🌐 Environment Variables

Create a `.env` file with the following variables:

| Variable | Description |
|----------|-------------|
| `REACT_APP_FIREBASE_API_KEY` | Firebase API Key |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `REACT_APP_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `REACT_APP_FIREBASE_APP_ID` | Firebase App ID |

## 📱 Features Implementation

### Authentication Flow
- User registration with email/password
- User login with email/password
- Password reset functionality
- Protected routes for authenticated users
- Automatic logout on token expiration

### Content Management
- Dynamic content loading
- Category-based browsing
- Search and filter functionality
- Responsive image loading
- Video player integration

## 🚀 Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init hosting
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify
3. Set environment variables in Netlify dashboard

## 🐛 Troubleshooting

### Common Issues

**Firebase Configuration Error**
- Ensure all environment variables are correctly set
- Check that Firebase project is properly configured
- Verify API keys are valid and not restricted

**Dependencies Issues**
- If using node_modules from drive: ensure it matches your operating system
- If installing fresh: clear npm cache with `npm cache clean --force`
- Delete node_modules and package-lock.json, then reinstall

**Build Errors**
- Check for any missing environment variables
- Ensure all imports are correctly referenced
- Run `npm run build` to identify specific build issues


## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed description

---

**Note**: This project is for educational purposes only and is not affiliated with Netflix Inc.
