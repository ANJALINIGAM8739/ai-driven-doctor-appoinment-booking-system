const Doctor = require('../models/Doctor');
const User = require('../models/User');

exports.createDoctorProfile = async (req, res) => {
    const { specialization, experience, feesPerConsultation, availability } = req.body;

    try {
        const doctor = new Doctor({
            userId: req.user._id,
            specialization,
            experience,
            feesPerConsultation,
            availability,
        });

        const createdDoctor = await doctor.save();
        res.status(201).json(createdDoctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().populate('userId', 'name email');
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('userId', 'name email');
        if (doctor) {
            res.json(doctor);
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
