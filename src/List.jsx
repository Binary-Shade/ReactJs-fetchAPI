import React from 'react'

const List = ({item, key}) => {
  return (
    <li>
      {JSON.stringify(item)}
    </li>
  )
}

export default List