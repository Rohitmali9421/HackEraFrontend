import React, { useState } from 'react';
import { TextField, Button, Avatar, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled('input')({
    display: 'none',
});

export default function Settings() {
    const [active, setActive] = useState('')
    const [profilePicture, setProfilePicture] = useState(null);
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');


    const handleFNameChange = (event) => {
        setFName(event.target.value);

    };


    const handleLNameChange = (event) => {
        setLName(event.target.value);

    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePinChange = (event) => {
        setPin(event.target.value);

    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);

    };

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
    };


    const handlePassordSubmit=(event)=>{
        event.preventDefault();
        if(pin===password || pin===confirmPassword){
            alert("Cannot have old and new password same")
        }
        if(password!==confirmPassword){
            alert('Password do not match')
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };


    return (
        <div className="sm:container mt-20 bg-white">
            <div className="title p-4 flex items-center gap-4 h-20 text-xl text-gray-500 border-[2px] border-gray-500">
                <p className={active === 'personal' ? `text-purple-500 cursor-pointer` : 'text-gray-500 cursor-pointer'} onClick={() => {
                    window.location.href = '#personalInfo'
                    setActive('personal')
                }}>Personal Info</p>

                <p className={active === 'change' ? `text-purple-500 cursor-pointer` : 'text-gray-500 cursor-pointer'} onClick={() => {
                    window.location.href = '#changePass'
                    setActive('change')
                }}>Change Pass</p>
            </div>
            <div className="personalInfo border-[2px] border-gray-500 p-10 py-20 md:flex gap-10">

                <div className='md:w-[30%]'>
                    <p className='font-extrabold text-xl'>Personal Information</p>
                    <p className='font-base text-xl'>Use permanant address whwre you can recieve mail</p>
                </div>

                <div className='md:w-[60%]  my-5 md:my-0 '>
                    <div className="flex items-center ">
                        <img
                            className="w-40 h-40  rounded-xl mb-4"
                            // src={profilePicture}
                            src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fpc-marvel-s-spider-man-remastered_bWpqameUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=6fac76a63e8a3e15ae363a29a2ba811570d35f088e32c56c72c4ac4d987b683c&ipo=images"}
                            alt="Profile"
                        />
                        <div className='h-full flex flex-col  gap-5 mx-10'>

                            <label htmlFor="profile-picture-upload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
                                Change Avtar
                                <input
                                    id="profile-picture-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleProfilePictureChange}
                                />
                            </label>

                            <p className='text-md text-gray-400'>JPG, GIF or PNG. 1MB max.</p>
                        </div>
                    </div>
                    <div className="container mx-auto max-w-full p-4 bg-white rounded-lg shadow">
                        <form>
                            <div className="flex gap-5">

                                <div className="mb-4 w-[50%]">
                                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                                    <input type="text" id="firstName" value={fname} onChange={handleFNameChange} name="firstName" className="w-full px-4 py-2 shadow-md 
 border rounded-md focus:outline-none focus:border-blue-500" required />
                                </div>

                                <div className="mb-4 w-[50%]">
                                    <label htmlFor="lastName"
                                        className="block text-gray-700 mb-2">Last Name</label>
                                    <input type="text" id="lastName" value={lname} onChange={handleLNameChange} name="lastName" className="w-full shadow-md px-4 py-2  
 border rounded-md focus:outline-none focus:border-blue-500" required />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 
 mb-2">Email Address</label>
                                <input type="email" id="email" value={email} onChange={handleEmail} name="email" className="w-full shadow-md px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700  
 mb-2">Address</label>
                                <input type="text" id="address" name="address" onChange={handleAddressChange} className="w-full shadow-md px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="gender"
                                    className="block text-gray-700 mb-2">Gender</label>
                                <select id="gender" name="gender" value={gender} onChange={handleGenderChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Update Information</button>
                        </form>
                    </div>
                </div>

            </div>
            <div className="changePass border-[2px] border-gray-500 p-10 py-20 md:flex gap-10 ">
                <div className='md:w-[30%] mb-10 md:mb-0'>
                    <p className='font-extrabold text-xl'>Change Password</p>
                    <p className='font-base text-xl'>Use permanant address whwre you can recieve mail</p>
                </div>

                <div className='md:w-[60%]  '>
                    <div className="container mx-auto max-w-full p-4 bg-white rounded-lg shadow">
                        <form>

                                <div className="mb-4 ">
                                    <label htmlFor="curentPass" className="block text-gray-700 mb-2">Current password</label>
                                    <input type="password" id="curentPass" value={pin} onChange={handlePinChange} name="curentPass" className="w-full px-4 py-2 shadow-md 
 border rounded-md focus:outline-none focus:border-blue-500" required />
                                </div>

                                <div className="mb-4 ">
                                    <label htmlFor="pass"
                                        className="block text-gray-700 mb-2">New Password</label>
                                    <input type="text" id="pass" value={password} onChange={handlePasswordChange} name="pass" className="w-full shadow-md px-4 py-2  
 border rounded-md focus:outline-none focus:border-blue-500" required />
                                </div>

                            <div className="mb-4">
                                <label htmlFor="confirmPass" className="block text-gray-700 
 mb-2">Email Address</label>
                                <input type="password" id="confirmPass" value={confirmPassword} onChange={handleConfirmPasswordChange} name="confirmPass" className="w-full shadow-md px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    required />
                            </div>

                            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={handlePassordSubmit}
                            >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}