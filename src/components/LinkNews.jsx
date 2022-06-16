import React from 'react'


const LinkNews = (props) => {

  return (
    <div className='text-white h-full my-2'>
      <div className=" flex items-center justify-between space-x-1 p-2 h-full">
        <div className="link-header w-2/3">
          <a className=" " href={`${props.sourcelink}`} >
            <p className="text-sm text-[#8a8a8a]">{props.sourcetitle}</p>
          </a>
          <a href={props.link}>
            <h1 className="inline-block text-lg text-blue-500 border-transparent border-b-[1px] hover:border-b-[1px] hover:border-blue-500">{props.title}</h1>
          </a>
          
        </div>
        {/* <div className='h-full'>
          {props.pagemap && props.pagemap.cse_thumbnail && props.pagemap.cse_thumbnail[0].src && (<img className="rounded-md h-full w-[170px]" src={props.pagemap.cse_thumbnail[0].src} alt="" />)}
          
        </div> */}
      </div>
    </div>
  )
}

export default LinkNews