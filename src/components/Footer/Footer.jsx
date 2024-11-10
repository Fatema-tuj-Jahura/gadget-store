const Footer = () => {
    return (
        <footer className="bg-gray-100  py-10 px-4 text-center">
      {/* Brand and Tagline */}
      <div className="mb-8">
        <h2 className="text-2xl text-black font-semibold">Gadget Heaven</h2>
        <p className="text-sm text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr className="border-gray-300 my-8 w-3/4 mx-auto" />

      {/* Links */}
      <div className="flex justify-center space-x-16 text-sm">
        {/* Services */}
        <div>
          <h3 className="font-semibold">Services</h3>
          <ul className="mt-2 space-y-1">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;