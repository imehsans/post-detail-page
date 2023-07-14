import React from 'react'
import Icon from '../Icon'
const Footer = () => {
   return (
      <div className='footer'>
         <div className='icon-normal'>
            <Icon
               src={'/images/gallery.png'} alt={'Like Img'}
            />
         </div>
         <div className='input-main'>
            <input placeholder='댓글을 남겨주세요.' className='input-field' type="text" name="Comment-box" id="Comment-box" />
         </div>
         <div>
            <p className='fotter-submit'>등록</p>
         </div>
      </div>
   )
}

export default Footer