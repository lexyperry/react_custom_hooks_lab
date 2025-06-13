import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value , setValue]=useState(()=>{
        try{
            const item=window.localStorage.getItem(key);
            return item ? JSON.parse(item) :initialValue;
        } catch (error){
            return initialValue
        }
    });
    const setData = (data)=>{
        try{
            const dataToStore= data instanceof Function ? value(value):data;
            setStoredData(dataToStore);
            window.localStorage.setItem(key,JSON.stringify(dataToStore));
    }catch (error){
        console.log(error);
    }
    }
    return [value,setData];
}
