import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const navbarBgColor = isHomePage ? "bg-purple-500 text-white" : "bg-white text-purple-500";

    return (
        <nav className={`${navbarBgColor} rounded-t-xl px-6 py-3 flex items-center justify-between mt-4 transition-colors duration-300`}>
            <div className="text-lg font-semibold">
                Gadget Heaven
            </div>

            {/* Links */}
            <div className="flex space-x-6">
                <NavLink to="/" className="hover:underline">Home</NavLink>
                <NavLink to="/statistics" className="hover:underline">Statistics</NavLink>
                <NavLink to="/dashboard" className="hover:underline">Dashboard</NavLink>
                <NavLink to="/feedback" className="hover:underline">FeedBack</NavLink>
            </div>

            {/* Icons */}
            <div className="flex space-x-4">
                <button className={`p-2 rounded-full ${isHomePage ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'}`}>
                    <FaShoppingCart />
                </button>
                <button className={`p-2 rounded-full ${isHomePage ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'}`}>
                    <FaHeart />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
