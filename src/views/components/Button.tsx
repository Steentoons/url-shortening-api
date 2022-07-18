import React from 'react'

interface ButtonProps {
    content: string
    background: boolean
}

const Button:React.FC<ButtonProps> = (props:ButtonProps) => {

    const buttonStyle = {
        background: props.background ? "#2BD1D1" : "transparent",
        color: props.background ? "white" : "#9C9BA0"
    }

  return (
    <div>
        <button style={buttonStyle}>{props.content}</button>
    </div>
  )
}

export default Button