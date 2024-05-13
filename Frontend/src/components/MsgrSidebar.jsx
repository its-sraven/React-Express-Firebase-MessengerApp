import React from 'react'
import MsgrConversationList from './MsgrConversationList'
import MsgrSideHeader from './MsgrSideHeader'
import MsgrSearch from './MsgrSearch'


const MsgrSidebar = () => {
    return (
        <div className='bg-gray-800 font-normal h-screen py-2'>
            <div><MsgrSideHeader/></div>
            <div><MsgrSearch /></div>
            <div className='px-3'><MsgrConversationList /></div>
        </div>
    )
}

export default MsgrSidebar