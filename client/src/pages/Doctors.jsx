import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, X, Check } from 'lucide-react';

const Doctors = () => {
    const [doctors] = useState([
        { id: 1, name: "Dr. Sarah Wilson", specialty: "Cardiologist", location: "New York, NY", rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 2, name: "Dr. Michael Chen", specialty: "Dermatologist", location: "San Francisco, CA", rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 3, name: "Dr. Emily Parker", specialty: "Pediatrician", location: "Chicago, IL", rating: 4.7, reviews: 215, image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 4, name: "Dr. James Johnson", specialty: "Neurologist", location: "Houston, TX", rating: 4.9, reviews: 156, image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [bookingStep, setBookingStep] = useState(0); // 0: closed, 1: form, 2: success

    const filteredDoctors = doctors.filter(doc =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBookClick = (doctor) => {
        setSelectedDoctor(doctor);
        setBookingStep(1);
    };

    const handleCloseModal = () => {
        setSelectedDoctor(null);
        setBookingStep(0);
    };

    const confirmBooking = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setBookingStep(2);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Find the Best Doctors</h1>
                    <p className="mt-2 text-gray-600">Book appointments with top specialists in your area.</p>
                </div>

                {/* Search Filter */}
                <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex items-center gap-4 border border-gray-100">
                    <Search className="text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search by name or specialty..."
                        className="flex-1 outline-none text-gray-700"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="ml-1 text-sm font-semibold text-gray-700">{doctor.rating}</span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                                <p className="text-primary font-medium text-sm mb-2">{doctor.specialty}</p>

                                <div className="flex items-center text-gray-500 text-sm mb-4">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {doctor.location}
                                </div>

                                <button
                                    onClick={() => handleBookClick(doctor)}
                                    className="w-full bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-medium py-2 rounded-lg transition-colors flex items-center justify-center border border-gray-200 hover:border-transparent"
                                >
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {bookingStep > 0 && selectedDoctor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
                        {bookingStep === 1 ? (
                            <form onSubmit={confirmBooking}>
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-gray-900">Book Appointment</h3>
                                    <button type="button" onClick={handleCloseModal} className="text-gray-400 hover:text-gray-500">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-16 h-16 rounded-full object-cover" />
                                        <div>
                                            <p className="font-bold text-gray-900">{selectedDoctor.name}</p>
                                            <p className="text-primary text-sm">{selectedDoctor.specialty}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input type="date" required className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary/50" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                                        <select required className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary/50">
                                            <option value="">Choose a slot...</option>
                                            <option value="09:00">09:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="14:00">02:00 PM</option>
                                            <option value="15:00">03:00 PM</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Symptoms (Optional)</label>
                                        <textarea className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary/50" rows="3" placeholder="Briefly describe your symptoms..."></textarea>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3">
                                    <button type="button" onClick={handleCloseModal} className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>
                                    <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md">Confirm Booking</button>
                                </div>
                            </form>
                        ) : (
                            <div className="p-10 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                                <p className="text-gray-600 mb-6">Your appointment with {selectedDoctor.name} has been scheduled successfully.</p>
                                <button onClick={handleCloseModal} className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-md">
                                    Done
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Doctors;
