import React from 'react';
import Hero from '../components/Hero';
import { Star, ShieldCheck, Clock } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
                        <p className="mt-4 text-gray-600">We make healthcare simple, accessible, and intelligent.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-blue-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Verified Specialists</h3>
                            <p className="text-gray-600 text-sm">Every doctor on our platform is vetted and verified for your safety.</p>
                        </div>

                        <div className="p-6 bg-pink-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                                <Clock className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
                            <p className="text-gray-600 text-sm">Book appointments 24/7 without waiting on hold.</p>
                        </div>

                        <div className="p-6 bg-purple-50 rounded-xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                                <Star className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
                            <p className="text-gray-600 text-sm">Get personalized doctor suggestions based on your symptoms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Doctors Section (Placeholder) */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Top Rated Doctors</h2>
                        <button className="text-primary font-medium hover:underline">View All</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Mock Cards */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                                <div className="h-48 bg-gray-200 w-full animate-pulse"></div>
                                <div className="p-4">
                                    <div className="h-4 bg-gray-200 w-3/4 mb-2 rounded animate-pulse"></div>
                                    <div className="h-3 bg-gray-200 w-1/2 mb-4 rounded animate-pulse"></div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="h-3 bg-gray-200 w-1/4 rounded animate-pulse"></div>
                                        <div className="h-8 bg-gray-200 w-20 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
