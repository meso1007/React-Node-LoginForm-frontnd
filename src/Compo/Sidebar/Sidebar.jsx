import React, { useState } from 'react';
import { FaTachometerAlt, FaShoppingCart, FaSearch, FaBox, FaChartBar, FaPhoneAlt, FaFileInvoice } from 'react-icons/fa';
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (      
  <div className="fixed top-0 left-0 h-full bg-gray-800 text-white w-16 sm:w-64 z-10 p-4 border-r-2 border-lime-400">
        <div className="flex justify-baseline items-center mb-8">
          <div className='text-sm'><img src="./logo2.png" alt="logo_img" className='w-[70%]'/></div>
          <div className="text-4xl font-bold text-lime-400 hidden sm:block">Grafty</div>
        </div>

        <nav className="flex flex-col items-center sm:items-baseline space-y-6 min-h-screen">
          {/* Quickmenu */}
          <div>
            <h3 className="text-xl font-semibold mb-2 hidden sm:block">Quickmenu</h3>
            <ul className='space-y-6 sm:space-y-3 justify-center flex flex-col items-center sm:items-start'>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaTachometerAlt className="text-xl hover:border-l-4 hover:border-lime-400 sm:hover:border-0" />
                <a href="/dashboard" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Dashboard</a>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaShoppingCart className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/my-order" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">My Order</a>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaSearch className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/explore" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Explore</a>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaBox className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/products" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Products</a>
              </li>
            </ul>
          </div>

          {/* Setting */}
          <div>
            <h3 className="text-lg font-semibold mb-2 hidden sm:block">Settings</h3>
            <ul className='space-y-6 sm:space-y-3 flex flex-col justify-center items-center sm:items-start'>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaChartBar className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/charts" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Charts</a>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaArrowTrendUp className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/trends" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Trends</a>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaPhoneAlt className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/contact" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Contact</a>
              </li>
              <li className="flex items-center space-x-3 cursor-pointer">
                <FaFileInvoice className="text-xl hover:border-lime-400 sm:hover:border-0" />
                <a href="/billing" className="text-gray-400 hover:text-lime-400 transition hidden sm:block">Billing</a>
              </li>
            </ul>
          </div>


          {/* Others */}
        <div className='w-full h-full flex flex-col justify-center items-center gap-y-10 sm:gap-y-16'> {/* Adjust gap-y for spacing */}
          <div className='w-full mt-4'>
            <a href="/" className="p-2 sm:py-2 sm:px-3 cursor-pointer font-semibold group bg-lime-400 hover:bg-lime-500 rounded text-lg text-gray-800 transition w-full flex justify-center items-center gap-1">
              <RiLogoutCircleFill className='text-xl text-gray-800 '/>
              <span className='hidden sm:block'>Logout</span>
            </a>
          </div>      
          <div className="hidden sm:flex relative w-full h-32 justify-center items-center rounded-md text-gray-200 " style={{ backgroundColor: '#0077C3' }}>
            {/* Indented part */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-11 h-8 bg-gray-800 -mt-4 rounded-b-full"></div>
            
            {/* Circle inside the indented part */}
            <IoHelpCircleOutline className="text-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full" style={{ backgroundColor: '#0077C3' }}/>

            <button className="cursor-pointer text-gray-200 flex flex-col gap-3 justify-center items-center">
              <h1 className='text-lg font-semibold'>Help Center</h1>
              <p className='text-sm text-gray-300'>Having Trouble in Grafty? Please contact us for more information.</p>
            </button>
          </div>
          {/* help mark sm */}
          <div className="flex sm:hidden relative w-full text-lg justify-center items-center rounded-md text-gray-200 mt-2" style={{ backgroundColor: '#0077C3' }}>
          <IoHelpCircleOutline className="p-2 w-full h-full rounded-full" style={{ backgroundColor: '#0077C3' }}/>
          </div>
          </div>       
        </nav>
      </div>

  );
};

export default Sidebar;
