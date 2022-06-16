import { createContext } from "react";
import { useState } from "react";
import API_KEY from "../keys";
const CONTEXT_KEY = "8943290aad087c25d" ;

const AuthContext = createContext() ;

export default AuthContext ;

export const AuthProvider = (props) => {
    const[infoObject , setInfoObject] = useState([]) ;
    // const[imageObject , setImageObject] = useState([]) ;
    // const[newsObject , setNewsObject] = useState([]) ;
    // const[videObject , setVideoObject] = useState([]) ;
    const [searchquery, setSearchquery] = useState(`${!localStorage.getItem("searchtext")?"":localStorage.getItem("searchtext")}`);
    const [loading , setLoading] = useState(true) ;
    const fetchalldata = async (type) => {
        setLoading(true) ;
        const options = {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '6b9cd02470msh868fe1f56b40f6ep187b2fjsnf60208b27245',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        };
        let data = await fetch(`https://google-search3.p.rapidapi.com/api/v1/${type}/q=${searchquery}`, options);
        console.log(loading)
        let parsedData = data.json() ;
        await parsedData.then((Object) => {
            setInfoObject(Object) ;
            setLoading(false) ;
            console.log(loading)
        });
    }
    const fetchData = async() => {
        let data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchquery}`);
        setLoading(true) ;
        let parsedData = (await data).json() ;
        await parsedData.then(async (Object) => {
            setInfoObject(Object) ;
            setLoading(false) ;
            console.log(infoObject);
        });
        
        
    }
    return (
        <AuthContext.Provider value={{searchquery , setSearchquery , fetchalldata , fetchData , infoObject , setInfoObject , loading , setLoading}}>
            {props.children}
        </AuthContext.Provider>
    )
}