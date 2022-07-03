import React, { useState } from 'react'
import ShortenUrlInput from './views/components/ShortenUrlInput';
import ShortenUrlData from "./data/ShortenUrlData"

const App = () => {
  const [longURL, setLongURL] = useState("")

  return <div className='shorten-url-app-container'>
    <ShortenUrlData longURL= {longURL} />
    <ShortenUrlInput setLongURL={setLongURL} />
  </div>;
};

export default App;
