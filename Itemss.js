import React from 'react'
import Lists from './Lists'

const Itemss = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
        {items.map((item)=>(
          <Lists item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}/>
        ))}
      </ul>
  )
}

export default Itemss