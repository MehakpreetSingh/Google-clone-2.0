import React from 'react'
import { useState } from 'react'


const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const handleNavbar = () => {
        const element = document.getElementsByClassName("Responsive-Navbar")[0] ;
        if(isOpen) {
            element.classList.remove('-translate-x-0');
            element.classList.add('-translate-x-[1000px]');
            setisOpen(!isOpen);
        }
        else {
            element.classList.remove('-translate-x-[1000px]');
            element.classList.add('-translate-x-0');
            setisOpen(!isOpen);
        }
    }
    return (
        <>
            <div className="flex items-center justify-between lg:justify-end lg:my-3 lg:mx-2">
                <div className=' lg:hidden left order-1 m-4' onClick={handleNavbar}>
                    <div className="hamburger flex flex-col ">
                        <span className='h-[2px] w-[15px] bg-[#8a8a8a] '></span>
                        <span className='h-[2px] w-[15px] bg-[#8a8a8a] my-1'></span>
                        <span className='h-[2px] w-[15px] bg-[#8a8a8a]'></span>
                    </div>
                </div>
                <div className=' Responsive-Navbar md:w-1/3 w-2/3 absolute top-0 h-screen bg-[#202124] z-1000 text-2xl -translate-x-[1000px] transition-all duration-500 lg:hidden'>
                    <div onClick={handleNavbar} className='py-3 px-2'>
                        <img className='h-10' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" />
                    </div>
                    <div className='px-2 border-b-[1px] border-[#7e8081] py-3' >
                        <ul className='space-y-3'>
                            <li className='flex text-[#c6c6c6] space-x-2' >
                                <img src="	https://www.gstatic.com/navigationdrawer/home_icon_dark.svg" alt="" />
                                <h1>Home</h1>
                            </li>
                            <li className='flex text-[#c6c6c6] space-x-2' >
                                <img src="	https://www.gstatic.com/navigationdrawer/search_activity_icon_dark.svg" alt="" />
                                <h1>Search History</h1>
                            </li>
                            <li className='flex text-[#c6c6c6] space-x-2' >
                                <img src="	https://www.gstatic.com/navigationdrawer/save_icon_dark.svg" alt="" />
                                <h1>Collections</h1>
                            </li>
                            <li className='flex text-[#c6c6c6] space-x-2' >
                                <img src="https://www.gstatic.com/navigationdrawer/manage_searches_icon_dark.svg" alt="" />
                                <h1>Offline Searches</h1>
                            </li>
                        </ul>
                    </div>
                    <div className='px-2 py-3'>
                        <ul className='space-y-4'>
                            <li className='flex text-[#c6c6c6] space-x-2' >
                                <img src="	https://www.gstatic.com/navigationdrawer/settings_icon_dark.svg" alt="" />
                                <h1>Settings</h1>
                            </li>
                            <li className='flex text-[#c6c6c6] space-x-2' >
                                <img src="	https://www.gstatic.com/navigationdrawer/help_icon_dark.svg" alt="" />
                                <h1>Help</h1>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right order-last flex items-center mx-4">
                    <div className=" hidden links lg:flex space-x-3 mr-2">
                        <li className='list-none text-white text-sm'><a href="/">Gmail</a></li>
                        <li className='list-none text-white text-sm'><a href="/">Images</a></li>
                    </div>
                    <div className="apps h-6 w-6 mx-4 cursor-pointer">
                    <svg className="gb_Te fill-white" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                    </div>
                    <div className="user rounded-full h-8 w-8 cursor-pointer">
                        <img className='rounded-full' src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-29.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar