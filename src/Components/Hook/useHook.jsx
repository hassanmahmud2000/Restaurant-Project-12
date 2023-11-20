import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AxiosPublic from './AxiosPublic';

const useHook = () => {
    const[data,setData] =useState([]);
    const axiosPublic = AxiosPublic()
    const[review,setReview] =useState([]);
    const {data:menu , isLoading:loading ,refetch} = useQuery({
        queryKey:['menuItem'],
        queryFn: async ()=>{
            const res = await axiosPublic('/menu')
            setData(res.data)
        }
    })

    useEffect(()=>{
        fetch('http://localhost:5000/review')
            .then(res=>res.json())
            .then(data=>setReview(data))
    },[])

    return {data,review ,loading , refetch};
};

export default useHook;