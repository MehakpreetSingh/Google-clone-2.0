import React from 'react'
import AuthContext from '../context/AuthContext'
import { useContext  } from 'react'
import LinkImage from './LinkImage';
import { useEffect } from 'react';
import Spinner from './Spinner';



const Images = (props) => {
  const context = useContext(AuthContext);
  const {infoObject , fetchalldata, loading , setLoading} = context ;
  
  useEffect(() => {
  setLoading(true);
  fetchalldata(props.type);
  console.log("images")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="m-20">
      {/* {!loading && <>
        <h1 className='m-2 text-[#8a8a8a] '>About {infoObject.searchInformation.formattedTotalResults} results ({infoObject.searchInformation.formattedSearchTime}) </h1>
      </>} */}
      {loading && <Spinner/>}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
       {
        !loading && ( infoObject.image_results?.map((element , index) => {
        return (
        <div className="w-full h-full" key={index}>
          <LinkImage imgUrl={element.image.src} link={element.link.href}/>
        </div>
        )
      }))}
      </div>
      </div>
    
  )
}

export default Images ;