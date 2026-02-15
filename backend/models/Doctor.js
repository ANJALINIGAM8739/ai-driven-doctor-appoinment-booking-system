const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    feesPerConsultation: { type: Number, required: true },
    availability: [{
        day: { type: String },
        startTime: { type: String },
        endTime: { type: String }
    }],
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number },
        comment: { type: String }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
