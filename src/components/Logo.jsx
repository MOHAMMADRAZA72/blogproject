import React from 'react'
import icon from '../images/logo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={icon} width={width}/>
    </div>
  )
}

export default Logo