import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LucideStethoscope, Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        `text-gray-600 hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : ''}`;

    const mobileNavLinkClass = ({ isActive }) =>
        `block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 ${isActive ? 'text-primary bg-blue-50' : ''}`;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <LucideStethoscope className="h-8 w-8 text-primary" />
                        <span className="ml-2 text-xl font-bold text-gray-800">DocBook AI</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/doctors" className={navLinkClass}>Find Doctors</NavLink>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>

                        <div className="flex space-x-4">
                            <button onClick={() => navigate('/login')} className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors">Login</button>
                            <button onClick={() => navigate('/register')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm">Sign Up</button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-primary focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" onClick={toggleMenu} className={mobileNavLinkClass}>Home</NavLink>
                        <NavLink to="/doctors" onClick={toggleMenu} className={mobileNavLinkClass}>Find Doctors</NavLink>
                        <NavLink to="/about" onClick={toggleMenu} className={mobileNavLinkClass}>About</NavLink>
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            <button onClick={() => { navigate('/login'); toggleMenu(); }} className="w-full text-center px-4 py-2 text-primary border border-primary rounded-lg">Login</button>
                            <button onClick={() => { navigate('/register'); toggleMenu(); }} className="w-full text-center px-4 py-2 bg-primary text-white rounded-lg">Sign Up</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
