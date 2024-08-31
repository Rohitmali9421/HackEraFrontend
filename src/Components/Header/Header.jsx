import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaBars } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
import logo from '../../assets/logo.jpg';

function Header() {
  const [menu, setMenu] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { auth, logout } = useAuth();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
        <button id="toggleOpen" className='lg:hidden' onClick={toggleMenu}>
          <FaBars className='text-xl' />
        </button>
        <img src={logo} alt="logo" className='h-14' />

        <div id="collapseMenu"
          className={`lg:ml-10 max-lg:hidden lg:!block ${menu ? 'block' : 'hidden'}`}>
          <ul className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 text-'>
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

        <div className="flex gap-x-6 gap-y-4 ml-auto items-center">
          <SearchBar />

          <div className='flex items-center space-x-8'>
            <span className="relative cursor-pointer"
              onClick={() => setShowFav(!showFav)}
            >
              {showFav && (
                <div className="absolute -bottom-20 right-0 z-10 w-40 bg-slate-200 h-min rounded-md shadow-sm p-4">
                  {auth.user ? (
                    <div>Nothing here</div>
                  ) : (
                    <Link to="/login">
                      <button className='w-full px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              )}
              <FaRegHeart className='text-2xl' />
              <span className="absolute left-auto ml-4 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                {auth.user ? auth.user.fav.length : 0}
              </span>
            </span>

            <span className="relative cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            >
              {showCart && (
                <div className="absolute -bottom-20 right-0 z-10 w-40 bg-slate-200 h-min rounded-md shadow-sm p-4">
                  {auth.user ? (
                    <div>Nothing here</div>
                  ) : (
                    <Link to="/login">
                      <button className='w-full px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              )}
              <PiShoppingCartBold className='text-2xl' />
              <span className="absolute left-auto ml-4 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                {auth.user? auth.user.cart.length : 0}
              </span>
            </span>

            {auth.user ? (
              <div
                className="relative cursor-pointer flex items-center gap-4 p-2 mr-10 rounded-md"
                onMouseEnter={() => setUserMenu(true)}
                onMouseLeave={() => setUserMenu(false)}
              >
                {userMenu && (
                  <div className="absolute bg-slate-200 text-center flex flex-col p-4  w-40 top-[60px] gap-2 -right-1 rounded-md shadow-md">
                    <Link to="/cart" className='rounded-xl p-1 cursor-pointer hover:bg-slate-300'>My Cart</Link>
                    <Link to="/settings">
                      <p className='rounded-xl p-1 cursor-pointer hover:bg-slate-300'>
                        Update Profile
                      </p>
                    </Link>
                    <p className='rounded-xl p-1 bg-red-500 text-white cursor-pointer hover:bg-red-600' onClick={logout}>Logout</p>
                  </div>
                )}
                <img
                  src={auth.user.profile_picture.url}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-base font-bold">{auth.user.name}</p>
                  <p className="text-sm font-normal">{auth.user.role ? "Admin" : "User"}</p>
                </div>
                <img src={"src/assets/downArrow.png"} alt="" className="h-2 w-3 rounded-full" />
              </div>
            ) : (
              <Link to="/login">
                <button className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8000/api/products/search?query=${newQuery}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleResultClick = (result) => {
    setQuery(result.title);
    setResults([]);
    navigate(`/product/${result._id}`); // Navigate to the product page
  };

  return (
    <div className="relative w-50">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <button type="submit" className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input rounded-full px-8 py-2 w-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
        />
      </form>
      {results.length > 0 && (
        <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full">
          <ul>
            {results.map((result) => (
              <li
                key={result._id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleResultClick(result)}
              >
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
