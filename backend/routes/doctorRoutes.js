const express = require('express');
const router = express.Router();
const { createDoctorProfile, getDoctors, getDoctorById } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, createDoctorProfile)
    .get(getDoctors);

router.route('/:id').get(getDoctorById);

module.exports = router;
