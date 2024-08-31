import { useEffect } from 'react'
import { GiNotebook } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { TbUsersGroup } from "react-icons/tb";
import { BsFillBoxSeamFill } from "react-icons/bs";
import LittleCarousel from './LittleCarousel';
import 'react-calendar/dist/Calendar.css';
import ChartBoi from './ChartBoi';
import { useAuth } from '../../Contexts/UserContext';

function Dashboard() {

    const { auth, logout } = useAuth()
    const user = auth.user;
    useEffect(() => {
        if (!user || user.role !== 1) {
            window.location.href = '/login';
        }
    }, [])
    useEffect(() => { document.title = "BeatMart: Admin Dashboard"; })
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
            <div className='relative'>
                <div className='flex justify-between  w-full'>

                    <h1 className='font-semibold text-2xl my-2 w-[60%]'>Sales Overview</h1>
                    <h1 className='hidden lg:block font-semibold text-2xl my-2 w-[40%]'>User Feedback</h1>
                </div>
                <div className='w-full flex py-4 items-center flex-col justify-around overflow-clip gap-4 lg:flex-row '>

                    <ChartBoi />


                    {/* <Feedback /> */}
                    <h1 className='block lg:hidden font-semibold text-start text-2xl my-2 w-full '>
                        User Feedback
                    </h1>
                    <LittleCarousel />

                </div>
            </div>
        </div >
    )
}



// function FeedbackCard({ data }) {
//     return (
//         <div
//             className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
//         >
//             <div className="flex flex-row justify-between w-full">
//                 <div className="flex flex-row justify-between w-full">
//                     <p className="text-xs">{data.name || "John Doe"}</p>
//                     <p className="text-xs">{data.date || "June 1, 2000"}</p>
//                 </div>
//             </div>
//             <div className="flex flex-row justify-between w-full">
//                 <h3 className="text-xl font-bold">{data.msg || "Great Experience!"}</h3>

//                 <div className="text-xs">
//                     <div className="flex flex-row">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-yellow-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                             ></path>
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-yellow-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                             ></path>
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-yellow-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                             ></path>
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-yellow-400"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                             ></path>
//                         </svg>

//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-yellow-200"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                             ></path>
//                         </svg>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-sm">
//                 {data.fullMsg || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, sed dapibus eros."}
//             </div>
//         </div>

//     )
// }

export default Dashboard
