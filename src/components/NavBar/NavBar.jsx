import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="bg-purple-500 rounded-t-xl px-6 py-3 flex items-center justify-between text-white mt-4">
        
        <div className="text-lg font-semibold">
            Gadget Heaven
        </div>

        {/* Links */}
        <div className="flex space-x-6">
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <NavLink to="/statistics" className="hover:underline">Statistics</NavLink>
            <NavLink to="/dashboard" className="hover:underline">Dashboard</NavLink>
        </div>

        {/* Icons */}
        <div className="flex space-x-4">
            <button className="bg-white text-purple-500 p-2 rounded-full">
                <FaShoppingCart />
            </button>
            <button className="bg-white text-purple-500 p-2 rounded-full">
                <FaHeart />
            </button>
        </div>
    </nav>
    );
};

export default NavBar;
