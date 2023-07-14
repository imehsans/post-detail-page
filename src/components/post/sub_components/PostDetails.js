/* eslint-disable array-callback-return */
import React from 'react'

const PostDetails = () => {
   const tags = [
      {
         id: 1,
         text: '2023',
      },
      {
         id: 2,
         text: 'todayismonday',
      },
      {
         id: 3,
         text: 'Top',
      },
      {
         id: 4,
         text: 'pops!',
      },
      {
         id: 5,
         text: 'wow',
      },
      {
         id: 6,
         text: 'row',
      }
   ]
   return (
      <div className='post-details-main'>
         <h2 className='question'>
            지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
         </h2>
         <p className='post-content'>
            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
            혹시 어떤 상품이 제일 괜찮았어?
         </p>
         <p className='post-content'>

            후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
            제일 재밌었다던데 맞아???
         </p>
         <p className='post-content last-child'>
            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
            아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
            있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
         </p>
         <div className='tags-main'>
            {
               tags?.map((item) => (
                  <div key={item.id} className='tags'>
                     <span className='tags-content'>#{item.text}</span>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default PostDetails