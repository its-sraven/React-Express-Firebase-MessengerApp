import React from 'react'

const MsgrConversationList = () => {
    return (
        <>
            <div className="flex gap-4 p-2 py-3 bg-gray-800 mt-2">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&"
                    className="shrink-0 my-auto w-12 aspect-square"
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <div className="justify-center text-white font-medium">
                            Sunny
                        </div>
                        <div className="flex text-xs text-slate-500 justify-center items-center">12 mins ago</div>
                    </div>
                    <div className="mt-1 text-slate-500 text-xs">
                        We want to invite you for a quite...
                    </div>
                </div>
            </div>
            <div className='border border-gray-600 px-4'></div>
            <div className="flex gap-4 p-2 py-3 bg-gray-800 mt-2">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2bba3b05eaa3bcf5203b333ccd5cf2a9a6b35d502991a973a4e23e766eb6b1c?apiKey=16680db6438f448395b4700ca672eb14&"
                    className="shrink-0 my-auto w-12 aspect-square"
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <div className="justify-center text-white font-medium">
                            Albert 
                        </div>
                        <div className="flex text-xs text-slate-500 justify-center items-center">24  mins ago</div>
                    </div>
                    <div className="mt-1 text-slate-500 text-xs">
                        Long time no see mate, i was wo...
                    </div>
                </div>
            </div>
            <div className='border border-gray-600 px-4'></div>

        </>
    )
}

export default MsgrConversationList