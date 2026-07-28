// firebase-config.js
// Shared Firebase initialization — loaded by every page before page-specific scripts.
// Firebase SDK (compat v9) is loaded via <script> tags in each HTML file first.

const firebaseConfig = {
  apiKey: "AIzaSyDLeI4mWALEOHztpByDjBJCibFCSDH5_yY",
  authDomain: "cpla-platform.firebaseapp.com",
  projectId: "cpla-platform",
  storageBucket: "cpla-platform.firebasestorage.app",
  messagingSenderId: "871487394358",
  appId: "1:871487394358:web:e9639fba9da7e06afb3e97"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Shared service references used throughout the app
const auth = firebase.auth();
const db   = firebase.firestore();
const storage = (typeof firebase !== 'undefined' && typeof firebase.storage === 'function') ? firebase.storage() : null;

// Guest reviewer credentials — create this account once in Firebase Console
// (Authentication → Add user) then run seed-guest.html to populate progress data.
const GUEST_EMAIL    = "reviewer@cpla.studio";
const GUEST_PASSWORD = "CPLAReview2024!";

// Current lesson identifier — update this as the cohort advances
const CURRENT_LESSON = "v2-m3-l9";
