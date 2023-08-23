import React from 'react'
// import App from '../App'

interface Props{
    children:string;
    color:string;
    onClick:()=>void;
}


const Button = ({children,onClick,color}:Props) => {
  return (
<button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}
export default Button;