import React from 'react'
import './index.css';


const Foot = ({length}) => {   
  return (
    <footer>{length===0?"Work - ":"works - "}
       {length}</footer>
  )
}

export default Foot;