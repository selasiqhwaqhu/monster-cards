import { useState, useEffect } from "react"


const useFetch = (url)=>{

    const [data,setData] = useState([])
    const [loadPending,setLoadPending]= useState(true)
    const [errorMsg,setErrorMsg] = useState(null)

    useEffect(()=>{
        
            fetch(url)
                .then((res) => {
                    if (!res.ok){
                        throw Error('Could not fetch data for that resource');
                    }
                    
                    return res.json()
                })
                .then((getData)=>{
                    setData(getData)
                    setLoadPending(false)
                    setErrorMsg(null) 
                })
                .catch((err)=>{
                    setErrorMsg(err.message) 
                    setLoadPending(false) 
                })
    },[url])

    return {data,loadPending,errorMsg}
}

export default useFetch