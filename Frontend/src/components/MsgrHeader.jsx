import React from 'react'
import { MsgOptionsIcons } from '../assets/SvgIcons'

const MsgrHeader = () => {
  return (
    <div className='bg-gray-800 py-3 px-5 flex justify-between items-center border-b-2 border-gray-700'>
      <div className='flex justify-start items-center gap-4'>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&"
          className="shrink-0 my-auto w-12 aspect-square"
        />
        <h1 className='text-xl text-white'>Sunny</h1>
      </div>
      <div><MsgOptionsIcons/></div>
    </div>
  )
}

export default MsgrHeader;