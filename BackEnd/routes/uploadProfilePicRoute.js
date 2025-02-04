console.log("uploadProfilePicRoute.js is loaded...")
const express = require('express');
const router = express.Router();
const uploadProfilePicController = require('../controllers/uploadProfilePicController');
const multer = require('multer');

// Multer setup (saves files in 'uploads' folder)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Store images in "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    }
});
const upload = multer({ storage });

// Define the route (POST request for profile picture upload)
router.post('/uploadProfilePic', upload.single('profilePic'), uploadProfilePicController);

module.exports = router;
