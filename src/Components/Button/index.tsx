import React from 'react'

interface ButtonProps {
    onClick?: () => void,
    type?: any,
    label: string,
    style?: string
}
export const Button = (props:ButtonProps) => {
    const { onClick, type, label, style} = props;

  return (
    <button onClick={onClick} className={style||"btn btn-primary"} type={type||"button"}>{label}</button>
  )
}
