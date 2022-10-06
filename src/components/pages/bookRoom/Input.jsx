import React from 'react'

export const Input = ({name,className, type, onChange}) => {
  return (
    <>
        <label  > {name}</label>
        <input onChange ={onChange} className={className} type={type}/>
    </>
  )
}
