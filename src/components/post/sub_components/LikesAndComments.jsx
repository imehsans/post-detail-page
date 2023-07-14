import React from 'react'
import Icon from '../../Icon'

const LikesAndComments = () => {
   return (
      <div>
         <div className='likes-section'>
            <div className='icon-with-conut'>
               <div className='icon-large'>
                  <Icon
                     src={'/images/love.png'} alt={'Like Img'}
                  />
               </div>
               <span>
                  5
               </span>
            </div>
            <div className='icon-with-conut'>
               <div className='icon-large'>
                  <Icon
                     src={'/images/comment.png'} alt={'Like Img'}
                  />
               </div>
               <span>
                  5
               </span>
            </div>
            <div className='icon-large'>
               <Icon
                  src={'/images/Save.png'} alt={'Like Img'}
               />
            </div>
            <div className='icon-large'>
               <Icon
                  src={'/images/three_dots.png'} alt={'Like Img'}
               />
            </div>
         </div>
         <div className='comment-section'>
            <div className="top-comment">
               <div className='comment-header-main'>
                  <div className="comment-header">
                     <div className='icon-larger'>
                        <Icon
                           src={'/images/profile.png'}
                           alt={'profile image'}
                        />
                     </div>
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
                  </div>
                  <div className='icon-large'>
                     <Icon
                        src={'/images/three_dots.png'} alt={'Like Img'}
                     />
                  </div>
               </div>

               <div className="top-coment-content">
                  <p className='post-content last-child'>
                     어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                     우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                     아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                     괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                     꼭 봐주세용~!
                  </p>
                  <div className='comment-btn'>
                     <div className='icon-with-conut'>
                        <div className='icon-large'>
                           <Icon
                              src={'/images/love.png'} alt={'Like Img'}
                           />
                        </div>
                        <span>
                           5
                        </span>
                     </div>
                     <div className='icon-with-conut'>
                        <div className='icon-large'>
                           <Icon
                              src={'/images/comment.png'} alt={'Like Img'}
                           />
                        </div>
                        <span>
                           5
                        </span>
                     </div>
                  </div>
                  <div>
                     <div className='comment-header-main'>
                        <div className="comment-header">
                           <div className='icon-larger'>
                              <Icon
                                 src={'/images/Comment-profile.png'}
                                 alt={'profile image'}
                              />
                           </div>
                           <div className='post_title'>
                              <h2>
                                 ㅇㅅㅇ
                              </h2>
                              <span className='post-time'>
                                 1일전
                              </span>
                           </div>
                        </div>
                        <div className='icon-large'>
                           <Icon
                              src={'/images/three_dots.png'} alt={'Like Img'}
                           />
                        </div>
                     </div>
                     <div className="top-coment-content">
                        <p className='post-content last-child'>
                           오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                        </p>
                        <div className='comment-btn'>
                           <div className='icon-with-conut'>
                              <div className='icon-large'>
                                 <Icon
                                    src={'/images/love.png'} alt={'Like Img'}
                                 />
                              </div>
                              <span>
                                 5
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div >
   )
}

export default LikesAndComments