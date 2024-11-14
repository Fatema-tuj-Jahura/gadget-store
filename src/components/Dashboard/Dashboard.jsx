import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredAddList } from '../../utility/addToDB';
import { FaTimes } from 'react-icons/fa';

const Dashboard = () => {
    const [addGadget, setAddGadget] = useState([]);
    const [sortDescending, setSortDescending] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedAddList = getStoredAddList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));
        const gadgetList = allGadgets.filter(gadget => storedAddListInt.includes(gadget.product_id));
        setAddGadget(gadgetList);
    }, []);

    // Calculate total cost
    const totalCost = addGadget.reduce((total, gadget) => total + gadget.price, 0).toFixed(2);

    // Sort by price in descending order
    const sortedGadgets = [...addGadget].sort((a, b) => sortDescending ? b.price - a.price : 0);

    const handleSortByPrice = () => {
        setSortDescending(!sortDescending);
    };

    const handlePurchase = () => {
        setShowModal(true); 
        setAddGadget([]); 
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/'); 
    };

    // Remove item from cart
    const handleRemove = (productId) => {
        setAddGadget(addGadget.filter(gadget => gadget.product_id !== productId));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Section */}
            <div className="bg-purple-500 text-white text-center py-8 flex flex-col gap-2 items-center">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* Cart and Wishlist Tabs */}
            <div className="flex justify-center mt-4 gap-6">
                <Tabs>
                    <TabList>
                        <Tab><button className="px-6 py-2 bg-purple-500 text-white text-lg rounded-full hover:bg-slate-800">Cart</button></Tab>
                        <Tab><button className="px-6 py-2 border-2 border-purple-500 bg-white text-purple-500 text-lg rounded-full hover:bg-slate-800">WishList</button></Tab>
                    </TabList>

                    <TabPanel>
                        {/* Cart Section */}
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold">Cart</h3>
                                <span className="text-xl font-semibold">Total cost: ${totalCost}</span>
                                <button 
                                    onClick={handlePurchase} 
                                    disabled={addGadget.length === 0} 
                                    className={`px-4 py-2 rounded-full ${addGadget.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-500 text-white'}`}>
                                    Purchase
                                </button>
                                <button 
                                    onClick={handleSortByPrice} 
                                    className="border-2 border-purple-500 bg-white text-purple-500 py-2 px-4 hover:bg-purple-100 rounded-full">
                                    Sort by Price
                                </button>
                            </div>

                            <div>
                                {sortedGadgets.map(gadget => (
                                    <div key={gadget.product_id} className="flex items-center justify-between p-4 border rounded-lg shadow-md mb-4 bg-gray-50">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={gadget.product_image}
                                                alt={gadget.product_title}
                                                className="h-16 w-16 object-cover rounded-lg"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold">{gadget.product_title}</h3>
                                                <p className='text-gray-600'>{gadget.description}</p>
                                                <p className="text-black">Price: ${gadget.price}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleRemove(gadget.product_id)} 
                                            className="text-red-500 text-lg font-semibold ml-2">
                                            <FaTimes />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                        <p className="mb-4">Thank you for your purchase.</p>
                        <button 
                            onClick={handleCloseModal} 
                            className="px-4 py-2 bg-purple-500 text-white rounded-full">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
