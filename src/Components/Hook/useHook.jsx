import React, { useEffect, useState } from 'react';

const useHook = () => {
    const[data,setData] =useState([]);
    useEffect(()=>{
        fetch('menu.json')
            .then(res=>res.json())
            .then(data=>setData(data))
    },[data])
    return data;
};

export default useHook;