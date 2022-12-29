import React from 'react'

interface InputProps {
    label: string
    onChange: any
    style?: React.CSSProperties
    type?: string
    simbol: string
}
export const Input = (props:InputProps):any => {

    const {
        label,
        onChange,
        type,
        simbol
    } = props

  
  return (
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">{simbol}</span>
        <input type={type||"text"} className="form-control" placeholder={label} aria-label={label} aria-describedby="basic-addon1"
        onChange={(e)=>{onChange(e.target.value)}}
        />
    </div>
  )
}
