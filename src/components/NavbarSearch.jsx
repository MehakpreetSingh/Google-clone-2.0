import React from 'react'
import { useState , useContext } from 'react'
import Dropdown from './Dropdown'
import { Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const NavbarSearch = (props) => {
    const context = useContext(AuthContext) ;
    const {fetchalldata  ,setSearchquery ,setLoading , searchquery} = context ;
    // const navigate = useNavigate() ;
    const [isOpen, setisOpen] = useState(false)
    const handleNavbar = () => {
        const element = document.getElementsByClassName("Responsive-Navbar")[0];
        if (isOpen) {
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
    window.onscroll = function() {stickNavbar()} ;

    function stickNavbar() {
        if (window.pageYOffset >= 130) {
            document.getElementsByClassName("full-body-div")[0].classList.add("lg:fixed")
            document.getElementsByClassName("full-body-div")[0].classList.add("lg:w-full")
            document.getElementsByClassName("full-body-div")[0].classList.add("lg:bg-[#303134]")
            document.getElementsByClassName("search-form")[0].classList.remove("border-none")
            document.getElementsByClassName("search-form")[0].classList.add("lg:border-[1px]")
            document.getElementsByClassName("search-form")[0].classList.add("lg:border-[#8a8a8a]")
            document.getElementsByClassName("search-form")[0].classList.remove("my-4")
            document.getElementsByClassName("search-options")[0].classList.remove("md:flex")
            document.getElementsByClassName("search-options")[0].classList.add("lg:hidden")
            document.getElementsByClassName("search-class")[0].classList.remove("my-2")
            document.getElementsByClassName("sticky-nav-google")[0].classList.remove("mt-2")
            
          } else {
            document.getElementsByClassName("full-body-div")[0].classList.remove("lg:fixed");
            document.getElementsByClassName("full-body-div")[0].classList.remove("lg:w-full")
            document.getElementsByClassName("full-body-div")[0].classList.remove("lg:bg-[#303134]")
            document.getElementsByClassName("search-form")[0].classList.remove("lg:border-[1px]")
            document.getElementsByClassName("search-form")[0].classList.add("border-none")
            document.getElementsByClassName("search-form")[0].classList.add("my-4")
            document.getElementsByClassName("search-options")[0].classList.remove("lg:hidden")
            document.getElementsByClassName("search-options")[0].classList.add("md:flex")
            document.getElementsByClassName("sticky-nav-google")[0].classList.add("mt-2")
            document.getElementsByClassName("search-class")[0].classList.add("my-2")

          }
    }

    const handleSubmit = (e) => {
        if(searchquery.trim() !== "") {
            e.preventDefault() ;
            setLoading(true) ;
            fetchalldata(props.type)
        }
        e.preventDefault() ;
    }
    return (
        <div className='full-body-div  border-b-[0.5px] border-[#7e8081]'>
            <div className="py-1 lg:ml-20 ml-4 topsearch flex justify-between items-start lg:items-center ">
                <div className=' lg:hidden left m-4' onClick={handleNavbar}>
                    <div className="hamburger flex flex-col ">
                        <span className='h-[2px] w-[15px] bg-[#8a8a8a] '></span>
                        <span className='h-[2px] w-[15px] bg-[#8a8a8a] my-1'></span>
                        <span className='h-[2px] w-[15px] bg-[rgb(138,138,138)]'></span>
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
                <div className='sticky-nav-google lg:w-2/3 w-4/5 flex flex-col lg:flex-row justify-center items-center space-x-10 mt-2'>
                    <div className="logo">
                        <Link to="/"><img className='h-[30px]' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" /></Link>
                    </div>
                    <form onSubmit={handleSubmit} className="search-form my-4 search-bar flex justify-center items-center w-full lg:w-4/5  px-2  rounded-full bg-[#303134]  hover:shadow-lg border-none ">
                        <svg className="h-5 px-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0a9 9 0 1 1 .001-18.001A9 9 0 0 1 19 28z" fill="#8a8a8a" className="fill-000000"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
                        <input onChange={e => {setSearchquery(e.target.value); localStorage.setItem("searchtext" , e.target.value);}} className='search-class my-2 py-1 w-full bg-transparent focus:outline-none text-white'  type="text" name="searchtext" id="" value={searchquery} />
                        <svg className="h-6 px-2 goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                    </form>
                </div>
                <div className="right order-last flex items-center mx-8">
                    <span className=" text-white material-symbols-outlined hidden lg:block cursor-pointer">
                        settings
                    </span>
                    <div className="apps h-6 w-6 mx-4 hidden lg:block cursor-pointer">
                    <svg className="gb_Te fill-[white]" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                    </div>
                    <div className="user rounded-full h-9 w-9 cursor-pointer">
                        <img className='rounded-full' src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-29.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="search-options  my-[1px] md:ml-24 md:flex grid grid-col-1 justify-center md:justify-start">
                <div className="sm:w-2/3 flex-col flex md:flex-row md:justify-between">
                    <div className=' sm:flex grid grid-cols-3 space-x-5 text-md text-[#969ba1] font-normal'>
                        <div>
                        <Link className='flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 hover:border-b-2 active:border-blue-500 active:text-blue-500 active:border-b-2' to="/search/">
                            <svg className='h-4 mx-2' focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>
                            All
                        </Link>
                        </div> 
                        <div>
                        <Link className='flex justify-center items-center hover:border-blue-500 hover:text-blue-500 hover:border-b-2' to="/search/news">
                            <svg className='h-4 mx-2 fill-white' focusable="false" viewBox="0 0 24 24"><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path></svg>
                            News
                        </Link>
                        </div>
                        <div>
                        <Link className='flex justify-center items-center hover:border-blue-500 hover:text-blue-500 hover:border-b-2' to="/search/images">
                            <svg className='h-4 mx-2 fill-white' focusable="false" viewBox="0 0 24 24"><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path></svg>
                            Images
                        </Link>
                        </div>
                        <div>
                        <Link className='flex justify-center items-center hover:border-blue-500 hover:text-blue-500 hover:border-b-2' to="/search/books">
                            <svg className='h-4 mx-2 fill-white' focusable="false" viewBox="0 0 24 24"><path d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"></path></svg>
                            Books
                        </Link>
                        </div>
                        <div>
                        <Link className='flex justify-center items-center hover:border-blue-500 hover:text-blue-500 hover:border-b-2' to="/search/videos">
                            <svg className='h-4 mx-2 fill-white' focusable="false" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path></svg>
                            Videos
                        </Link>
                        </div>
                        <div className=''><Dropdown /></div>
                    </div>
                <div className='tools hidden md:block text-[#969ba1]'>Tools</div>
                </div>
            </div>
            <div className="sticky-navbar hidden">

            </div>
        </div>
    )
}

export default NavbarSearch