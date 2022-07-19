import React, { useState } from 'react'
import Header from "./views/components/Header"
import MoreThanLinks from './views/components/MoreThanLinks';
import MiddleSectionWrapper from './views/components/MiddleSectionWrapper';
import "./views/styles/main.css"

const App = () => {
  const [longURL, setLongURL] = useState<string>("")
  const [shortUrlList, setShortUrlList] = useState<string[]>([])

  return <div className='shorten-url-app-container'>
    <Header />
    <MoreThanLinks />
    <MiddleSectionWrapper longURL={longURL} setLongURL={setLongURL} shortUrlList={shortUrlList} setShortUrlList={setShortUrlList} />
  </div>;
};

export default App;
