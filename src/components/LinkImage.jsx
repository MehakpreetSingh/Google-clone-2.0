import React from 'react'


const LinkImage = (props) => {

    return (
        <div className='h-full w-full'>
            <a className='h-full w-full' href={props.link}>
                <img className='h-full w-full' src={props.imgUrl} alt="" />
            </a>
        </div>

    )
}
export default LinkImage;