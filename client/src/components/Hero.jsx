import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">World's #1 Health Platform</span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
                        AI Driven <span className="text-primary">Doctor Appointment</span> Booking System
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Book appointments instantly with top-rated specialists. Use our AI assistant to find the right care for you.
                    </p>

                    <div className="mt-10 bg-white p-4 rounded-2xl shadow-lg max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
                        <div className="flex items-center flex-1 border-b md:border-b-0 md:border-r border-gray-200 px-2">
                            <MapPin className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location (e.g. New York)"
                                className="w-full p-2 outline-none text-gray-700"
                            />
                        </div>
                        <div className="flex items-center flex-1 px-2">
                            <Search className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Doctor, condition, or specialty"
                                className="w-full p-2 outline-none text-gray-700"
                            />
                        </div>
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-md">
                            Search
                        </button>
                    </div>

                    <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
                        <span>✨ Instant Booking</span>
                        <span>🛡️ Verified Doctors</span>
                        <span>🤖 AI Health Assistant</span>
                    </div>
                </div>
            </div>

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
};

export default Hero;
