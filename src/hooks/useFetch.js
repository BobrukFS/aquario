import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading('loading...')
        setData(null);
        setError(null);
    axios.get(url).then((resp) => {
        setLoading(false);
        resp.data.replies && setData(resp.data.replies);
        resp.data && setData(resp.data);
    })
    .catch((err) => {
        setLoading(false)
        setError('An error occurred. Awkward..')
    })
     
    }, [])
    
    return { data, loading, error, setData }
}
