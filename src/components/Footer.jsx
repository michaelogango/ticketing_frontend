import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center bg-gray-50 p-8 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-2">Get Your Tickets Today!</h2>
            <p className="text-gray-600">Join us for unforgettable events and experiences.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-8 mb-12">
        {/* Logo */}
        <div className="col-span-3">
          <Link to="/" className="text-xl font-cursive">Logo</Link>
        </div>

        {/* Quick Links */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact Us</Link></li>
            <li><Link to="/help" className="text-gray-600 hover:text-black transition-colors">Help Center</Link></li>
            <li><Link to="/support" className="text-gray-600 hover:text-black transition-colors">Support</Link></li>
            <li><Link to="/careers" className="text-gray-600 hover:text-black transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><Link to="/blog" className="text-gray-600 hover:text-black transition-colors">Blog</Link></li>
            <li><Link to="/events" className="text-gray-600 hover:text-black transition-colors">Events</Link></li>
            <li><Link to="/faqs" className="text-gray-600 hover:text-black transition-colors">FAQs</Link></li>
            <li><Link to="/testimonials" className="text-gray-600 hover:text-black transition-colors">Testimonials</Link></li>
            <li><Link to="/community" className="text-gray-600 hover:text-black transition-colors">Community</Link></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-4">Stay Connected</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">YouTube</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="col-span-3">
          <h3 className="font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-600 mb-4">Join our newsletter for updates on events and exclusive offers.</p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button className="w-full px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
            <p className="text-xs text-gray-500">By subscribing you agree to our Privacy Policy and consent to receive updates.</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            © {currentYear} EventHub. All rights reserved. 
            <Link to="/privacy" className="ml-4 hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="ml-4 hover:text-black transition-colors">Terms of Service</Link>
            <button className="ml-4 hover:text-black transition-colors">Cookies Settings</button>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;