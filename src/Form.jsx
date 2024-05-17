import React from 'react'
import Button from './Button'


const Form = ({req, setReq}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        <Button 
            btnText = 'users'
            req = {req}
            setReq = {setReq}
        />
        <Button 
            btnText = 'todos'
            req = {req}
            setReq = {setReq}
        />
        <Button 
            btnText = 'posts'
            req = {req}
            setReq = {setReq}
        />

    </form>
  )
}

export default Form