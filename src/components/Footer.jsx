import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className='w-full bg-[#191818] text-white text-center h-10 justify-start flex items-center border-b-[0.5px] border-[#3c4043]'>
            <h1 className='px-5 text-[#8a8a8a]'>India</h1>
    </footer>
    
    <footer className='w-full bg-[#191818] text-center h-12 justify-between flex lg:flex-row flex-col items-center text-[#8a8a8a]'>
    <div className="left mx-4 space-x-5 ">
        <a>About</a>
        <a>Advertising</a>
        <a>Business</a>
        <a>How Search Works</a>
    </div>
    <div className="left space-x-5">
        <a>Privacy</a>
        <a>Terms</a>
        <a>Settings</a>
    </div>
    </footer>
    </div>
  )
}

export default Footer