import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="relative flex flex-col items-center bg-purple-600 text-white py-20 px-6 pb-60 rounded-b-xl text-center z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="mb-6 text-lg">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
  
        {/* Positioned Image with Border */}
        <div className="absolute -bottom-12 w-full flex justify-center z-20">
         <div className="p-4 rounded-lg border-4 border-white shadow-2xl">
         <img
          src={bannerImg} // Replace with your actual image path
          alt=""
          className="w-[500px] h-[230px] rounded-lg object-cover"
         />
      </div>
      </div>
      </div>

  
    );
};

export default Banner;