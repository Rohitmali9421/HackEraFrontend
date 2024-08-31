import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaBars, FaCartPlus, FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LiaCreativeCommonsSampling } from "react-icons/lia";
import { useAuth } from '../../Contexts/UserContext';
import logo from '../../assets/logo.jpg';
import { useContext } from 'react';
function Header() {
  const [favList, setFavList] = useState([]);
  const [menu, setMenu] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { auth, logout } = useAuth()
  const user = auth.user;
  const toggleMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    if (!auth.user) {
      // window.location.href = '/login';
      setFavList([]);
    } else {
      setFavList(auth.user.favList || [112, 123, 312]);
    }
  }, [user])

  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className='flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
        <button id="toggleOpen" className='lg:hidden'>
          <FaBars className='text-xl' />
        </button>
        <img src={logo} alt="logo" className='h-14' />

        <div id="collapseMenu"
          className='lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>

          <ul
            className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 text-'>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500 " : "text-black"} lg:mx-2 mx-1 font-semibold hover:text-gray-700`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500" : "text-black"} lg:mx-2 mx-1 font-semibold hover:text-gray-700`
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500" : "text-black"} lg:mx-2 mx-1 font-semibold hover:text-gray-700`
                }>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500" : "text-black"} lg:mx-2 mx-1 font-semibold hover:text-gray-700`
                }>
                Support
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-6 gap-y-4 ml-auto">
          <div
            className='flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden'>
            <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />

          </div>

          <div className='flex items-center space-x-8'>
            <span className="relative cursor-pointer"
              onClick={() => setShowFav(!showFav)}
            >
              {showFav && (
                <div className="absolute -bottom-20 right-0 z-10 w-40 bg-slate-200 h-min rounded-md shadow-sm p-4">
                  {favList.length > 0 ? (
                    favList.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <img src="https://via.placeholder.com/150" alt="product" className="w-10 h-10" />
                        <div>
                          <h1 className="text-sm">Product Name</h1>
                          <p className="text-xs text-gray-500">Price: $20</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Link to="/login">
                      <button
                        className='w-full px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Login</button>
                    </Link>

                  )}
                </div>
              )}
              <FaRegHeart className=' text-2xl' />
              <span className="absolute left-auto ml-4 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </span>

            <span className="relative"
              onClick={() => setShowCart(!showCart)}
            >

              {showCart && (
                <div className="absolute -bottom-20 right-0 z-10 w-40 bg-slate-200 h-min rounded-md shadow-sm p-4">
                  {favList.length > 0 ? (
                    favList.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <img src="https://via.placeholder.com/150" alt="product" className="w-10 h-10" />
                        <div>
                          <h1 className="text-sm">Product Name</h1>
                          <p className="text-xs text-gray-500">Price: $20</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <Link to="/login">
                      <button
                        className='w-full px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Login</button>
                    </Link>

                  )}
                </div>
              )}
              <PiShoppingCartBold className='text-2xl' />
              <span className="absolute left-auto ml-4 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </span>
            <Link to="/login">
              <button

                className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Sign
                In</button>
            </Link>


          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
