import React from 'react'
import Cell from './Cell'

const Row = (items) => {
  return (
    <tr>
        {Object.entries(items).map((key, value)=>{
            return (
                <Cell
                    key={key}
                    cellData={JSON.stringify(value)}
                />
            )
        })}
    </tr>
  )
}

export default Row