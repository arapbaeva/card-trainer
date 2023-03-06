import React, {useEffect} from 'react';
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542'
})

export const Login = () => {
    useEffect(()=>{
        axiosInstance.post(`/register`).then(res=>res.data)
    }, [])

    return (
        <>
            
        </>
    )
};


