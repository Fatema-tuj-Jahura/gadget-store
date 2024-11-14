// src/components/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-violet-300">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
            <Link to="/" className="border-2 border-violet-900 bg-purple-600 text-white py-2 px-4 rounded">Go Back to Home</Link>
        </div>
    );
};

export default NotFound;
