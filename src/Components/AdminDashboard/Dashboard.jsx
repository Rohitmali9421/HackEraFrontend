import React, { useEffect } from 'react'
import { GiNotebook } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { TbUsersGroup } from "react-icons/tb";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import 'react-calendar/dist/Calendar.css';
import logo from '../../assets/logo.jpg';
import Feedback from './Feedback';
import ChartBoi from './ChartBoi';
import { useContext } from 'react';
import { useAuth } from '../../Contexts/UserContext';

function Dashboard() {

//   const { auth, logout } = useAuth()
//   const  user  = auth.user;
//     useEffect(()=>{
//         if(!user || user.role !== 'admin'){
//             window.location.href = '/login';
//         }
//     },[])
//     useEffect(() => { document.title = "BitKart: Admin Dashboard"; })
    return (
        <div className='w-full p-6'>
            <div className='w-full'>
                <h1 className='font-semibold text-3xl my-2'>Dashboard</h1>
                <p className='font-semibold text-gray-600'>Welcome to your dashboard...</p>
            </div>
            <div className='grid grid-cols-1  gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full my-5'>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'
                    style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
                
                >
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>356</h1>
                            <p className='text-xs font-normal'>Orders Received</p>
                        </div>
                        <div>
                            <GiNotebook className='w-10 h-10 p-2 text-white bg-green-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-green-400  bg-green-50'>
                        <h1 >10% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'
                    style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
                
                >
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>$5680</h1>
                            <p className='text-xs font-normal'>Average Daily Sales</p>
                        </div>
                        <div>
                            <VscGraph className='w-10 h-10 p-2 text-white bg-violet-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-violet-400  bg-violet-50'>
                        <h1 >30% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'
                    style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
                
                >
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>5.8K</h1>
                            <p className='text-xs font-normal'>New Customers This Month</p>
                        </div>
                        <div>
                            <TbUsersGroup className='w-10 h-10 p-2 text-white bg-sky-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-sky-400  bg-sky-50'>
                        <h1 >13% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
                <div className='w-full  bg-white rounded-md max-w-80 mx-auto px-5 py-3'
                    style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
                
                >
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>580</h1>
                            <p className='text-xs font-normal'>Pending Orders</p>
                        </div>
                        <div>
                            <BsFillBoxSeamFill className='w-10 h-10 p-2 text-white bg-orange-400 rounded-full' />
                        </div>
                    </div>
                    <div className='flex px-2  mt-3 w-14 py-1 rounded-sm text-xs font-normal items-center text-orange-400  bg-orange-50'>
                        <h1 >13% </h1>
                        <BsGraphUp className='pl-1 ' />
                    </div>
                </div>
            </div>
            <div className='w-full flex py-4 items-center flex-col justify-around overflow-clip gap-4 lg:flex-row '>
                
                <ChartBoi />

                
                <Feedback />
            </div>

        </div>
    )
}

export default Dashboard
