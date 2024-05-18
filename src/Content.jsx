import React from 'react'
import List from './List'

const Content = ({items}) => {
  return (
    <ul className='content'>
      {items.map(item=>(
        <List 
          key = {item.id}
          item = {item}
        />
      ))}
    </ul>
  )
}

export default Content