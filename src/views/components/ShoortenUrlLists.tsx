import React from 'react'
import {useEffect} from "react"

interface ShoortenUrlListsProps {
    shortUrlList: string[]
}

const ShoortenUrlLists: React.FC<ShoortenUrlListsProps> = (props: ShoortenUrlListsProps) => {

    useEffect(() => {
        console.log("Called on every change...")
      console.log(props.shortUrlList)
    }, [props.shortUrlList])

    const copyToClipboardFn = (e: React.MouseEvent<HTMLButtonElement>) => {
        const NewShortUrl: any = e.currentTarget.parentNode!.firstChild!.textContent

        // Copy Short URL to clipboard...
        navigator.clipboard.writeText(NewShortUrl)
    }
    
    const printedUrls = props.shortUrlList.map((item, index) => {
        return (
            <div key={index}>
                <div>{item}</div>
                <button onClick={(e) => {copyToClipboardFn(e)}}>Copy</button>
            </div>
        )
    })
  return (
    <div>
        {printedUrls}
    </div>
  )
}

export default ShoortenUrlLists