import React from 'react'

type ShortUrlListObj = {
    newLongUrl: string
    newShortUrl: string
}

interface ShoortenUrlListsProps {
    shortUrlList: ShortUrlListObj[]
}

const ShoortenUrlLists: React.FC<ShoortenUrlListsProps> = (props: ShoortenUrlListsProps) => {

    const copyToClipboardFn = (e: React.MouseEvent<HTMLButtonElement>) => {
        const NewShortUrl: any = e.currentTarget.parentNode!.firstChild!.textContent

        // Copy Short URL to clipboard...
        navigator.clipboard.writeText(NewShortUrl)
    }
    
    const printedUrls = props.shortUrlList.map((item, index) => {
        return (
            <div className='shorten-url-input-lists-div' key={index}>
                <div className='long-url'>{item.newLongUrl}</div>
                <div className="shorten-url-input-list-second-wrapper">
                    <div className='short-url'>{item.newShortUrl}</div>
                    <button onClick={(e) => {copyToClipboardFn(e)}}>Copy</button>
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