import React, {useEffect, useState} from 'react'

function UseCurrencyInfo(currency) {

    const [data, setData]= useState({})
   
    useEffect(()=>{

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    .catch(()=> {
        throw new Error("No data found");
     })
   },[currency]);

   return data;
}


export default UseCurrencyInfo
