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
  const storeShortUrlList = JSON.parse(sessionStorage.getItem("shortUrlList"))

  const newStoreShortUrlList = storeShortUrlList ? storeShortUrlList : []
  // @ts-ignore
  const [shortUrlList, setShortUrlList] = useState<ShortUrlListObj[]>(newStoreShortUrlList)

  useEffect(() => {
    window.sessionStorage.setItem(
      "shortUrlList", 
      JSON.stringify(shortUrlList)
    );
  }, [shortUrlList]);

  return <div className='shorten-url-app-container'>
    <Header />
    <MoreThanLinks />
    <MiddleSectionWrapper longURL={longURL} setLongURL={setLongURL} shortUrlList={shortUrlList} setShortUrlList={setShortUrlList} />
    <BoostLinks />
    <Footer />
  </div>;
};

export default App;
