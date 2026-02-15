const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'cancelled'], default: 'pending' },
    symptoms: { type: String },
    aiAnalysis: { type: String } // To store AI suggestions/notes
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
