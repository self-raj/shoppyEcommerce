import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer () {
  return (
    <div className="bg-gray-900 text-gray-300 py-10 md:px-28 px-8 ">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4  gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">ShoppyGlobe</h2>
          <p className="text-sm">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Payment Options</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
