import React from 'react'
import per1 from "../../assets/per1.png";
import per2 from "../../assets/per2.png";
import per3 from "../../assets/per3.png";
import feedbackbg from "../../assets/bg.jpg";
export default function Feedback() {
    return (
        <div
            className="feedback overflow-hidden bg-white h-80 w-[38%] rounded-xl"
            style={{ boxShadow: "5px 6px 5px 0px rgba(0,0,0,0.34)" }}
        >
            <div
                className="relative h-[35%] bg-cover bg-center flex items-start justify-start p-3 "
                style={{ backgroundImage: `url(${feedbackbg})` }}
            >
                <span className="text-white text-base font-bold">
                    Feedback Data
                </span>
            </div>
            <div className="relative h-[15%] border border-b-2 flex items-center justify-center p-3 inset-0">
                <div className="absolute top-[-50px] left-3 flex items-center ">
                    <img
                        src={per1}
                        alt="First Image"
                        className="w-8 h-8 rounded-full mx-1 object-cover"
                    />

                    <img
                        src={per2}
                        alt="Middle Image"
                        className="w-10 h-10 rounded-full mx-1 object-cover " 
                    />

                    <img
                        src={per3}
                        alt="Third Image"
                        className="w-8 h-8 rounded-full mx-1 object-cover"
                    />
                </div>
                <div className="bg-golden text-white  rounded-md px-4 py-2 text-center absolute  top-[-60px]  ">
                    <svg
                        width="75"
                        height="13"
                        viewBox="0 0 75 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_1870_1517)">
                            <path
                                d="M6.56918 8.99463L9.95239 10.9373L9.05458 7.27588L12.0436 4.81234L8.1075 4.49463L6.56918 1.0415L5.03086 4.49463L1.09473 4.81234L4.08378 7.27588L3.18597 10.9373L6.56918 8.99463Z"
                                fill="white"
                            />
                        </g>
                        <g clipPath="url(#clip1_1870_1517)">
                            <path
                                d="M21.3504 8.99463L24.7336 10.9373L23.8358 7.27588L26.8249 4.81234L22.8888 4.49463L21.3504 1.0415L19.8121 4.49463L15.876 4.81234L18.865 7.27588L17.9672 10.9373L21.3504 8.99463Z"
                                fill="white"
                            />
                        </g>
                        <g clipPath="url(#clip2_1870_1517)">
                            <path
                                d="M36.6786 8.99463L40.0618 10.9373L39.164 7.27588L42.153 4.81234L38.2169 4.49463L36.6786 1.0415L35.1402 4.49463L31.2041 4.81234L34.1932 7.27588L33.2953 10.9373L36.6786 8.99463Z"
                                fill="white"
                            />
                        </g>
                        <g clipPath="url(#clip3_1870_1517)">
                            <path
                                d="M52.5545 8.99463L55.9377 10.9373L55.0399 7.27588L58.029 4.81234L54.0929 4.49463L52.5545 1.0415L51.0162 4.49463L47.0801 4.81234L50.0691 7.27588L49.1713 10.9373L52.5545 8.99463Z"
                                fill="white"
                            />
                        </g>
                        <g clipPath="url(#clip4_1870_1517)">
                            <path
                                d="M68.4305 3.71338L68.9615 4.90609L69.2188 5.48421L69.8758 5.5363L71.228 5.64567L70.1988 6.49463L69.7006 6.90609L69.8484 7.52067L70.155 8.77588L68.9944 8.10921L68.4305 7.77588L67.8666 8.0988L66.7061 8.76546L67.0126 7.51025L67.1604 6.89567L66.6623 6.48421L65.6331 5.63525L66.9853 5.52588L67.6422 5.4738L67.8995 4.89567L68.4305 3.71338ZM68.4305 1.0415L66.8922 4.49463L62.9561 4.81234L65.9451 7.27588L65.0473 10.9373L68.4305 8.99463L71.8137 10.9373L70.9159 7.27588L73.905 4.81234L69.9688 4.49463L68.4305 1.0415Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1870_1517">
                                <rect width="13.1387" height="12.5" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1870_1517">
                                <rect
                                    width="13.1387"
                                    height="12.5"
                                    fill="white"
                                    transform="translate(14.2334)"
                                />
                            </clipPath>
                            <clipPath id="clip2_1870_1517">
                                <rect
                                    width="13.1387"
                                    height="12.5"
                                    fill="white"
                                    transform="translate(30.1094)"
                                />
                            </clipPath>
                            <clipPath id="clip3_1870_1517">
                                <rect
                                    width="13.1387"
                                    height="12.5"
                                    fill="white"
                                    transform="translate(45.9854)"
                                />
                            </clipPath>
                            <clipPath id="clip4_1870_1517">
                                <rect
                                    width="13.1387"
                                    height="12.5"
                                    fill="white"
                                    transform="translate(61.8613)"
                                />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className="text-sm">Robert Smith</p>
                    <p className="text-xs">Guest</p>
                </div>
                <div className="absolute right-10 flex items-center justify-between w-1/5 -top-10">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#B5A166" />
                        <g clipPath="url(#clip0_1870_1561)">
                            <path d="M18.41 10.41L17 9L11 15L17 21L18.41 19.59L13.83 15L18.41 10.41Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1870_1561">
                                <rect width="24" height="24" fill="white" transform="translate(3 3)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#B5A166" />
                        <g clipPath="url(#clip0_1870_1560)">
                            <path d="M13.0199 9L11.6099 10.41L16.1899 15L11.6099 19.59L13.0199 21L19.0199 15L13.0199 9Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1870_1560">
                                <rect width="24" height="24" fill="white" transform="translate(3 3)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
            <div className="p-6">
                <p>
                    There are many variations of passages of lorem ipsum
                    available, but the majority have suffered alteration some
                    form, by injected humors. There are many variations of
                    passages of lorem ipsum available, but the majority have
                    suffered alteration some form, by injected humors.
                </p>
            </div>
        </div>
    )
}
