import React from 'react'
import AuthContext from '../context/AuthContext'
import { useContext  } from 'react'
import LinkCard from './LinkCard';
import { useEffect } from 'react';
import Spinner from './Spinner';



const Search = (props) => {
  const context = useContext(AuthContext);
  const {infoObject ,  fetchalldata, loading , setLoading } = context ;
  
  useEffect(() => {
  setLoading(true) ;
  fetchalldata(props.type);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='lg:w-2/3 ml-5 md:ml-20'>
      {/* {!loading && <>
        <h1 className='m-2 text-[#8a8a8a] '>About {infoObject.searchInformation.formattedTotalResults} results ({infoObject.searchInformation.formattedSearchTime}) </h1>
      </>} */}
      {loading && <Spinner/>}
       {
        !loading && ( infoObject.results?.map((element , index) => {
        return (
        <div className=''  key={index}>
        <LinkCard title={element.title} snippet={element.description?element.description : ""} link={element.link}/>
        </div>
        )
      }))}
      
    </div>
  )
}

export default Search