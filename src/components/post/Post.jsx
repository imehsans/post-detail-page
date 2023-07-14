import React from 'react'
import Icon from '../Icon'
import LikesAndComments from './sub_components/LikesAndComments'
import PostDetails from './sub_components/PostDetails'
import PostHeader from './sub_components/PostHeader'
const Post = () => {
   return (
      <>
         <PostHeader />
         <PostDetails />
         <div className='post-img'>
            <Icon src="/images/postimage.jpg" />
         </div>
         <LikesAndComments />
      </>
   )
}

export default Post