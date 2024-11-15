import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart} from 'react-icons/fa';
import {  toast } from 'react-toastify';
import { addCart } from '../../utility/addToDB';
import { wishCart } from '../../utility/addAgainDB';
import { Helmet } from 'react-helmet-async';



const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const GadgetId = parseInt(id);
    const gadget= data.find(gadget => gadget.product_id === GadgetId);
    console.log(gadget)


    const [isInWishlist, setIsInWishlist] = useState(false);


    const addToWishlist = (id) => {
        if (!isInWishlist) {
            setIsInWishlist(true);
            toast(`Wishlist updated! You can find ${gadget.product_title} in your wishlist`);
            wishCart(id);
        }
        // toast(`Wishlist updated! You can find ${gadget.product_title} in your wishlist`);
        // wishCart(id);
    };


    const addToCart = (id) => {
        toast(`Great choice! ${gadget.product_title} has been added to your cart. Happy shopping!`);
        addCart(id);
    };


    return (
        <div className=' min-h-screen'>
            <Helmet>
              <title>Details - Gadget Heaven</title>
            </Helmet>
            <div className="relative z-10 flex flex-col items-center bg-purple-500 text-center text-white pt-5 pb-20 gap-2">
             <h2 className="text-3xl font-bold">Product Details</h2>
             <p className="text-base font-normal">
             Explore the latest gadget that will take your experience to the next level. <br /> From smart devices to coolest experience we have it all.
            </p>
            </div>




            <div className="absolute inset-x-0 mx-auto -bottom-12 z-20 w-11/12 md:w-3/4 lg:w-2/3 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex  gap-8">
               <div className="w-1/3 h-full ">
                 <img
                src={gadget.product_image}
                alt={gadget.product_title}
                className="w-full object-cover rounded-lg mt-20"/>
               </div>
               <div className="w-2/3">
                 <h3 className="text-2xl font-bold mb-2">{gadget.product_title}</h3>
                 <p className="text-gray-700 text-lg font-semibold">Price: ${gadget.price}</p>
                 <p className="text-gray-600 mb-2">{gadget.description}</p>
                 {gadget.availability && (
                <div className="bg-lime-200 text-green-600 font-semibold mb-2 rounded-xl shadow-lg py-1 px-4 inline-block text-center">
                    In Stock
                </div>
                )}
                <h4 className="font-semibold mb-2">Specifications:</h4>
                <ul className="list-disc pl-6 mb-4">
                {gadget.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
                </ul>


           
            <div className="flex items-center gap-1">
                <h4 className="text-xl font-semibold mb-2">Rating</h4>
                <FaStar size={18} color="yellow" />
            </div>
            <div className="flex items-center gap-4">
                <div className="rating">
                    <input type="radio" name="rating-2" className="text-lg mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-gradient-to-r from-yellow-400 via-orange-200 to-white" />
                </div>
                <div className="px-2 py-2 rounded-full bg-white border-gray-950 shadow-lg">
                    <p className="text-black font-semibold">{gadget.rating}</p>
                </div>
            </div>


           
            <div className="flex items-center gap-3 mt-2">
                   <button
                    onClick={() => addToCart(GadgetId)}
                    className="flex items-center gap-3 bg-purple-500 text-white py-2 px-4 rounded-2xl hover:bg-purple-600"
                   >
                    Add to Cart <FaShoppingCart />
                </button>
                <button
                  onClick={() => addToWishlist(GadgetId)}
                  disabled={isInWishlist} // Disable button based on isInWishlist state
                  className={`py-3 px-3 border-2 rounded-full shadow-lg 
                  ${isInWishlist ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'border-black hover:bg-gray-500 text-black'}`}
                                                             >
                   <FaHeart />
                </button>

                 </div>
               </div>
            </div>
          </div>


 </div>   
    );
};


export default Details;
