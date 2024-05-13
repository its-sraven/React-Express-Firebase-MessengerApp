import React from 'react'
import { MsgSendIcon, MsgComposerLetfIcon, MsgEmojiIcon, MsgStickerIcon, MsgGifIcon, MsgAttachDoc } from '../assets/SvgIcons'

const MsgrComposer = () => {
    return (
        <div className='bg-gray-800 py-2 px-5 border-t-2 border-gray-700'>
            <div className='w-full py-3 rounded-full bg-gray-700 flex space-x-2 px-2 justify-start items-center shadow-lg'>
                <div><MsgEmojiIcon /></div>
                <div className='w-full'>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        className=' outline-none text-sm w-full bg-gray-700 text-white'
                        placeholder='Type a message...'
                    />
                </div>
                <div className='flex pr-1'>
                    <MsgSendIcon />
                </div>
            </div>
        </div>
    )
}

export default MsgrComposer