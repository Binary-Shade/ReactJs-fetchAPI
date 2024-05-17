import React from 'react'

const Button = ({btnText, req, setReq}) => {
  return (
    <button className= {btnText === req ? 'selected' : null}
        type='button'
        onClick={()=>setReq(btnText)}
    >
        {btnText}
    </button>
  )
}

export default Button