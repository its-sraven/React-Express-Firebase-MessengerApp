import React from 'react'
import { SearchIcon } from '../assets/SvgIcons'

const MsgrSearch = () => {
    return (
        <>
            <div className='flex justify-center'>
                <button className='flex bg-gray-700 pr-16 pl-6 place-items-center justify-start rounded-full space-x-4'>
                    <div
                        className='w-5 px-2'>
                        <SearchIcon width={5} />
                    </div>
                    <input
                        type="text"
                        placeholder='Search messages'
                        className='w-full py-2 outline-none text-md bg-gray-700 text-white'
                    />
                </button>
            </div>
        </>
    )
}

export default MsgrSearch