import React from 'react'
import Icon from '../../Icon'
const PostHeader = () => {
   return (
      <div className='post_header '>
         <div className='icon-larger post-profile-img'>
            <Icon
               src={'/images/profile.png'}
               alt={'profile image'}
            />
         </div>
         <div className='post_hearder_details' >
            <div>
               <div className='post_title'>
                  <h2>
                     안녕 나 응애
                  </h2>
                  <div className='icon-small'>
                     <Icon
                        src='/images/verified.png'
                        alt={'verified icon'}
                     />
                  </div>
                  <span className='post-time'>
                     1일전
                  </span>
               </div>
               <div className='title-about'>
                  <span>
                     165cm · 53kg
                  </span>
               </div>
            </div>
            <div className='btn-main'>
               <button>
                  팔로우
               </button>
            </div>
         </div>
      </div>
   )
}

export default PostHeader