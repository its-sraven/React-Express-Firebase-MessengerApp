import React from 'react'
import MsgrConversationList from '../components/MsgrConversationList'
import MsgrHeader from '../components/MsgrHeader'
import MsgrSidebar from '../components/MsgrSidebar'
import MsgrConversation from '../components/MsgrConversation'
import MsgrSearch from '../components/MsgrSearch'
import MsgrComposer from '../components/MsgrComposer'

const Messenger = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[500px] border-r-2 border-gray-700'><MsgrSidebar /></div>
        <div className='w-full flex flex-col justify-between'>
          <div><MsgrHeader /> </div>
          <div><MsgrConversation /> </div>
          <div><MsgrComposer /> </div>
        </div>
      </div>
    </>
  )
}

export default Messenger