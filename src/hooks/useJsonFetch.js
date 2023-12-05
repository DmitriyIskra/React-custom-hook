import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const getData = async (url) => {
        const response = await fetch(url);
        console.log(response)
        
        try { 
            const result = await response.json();
            if(response.status === 200) {
                setData(result)
            } else if(response.status !== 200) {
                setError(result);
            }
        } catch (error) {
            console.log('custom error', error)
        } 
    }

    useEffect(() => {
        getData(url)
    }, [])

    
    
    return [data, error, loading];
    
    
}
    
export default useJsonFetch;