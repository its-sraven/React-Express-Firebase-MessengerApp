import React from 'react'
import { SettingsIcon, MsgOptionsIcons } from '../assets/SvgIcons'

const MsgrSideHeader = () => {
  
  return (
    <div className='flex justify-between px-4 py-3 items-center'>
      <div className='text-xl text-white'>Messenger</div>
      <div className='flex space-x-2'>
        <div className='hover:bg-gray-700 p-2 rounded-full'><SettingsIcon /></div>
        <div className='hover:bg-gray-700 p-2 rounded-full'><MsgOptionsIcons /></div>
      </div>
    </div>
  )
}

export default MsgrSideHeader;