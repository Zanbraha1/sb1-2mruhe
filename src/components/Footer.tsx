import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Chris Casper</h3>
            <p className="text-sm">
              Following in the footsteps of my grandfather, Dave Casper, I'm committed to providing
              exceptional service in local real estate. Growing up watching him help families find
              their dream homes taught me the value of integrity and putting clients first.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/chris.casper.90"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ccasperrealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@casper.realestate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-6.95a8.16 8.16 0 004.65 1.46v-3.9a4.84 4.84 0 01-1.2 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm">
              These calculators are experimental tools provided for educational purposes only.
              Results should not be considered as financial advice. Please use your own judgment
              and consult with qualified professionals for accurate financial decisions.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Casper Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;