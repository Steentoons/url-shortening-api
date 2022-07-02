import React from 'react'
import { useEffect } from 'react';

const axios = require('axios');

const ShortenUrlData = () => {

    useEffect(() => {
        // Read this to get the best and clean folder structure...
        // https://reactjs.org/docs/thinking-in-react.html
        
        axios.get("https://api.shrtco.de/v2/shorten?url=")
        .then((response: String) => {
            console.log(response)
        })
        .catch((error: String) => {
            console.log(error)
        })
        .then(() => {
            console.log("This was called...")
        })
    }, [])
    
  return (
    <></>
  )
}

export default ShortenUrlData