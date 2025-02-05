import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mt-[400px] md:mt-[900px]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
        </h2>
        <p className="text-sm mt-2 md:mt-0">
          Don’t wait! Make a smart & logical quote here. It’s pretty easy.
        </p>
        <div className="mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-l-md text-black outline-none"
          />
          <button className="bg-[#FF9F0D] px-4 py-2 rounded-r-md text-black font-semibold">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-300 mt-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-sm mt-3">
            Corporate clients and leisure travelers rely on Groundlink for
            dependable, safe, and professional car services in major cities.
          </p>
          <div className="mt-4 flex items-center bg-[#FF9F0D] text-black p-3 rounded-md w-max">
            <div className="text-2xl">🕒</div>
            <div className="ml-2">
              <p className="text-sm font-semibold">Opening Hours</p>
              <p className="text-xs">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-xs">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-3 space-y-2">
            {["About", "News", "Partners", "Team", "Menu", "Contacts"].map(
              (link) => (
                <li key={link} className="hover:text-[#FF9F0D] cursor-pointer">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold">Help?</h3>
          <ul className="mt-3 space-y-2">
            {[
              "FAQ",
              "Term & Conditions",
              "Reporting",
              "Documentation",
              "Support Policy",
              "Privacy",
            ].map((link) => (
              <li key={link} className="hover:text-[#FF9F0D] cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold">Recent Post</h3>
          <div className="mt-3 space-y-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                
                <div>
                  <p className="text-xs text-gray-400">20 Feb 2022</p>
                  <p className="text-sm hover:text-[#FF9F0D] cursor-pointer">
                    Keep Your Business
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-700 mt-8 pt-6">
        <p className="text-gray-400 text-sm">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <FaFacebookF className="text-white hover:text-[#FF9F0D] cursor-pointer" />
          <FaTwitter className="text-white hover:text-[#FF9F0D] cursor-pointer" />
          <FaInstagram className="text-white hover:text-[#FF9F0D] cursor-pointer" />
          <FaYoutube className="text-white hover:text-[#FF9F0D] cursor-pointer" />
          <FaPinterest className="text-white hover:text-[#FF9F0D] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
