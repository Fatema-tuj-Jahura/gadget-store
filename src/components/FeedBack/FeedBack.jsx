import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeedBack = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        isNewVisitor: '',
        primaryReason: '',
        foundWhatNeeded: '',
        userFriendliness: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRatingChange = (rating) => {
        setFormData((prevData) => ({ ...prevData, userFriendliness: rating }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        // Close the modal and reload the page to reset the form
        setShowModal(false);
        window.location.reload();
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
                <h1 className="text-4xl font-bold text-purple-600 mb-4">About Us</h1>
                <p className="text-lg text-gray-700 max-w-2xl text-center">
                    Welcome to our website! We are dedicated to bringing you the best in tech gadgets, 
                    from the latest releases to top-rated products. Our team works hard to curate a selection of 
                    gadgets that combine innovation, quality, and affordability, ensuring there is something 
                    for every enthusiast.
                </p>
                
                <div className="mt-8 max-w-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        We aim to make technology accessible and exciting by offering top-notch products 
                        and reliable customer service. Whether you are a tech expert or a casual user, we 
                        have the right tools to enhance your digital experience.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="p-6 max-w-md mx-auto bg-white border-2 border-purple-600 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Gadget Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold">Enter Your Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Your Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Is this your first visit to the website? *</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="isNewVisitor"
                                    value="Yes"
                                    onChange={handleChange}
                                    required
                                /> Yes
                            </label>
                            <label className="ml-4">
                                <input
                                    type="radio"
                                    name="isNewVisitor"
                                    value="No"
                                    onChange={handleChange}
                                    required
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">What is the main reason you came to the site?</label>
                        <textarea
                            name="primaryReason"
                            value={formData.primaryReason}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Did you find what you needed? *</label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="foundWhatNeeded"
                                    value="Yes, all of it"
                                    onChange={handleChange}
                                /> Yes, all of it
                            </label>
                            <label className="ml-4">
                                <input
                                    type="checkbox"
                                    name="foundWhatNeeded"
                                    value="Yes, some of it"
                                    onChange={handleChange}
                                /> Yes, some of it
                            </label>
                            <label className="ml-4">
                                <input
                                    type="checkbox"
                                    name="foundWhatNeeded"
                                    value="No, none of it"
                                    onChange={handleChange}
                                />No, none of it
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">User Friendliness *</label>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                type="button"
                                key={rating}
                                onClick={() => handleRatingChange(rating)}
                                className={`text-xl px-2 ${formData.userFriendliness >= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                            ><FaStar/>
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded">Submit Feedback</button>
                        <button
                            type="button"
                            onClick={handleGoHome}
                            className="border border-purple-600 text-purple-600 py-2 px-4 rounded"
                        >
                            Go Back to Home
                        </button>
                    </div>
                </form>

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center">
                            <h3 className="text-xl font-bold mb-4">Thank you for your feedback!</h3>
                            <p>We appreciate your thoughts. This helps us improve our gadget offerings and website experience.</p>
                            <button
                                onClick={handleCloseModal}
                                className="mt-4 bg-purple-600 text-white py-2 px-4 rounded"
                            >Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedBack;
