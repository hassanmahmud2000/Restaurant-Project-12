import React, { useEffect, useState } from 'react';

const useHook = () => {
    const[data,setData] =useState([]);
    const[review,setReview] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
            .then(res=>res.json())
            .then(data=>setData(data))
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/review')
            .then(res=>res.json())
            .then(data=>setReview(data))
    },[])

    return {data,review};
};

export default useHook;