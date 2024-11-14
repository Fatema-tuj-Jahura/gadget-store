import React from 'react';

import { NavLink, useLocation, useLoaderData, useParams  } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import {  toast } from 'react-toastify';
import { addCart } from '../../utility/addToDB';
import { wishCart } from '../../utility/addAgainDB';


const NavBar = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const GadgetId = parseInt(id);
    const gadget= data.find(gadget => gadget.product_id === GadgetId);

    const addToCart = (id) => {
        toast(`Great choice! ${gadget.product_title} has been added to your cart. Happy shopping!`);
        addCart(id);
    };

    const addToWishlist = (id) => {
        toast(`Wishlist updated! You can find ${gadget.product_title} in your wishlist`);
        wishCart(id);
    };


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
                <button onClick={() => addToCart(GadgetId)}
                className={`p-2 rounded-full ${isHomePage ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'}`}>
                    <FaShoppingCart />
                </button>
                <button onClick={() => addToWishlist(GadgetId)}
                className={`p-2 rounded-full ${isHomePage ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'}`}>
                    <FaHeart />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
