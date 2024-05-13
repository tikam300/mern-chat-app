import React from 'react'
import Conversation from './Conversation'
import useGetConvesations from '../../hooks/useGetConvesations'
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
   const {loading,conversations} = useGetConvesations();
   console.log("CONVERATIONS: ", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        
      {conversations.map((conversation,idx)=>(
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length-1 }
        />
      ))}

        {loading? <span className='loading loading-spinner mx-auto'></span>:null}
    </div>
  )
}

export default Conversations;

// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations