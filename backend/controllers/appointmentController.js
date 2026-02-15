const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { doctorId, appointmentDate, appointmentTime, symptoms } = req.body;

    try {
        const appointment = new Appointment({
            patient: req.user._id,
            doctor: doctorId,
            appointmentDate,
            appointmentTime,
            symptoms,
            status: 'pending'
        });

        const createdAppointment = await appointment.save();
        res.status(201).json(createdAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient: req.user._id }).populate('doctor').populate('patient'); // Populate details
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
