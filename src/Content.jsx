import React from 'react'
import List from './List'


const Content = ({items}) => {
  return (
    <div className='content'>
        <ul>
            {
                items.map((item)=>{
                    <List key={item.id} item = {item} />
                })
            }
        </ul>
    </div>
  )
}

export default Content