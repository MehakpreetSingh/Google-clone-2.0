import React from 'react'
import AuthContext from '../context/AuthContext'
import { useContext  } from 'react'
import { useEffect } from 'react';
import LinkNews from './LinkNews';
import Spinner from './Spinner';



const News = (props) => {
  const context = useContext(AuthContext);
  const {infoObject , fetchalldata, loading , setLoading } = context ;
  
  useEffect(() => {
    setLoading(true); 
    fetchalldata(props.type);
    console.log("news")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    <div className='lg:w-2/3 w-5/6 ml-5 md:ml-20'>
      {/* {!loading && <>
        <h1 className='m-2 text-[#8a8a8a] '>About {infoObject.searchInformation.formattedTotalResults} results ({infoObject.searchInformation.formattedSearchTime}) </h1>
      </>} */}
      {loading && <Spinner/>}
      <div className=''>
       {
        !loading && ( infoObject.entries?.map((element , index) => {
        return (
        <div className=''  key={index}>
        <LinkNews title={element.title} sourcetitle={element.source.title} sourcelink={element.source.href} link={element.link}/>
        </div>
        )
      }))}
      </div>
      
    </div>
    </>
  )
}

export default News