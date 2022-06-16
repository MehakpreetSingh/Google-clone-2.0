import React from 'react'


const LinkVideo = (props) => {

    return (
        <div className='text-white h-full my-2'>
            <div className=" flex items-center justify-between space-x-1 p-2 h-full">
                <div className="link-header w-2/3">
                    <a className=" " href={`${props.link}`} >
                        <p className="text-sm text-[#8a8a8a]">www.youtube.com {'>'} watch</p>
                        <h1 className="inline-block text-lg text-blue-500 border-transparent border-b-[1px] hover:border-b-[1px] hover:border-blue-500">{props.title}</h1>
                    </a>
                    <p className="text-sm text-[#8a8a8a]">{props.description}</p>
                </div>
                {/* <div className='h-full'>
                    <iframe
                        src={props.link}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />{" "}

                </div> */}
            </div>
        </div>
    )
}
export default LinkVideo;