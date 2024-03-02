import React from 'react'
import Itemss from './Itemss';
import {FaBold} from "react-icons/fa";

const Cont = ({items,handleCheck,handleDelete}) => { 

  return (
    <main>{(items.length)?(
        <Itemss items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      ) : (<p style={{color:'white',  textShadow:'2px 2px  4px black', textSizeAdjust: FaBold}}>You Activity is Empty</p>)
        }
    </main>
  )
}

export default Cont;