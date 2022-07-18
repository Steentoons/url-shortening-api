import React, { useState } from 'react'
import ShortenUrlInput from './views/components/ShortenUrlInput';
import ShortenUrlData from "./data/ShortenUrlData"
import ShoortenUrlLists from './views/components/ShoortenUrlLists';
import Header from "./views/components/Header"
import MoreThanLinks from './views/components/MoreThanLinks';
import "./views/styles/main.css"

const App = () => {
  const [longURL, setLongURL] = useState<string>("")
  const [shortUrlList, setShortUrlList] = useState<string[]>([])



  return <div className='shorten-url-app-container'>
    <Header />
    <MoreThanLinks />
    <ShortenUrlData longURL= {longURL} setShortUrlList={setShortUrlList} shortUrlList={shortUrlList} />
    <ShortenUrlInput setLongURL={setLongURL} />
    <ShoortenUrlLists shortUrlList={shortUrlList} />
  </div>;
};

export default App;
