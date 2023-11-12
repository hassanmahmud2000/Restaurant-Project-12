import React, { useEffect, useState } from 'react';

const useHook = () => {
    const[data,setData] =useState([]);
    const[review,setReview] =useState([]);
    useEffect(()=>{
        fetch('menu.json')
            .then(res=>res.json())
            .then(data=>setData(data))
    },[])

    useEffect(()=>{
        fetch('review.json')
            .then(res=>res.json())
            .then(data=>setReview(data))
    },[])

    return {data,review};
};

export default useHook;