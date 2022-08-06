import React from 'react'

type ShortUrlListObj = {
    newLongUrl: string
    newShortUrl: string
    copyState: boolean
}

interface ShoortenUrlListsProps {
    shortUrlList: ShortUrlListObj[]
    setShortUrlList: React.Dispatch<React.SetStateAction<ShortUrlListObj[]>>
}

const ShoortenUrlLists: React.FC<ShoortenUrlListsProps> = (props: ShoortenUrlListsProps) => {
    
    const printedUrls = props.shortUrlList.map((item, index) => {
        return (
            <div className='shorten-url-input-lists-div' key={index}>
                <div className='long-url'>{item.newLongUrl}</div>
                <div className="shorten-url-input-list-second-wrapper">
                    <div className='short-url'>{item.newShortUrl}</div>
                    <button id={index.toString()} style={{backgroundColor: item.copyState ? "#3A3053" : "#2BD1D1"}} onClick={(e) => {copyToClipboardFn(e, props.shortUrlList, props.setShortUrlList)}}>{item.copyState ? "Copied" : "Copy"}</button>
                </div>
            </div>
        )
    })

   
  return (
    <div className='shorten-url-input-lists-container'>
        {printedUrls}
    </div>
  )
}

export default ShoortenUrlLists

const copyToClipboardFn = (e: React.MouseEvent<HTMLButtonElement>, shortUrlList: ShortUrlListObj[], setShortUrlList: React.Dispatch<React.SetStateAction<ShortUrlListObj[]>>) => {
    const NewShortUrl: any = e.currentTarget.parentNode!.firstChild!.textContent
    const newKey: any = e.currentTarget.getAttribute("id")

    // Copy Short URL to clipboard...
    navigator.clipboard.writeText(NewShortUrl)

    // Updating the copy state...
    updateCopyState(newKey, shortUrlList, setShortUrlList)
    
}

const updateCopyState = (newKey: any, shortUrlList: ShortUrlListObj[], setShortUrlList: React.Dispatch<React.SetStateAction<ShortUrlListObj[]>>) => {
    const newCopyState = shortUrlList.map((item, idx) => {
        const newIdx = idx.toString()
        console.log("This change isn't reached")
        console.log(newIdx)
        console.log(newKey)
        if (newIdx === newKey) {
            return {...item, copyState: true}
        }

        return item
    })

    setShortUrlList(newCopyState)
}