// firebaseConfig.js
// IMPORTANTE: Este archivo contiene datos de configuración y la clave de cifrado.

const firebaseConfig = {
  apiKey: "AIzaSyAZzGCXeUtj4pM3IMYB5RR0XKj3wh6lctI",
  authDomain: "plankhn.firebaseapp.com",
  projectId: "plankhn",
  storageBucket: "plankhn.firebasestorage.app",
  messagingSenderId: "500734544493",
  appId: "1:500734544493:web:855c2e097a45ac33afcd64"
};

// Clave para cifrado AES-256 (Mantenla segura)
const ENCRYPTION_KEY = "PLANK_HN_SECURE_ENCRYPTION_KEY_2024";

// API Key de Google Gemini (Free Tier)
const GEMINI_API_KEY = "AIzaSyC4GJXc1UtmhhtacM7aIjEQrS96UKQnC1U";

window.FIREBASE_CONFIG = firebaseConfig;
window.ENCRYPTION_KEY = ENCRYPTION_KEY;
window.GEMINI_API_KEY = GEMINI_API_KEY;
