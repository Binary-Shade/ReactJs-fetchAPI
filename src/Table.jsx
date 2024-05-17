import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='table-container'>
        <table>
            <tbody>
                <Row 
                    items = {items}
                />
            </tbody>
        </table>
    </div>
  )
}

export default Table