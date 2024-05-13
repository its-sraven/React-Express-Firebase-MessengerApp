import React from 'react'
import { SettingsIcon, MsgOptionsIcons } from '../assets/SvgIcons'

const MsgrSideHeader = () => {
  return (
    <div className='flex justify-between px-4 py-5 items-center'>
        <div className='text-xl text-white'>Messenger</div>
        <div className='flex space-x-2'>
            <SettingsIcon/>
            <MsgOptionsIcons/>
            </div>
    </div>
  )
}

export default MsgrSideHeader