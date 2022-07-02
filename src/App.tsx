import React from 'react'
import ShortenUrlInput from './views/components/ShortenUrlInput';
import ShortenUrlData from "./data/ShortenUrlData"

const App = () => {
  return <div className='shorten-url-app-container'>
    <ShortenUrlData />
    <ShortenUrlInput />
  </div>;
};

export default App;
