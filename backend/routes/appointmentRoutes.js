const express = require('express');
const router = express.Router();
const { createAppointment, getMyAppointments } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createAppointment);
router.route('/my').get(protect, getMyAppointments);

module.exports = router;
