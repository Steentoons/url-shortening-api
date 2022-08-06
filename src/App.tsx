import React, { useState, useEffect } from 'react'
import Header from "./views/components/Header"
import MoreThanLinks from './views/components/MoreThanLinks';
import MiddleSectionWrapper from './views/components/MiddleSectionWrapper';
import BoostLinks from './views/components/BoostLinks';
import Footer from './views/components/Footer';
import "./views/styles/main.css"

const App = () => {
  type ShortUrlListObj = {
    newLongUrl: string
    newShortUrl: string
    copyState: boolean
  }
  
  const [longURL, setLongURL] = useState<string>("")
  
  // @ts-ignore
  const storeShortUrlList = JSON.parse(localStorage.getItem("shortUrlList") || [])
  // @ts-ignore
  const [shortUrlList, setShortUrlList] = useState<ShortUrlListObj[]>(storeShortUrlList)

  useEffect(() => {
    window.localStorage.setItem(
      "shortUrlList", 
      JSON.stringify(shortUrlList)
    );
  });

  return <div className='shorten-url-app-container'>
    <Header />
    <MoreThanLinks />
    <MiddleSectionWrapper longURL={longURL} setLongURL={setLongURL} shortUrlList={shortUrlList} setShortUrlList={setShortUrlList} />
    <BoostLinks />
    <Footer />
  </div>;
};

export default App;
