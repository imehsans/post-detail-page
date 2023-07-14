import React from 'react'
import Icon from './Icon'

const Header = () => {
   return (
      <div className='header'>
         <div className='icon-normal'>
            <Icon src={'/images/ARROW.png'} alt={'angle left'} />
         </div>
         <h1>
            자유톡
         </h1>
         <div className='icon-normal'>
            <Icon src={'/images/belloff.png'} alt={'angle left'} />
         </div>
      </div>
   )
}

export default Header