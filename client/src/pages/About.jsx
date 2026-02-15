import React from 'react';
import { Bot, CheckCircle, Users, Activity } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    AI Driven <span className="text-primary">Doctor Appointment Booking System</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                    We are revolutionizing healthcare access by combining advanced Artificial Intelligence with trusted medical expertise.
                </p>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Our goal is to bridge the gap between patients and healthcare providers using intelligent technology.
                            Traditional appointment booking can be tedious and confusing. DocBook AI simplifies this by acting as your
                            personal health assistant, understanding your needs, and connecting you with the right specialist instantly.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-700"><strong>AI-Powered Matching:</strong> Our algorithm analyzes symptoms to suggest the most relevant specialists.</p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-700"><strong>Seamless Booking:</strong> Real-time availability and instant confirmation seamlessly integrated.</p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <p className="text-gray-700"><strong>24/7 Availability:</strong> Health concerns don't follow office hours, and neither do we.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for an image - using a gradient/solid color for now if image not available */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                            <Bot className="h-48 w-48 text-primary/20" />
                        </div>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                            <div className="flex items-center space-x-4">
                                <Activity className="h-10 w-10 text-primary" />
                                <div>
                                    <p className="font-bold text-gray-900">Intelligent Healthcare</p>
                                    <p className="text-sm text-gray-600">Connecting you to care, smarter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Features Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">How Our AI Works</h2>
                        <p className="mt-4 text-gray-600">Behind the scenes of your smart health assistant.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Bot className="h-12 w-12 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Symptom Analysis</h3>
                            <p className="text-gray-600">
                                Describe your symptoms naturally. Our Natural Language Processing (NLP) engine understands context and identifies potential medical needs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Users className="h-12 w-12 text-purple-500 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">provider Matching</h3>
                            <p className="text-gray-600">
                                Based on the analysis, we scan our database of verified doctors to match you with specialists who have the right expertise and proximity.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <Activity className="h-12 w-12 text-pink-500 mb-6" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
                            <p className="text-gray-600">
                                The system optimizes appointment slots to reduce wait times and ensures you get seen as quickly as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
