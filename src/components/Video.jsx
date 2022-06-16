import React from 'react'
import AuthContext from '../context/AuthContext'
import { useContext  } from 'react'
import LinkVideo from './LinkVideo';
import { useEffect } from 'react';
import Spinner from './Spinner';



const Video = (props) => {
  const context = useContext(AuthContext);
  const {infoObject ,  fetchalldata, loading , setLoading } = context ;
  
  useEffect(() => {
  setLoading(true) ;
  fetchalldata(props.type);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='lg:w-2/3 w-full ml-5 md:ml-20'>
      
      {loading && <Spinner/>}
       {
        !loading && ( infoObject.results?.map((element , index) => {
        return (
        <div className=''  key={index}>
        <LinkVideo title={element.title} description={element.description?element.description : ""} link={element.link}/>
        </div>
        )
      }))}
      
    </div>
  )
}

export default Video