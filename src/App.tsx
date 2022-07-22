import React, { useState } from 'react'
import Header from "./views/components/Header"
import MoreThanLinks from './views/components/MoreThanLinks';
import MiddleSectionWrapper from './views/components/MiddleSectionWrapper';
import BoostLinks from './views/components/BoostLinks';
import "./views/styles/main.css"

const App = () => {
  type ShortUrlListObj = {
    newLongUrl: string
    newShortUrl: string
  }
  
  const [longURL, setLongURL] = useState<string>("")
  const [shortUrlList, setShortUrlList] = useState<ShortUrlListObj[]>([])

  return <div className='shorten-url-app-container'>
    <Header />
    <MoreThanLinks />
    <MiddleSectionWrapper longURL={longURL} setLongURL={setLongURL} shortUrlList={shortUrlList} setShortUrlList={setShortUrlList} />
    <BoostLinks />
  </div>;
};

export default App;
