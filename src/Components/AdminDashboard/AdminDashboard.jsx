import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { LiaCreativeCommonsSampling } from "react-icons/lia";
import { GiNotebook } from "react-icons/gi";
import { BiSolidCoupon } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';

function AdminDashboard() {
    const [admin, setAdmin] = useState(0);
    const [userMenu, setUserMenu] = useState(false)
    const [menu, toggleMenu] = useState(false);
    const [loader, setLoader] = useState(true);
    const { auth, logout } = useAuth();

    const handleMenuToggle = () => {
        toggleMenu(!menu);
    };
    const checkAdmin = async () => {

        if (auth?.token) {
            try {
                const response = await axios.get('http://localhost:8000/user/getuser', {
                });
                setAdmin(response.data.role);
            } catch (error) {
                console.error('Failed to fetch user info:', error);
            }
        }
        setLoader(false);
    };

    useEffect(() => {
        checkAdmin();
    }, [auth]);

    if (loader) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
        );
    }

    if (!admin) {
        return (<h1>404 not found</h1>);
    }



    return (
        <>
            <div className={`${menu ? "" : "-translate-x-full"} fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 bg-white shadow-2xl`}>
                <div className='px-4 flex justify-between items-center h-20 border-b'>
                    <Link to="/">
                        <div className='flex items-center'>
                            <img src={logo} alt="" className='w-[9rem] md:w-auto' />
                        </div>
                    </Link>
                    <IoIosArrowDropleftCircle className='md:hidden block text-blue-500 text-4xl' onClick={handleMenuToggle} />
                </div>
                <div className='flex flex-col justify-between px-4 h-full'>
                    <ul>
                        <Link to="/admin">
                            <li className='flex items-center my-3 bg-transparent hover:bg-blue-50 rounded-md px-4 py-2'>
                                <MdDashboard className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Dashboard</h1>
                            </li>
                        </Link>
                        <Link to="/admin/products">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <FaBoxOpen className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Products</h1>
                            </li>
                        </Link>
                        <Link to="/admin/category">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <IoMdCart className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Category</h1>
                            </li>
                        </Link>
                        {/* <Link to="/admin/orders">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <GiNotebook className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Orders</h1>
                            </li>
                        </Link>
                        <Link to="/admin/coupons">
                            <li className='flex items-center my-3 hover:bg-blue-50 rounded-md px-4 py-2'>
                                <BiSolidCoupon className='text-xl text-blue-500 mr-3' />
                                <h1 className='font-bold'>Coupons</h1>
                            </li>
                        </Link> */}
                    </ul>

                    <ul className='mb-32'>
                        <li className='flex items-center my-3 hover:bg-blue-50 rounded-md cursor-pointer px-4 py-2'
                            onClick={logout}
                        >
                            <BiLogOut className='text-xl text-red-600 mr-3' />
                            <h1 className='font-bold'>Logout</h1>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full bg-blue-50 md:pl-64">
                <nav className='w-full h-20 bg-white border flex flex-between'>
                    <div className='w-full flex justify-between'>
                        <FaBars className='md:hidden block text-4xl m-4' onClick={handleMenuToggle} />
                        <div></div>
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
                    </div>

                </nav>
                <Outlet />
            </div>
        </>
    );
}

export default AdminDashboard;
