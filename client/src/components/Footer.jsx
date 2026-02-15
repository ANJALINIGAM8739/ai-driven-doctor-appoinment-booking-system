import React from 'react';
import { LucideStethoscope, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <LucideStethoscope className="h-8 w-8 text-primary" />
                            <span className="ml-2 text-xl font-bold">DocBook AI</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Revolutionizing healthcare access with AI-driven doctor matching and seamless appointment booking.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/" className="hover:text-primary">Home</a></li>
                            <li><a href="/doctors" className="hover:text-primary">Find Doctors</a></li>
                            <li><a href="/about" className="hover:text-primary">About Us</a></li>
                            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">For Patients</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/login" className="hover:text-primary">Login</a></li>
                            <li><a href="/register" className="hover:text-primary">Register</a></li>
                            <li><a href="#" className="hover:text-primary">Ask AI Assistant</a></li>
                            <li><a href="#" className="hover:text-primary">Health Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} DocBook AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
