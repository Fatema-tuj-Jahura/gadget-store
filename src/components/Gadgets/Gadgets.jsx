import React, { useEffect, useState } from 'react';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data);
                setCategories(["All Products", ...new Set(data.map(item => item.category))]);
            });
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === "All Products") {
            setFilteredGadgets(gadgets);
        } else {
            setFilteredGadgets(gadgets.filter(item => item.category === category));
        }
    };

    return (
        <div className="mt-20 flex">
            {/* Sidebar */}
            <aside className="w-1/4 p-4 mt-20 bg-white shadow-md rounded-lg h-auto">
                {/* <h3 className="text-lg font-semibold mb-4">Categories</h3> */}
                <ul className="space-y-2 ">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button
                                onClick={() => filterByCategory(category)}
                                className={`px-4 py-2 rounded-full w-full text-left ${selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Gadgets Section */}
            <main className="mt-20 w-3/4 p-4">
                <h2 className="text-2xl font-bold mb-4">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-3 gap-4">
                    {filteredGadgets.map((gadget) => (
                        <div key={gadget.product_id} className="p-4 border rounded-lg shadow-md">
                            <img
                                src={gadget.product_image}
                                alt={gadget.product_title}
                                className="h-48 w-full object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold">{gadget.product_title}</h3>
                            <p className="text-gray-600">Price: ${gadget.price}</p>
                            <button
                                onClick={() => alert(`View details for ${gadget.product_title}`)}
                                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg w-full"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Gadgets;


