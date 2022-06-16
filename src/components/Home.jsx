import React from 'react'
import { useContext , useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    localStorage.setItem("searchtext" , ""); 
  },[])
  const navigate = useNavigate() ;
  
  const context = useContext(AuthContext);
  const { searchquery, setSearchquery } = context;
  
  const handleClick = () => {
    if(searchquery.trim() !== "") {
      navigate("/search/") ;
    }
    else {
      return
    }
  }
  const handleSubmit = (e) => {
    if(searchquery.trim() !== "") {
      navigate("/search/") ;
      e.preventDefault() ;
    }
    e.preventDefault() ;
}
  return (
    <div className='flex flex-col items-center'>
      <div className="logo my-2">
        <img className='lg:h-[93px] md:h-[75px] h-[60px]' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" />
      </div>
      
      <form onSubmit={handleSubmit} className=" my-4 search-bar flex justify-center items-center w-3/5 border px-2 border-[#8a8a8a] rounded-full hover:bg-[#303134]  hover:shadow-[0 1px 6px 0 #171717] hover:border-none">
        <svg className="h-5 px-2"viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0a9 9 0 1 1 .001-18.001A9 9 0 0 1 19 28z" fill="#8a8a8a" className="fill-000000"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
        <input className='my-2 w-full bg-transparent focus:outline-none text-white' type="text" name="searchtext" id="searchtext" value={searchquery} onChange={(e)=>{setSearchquery(e.target.value); localStorage.setItem("searchtext" , e.target.value);}}/>
        <svg className="h-6 px-2 goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
      </form>
      <div className="search-buttons my-4 text-white space-x-3 flex ">
        <button onClick={handleClick} className='bg-[#303134] py-2 px-4 text-sm rounded-md hover:border border-[#8a8a8a] focus:border'>Google Search</button>
        <a href="https://google.com/doodles">
          <button className='bg-[#303134] py-2 px-4 rounded-md text-sm hover:border border-[#8a8a8a] focus:border hidden lg:block'>
            I'am Feeling Lucky
          </button></a>
      </div>

      <div className="content-lang flex space-x-2 my-4 flex-col lg:flex-row justify-center items-center">
        <h1 className='text-white text-sm'>Google Offered in: </h1>
        <div className='space-x-2 flex flex-wrap justify-center'>
          <a className='text-[#8ab4f8] text-sm' href="/">ਪੰਜਾਬੀ</a>
          <a className='text-[#8ab4f8] text-sm' href="/">বাংলা</a>
          <a className='text-[#8ab4f8] text-sm' href="/">हिन्दी</a>
          <a className='text-[#8ab4f8] text-sm' href="/">తెలుగు</a>
          <a className='text-[#8ab4f8] text-sm' href="/">मराठी</a>
          <a className='text-[#8ab4f8] text-sm' href="/">ગુજરાતી</a>
        </div>
      </div>
    </div>
  )
}

export default Home