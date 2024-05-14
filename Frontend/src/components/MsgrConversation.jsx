import React, { useRef, useEffect } from 'react';

const MsgrConversation = () => {

    const chatEndRef = useRef(null);

    // Scroll to the bottom of the chat window whenever the component updates
    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    })

    return (
        <>
            <div className='h-[calc(100vh-190px)] px-4 overflow-y-auto touch-pan-y'>
                <div className="flex flex-col text-lg tracking-wide leading-7 text-slate-800">
                    <div className="flex gap-5 pr-20 max-md:flex-wrap max-md:pr-5 mt-80">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c1c4d2618c32e2c78c950b03030cd6dd2584fe8fa066715cf6359f8c87b68fa?apiKey=16680db6438f448395b4700ca672eb14&"
                            className="shrink-0 self-end mt-10 w-10 aspect-square max-md:mt-10"
                        />
                        <div className="flex flex-col">
                            <div className="justify-center px-5 py-2 text-sm bg-sky-800 text-white rounded-[32px_32px_32px_4px]">
                                Applied for Software Engineer Role?
                            </div>
                            <div className="justify-center text-sm px-5 py-2 mt-1 bg-sky-800 text-white rounded-[4px_32px_32px_32px]">
                                Up for an interview?
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end pl-20 text-sm mt-5 w-full max-md:pl-5 max-md:max-w-full">
                        <div className="justify-center px-5 py-2 bg-blue-700 text-white rounded-[32px_32px_4px_32px]">
                            Yes I have applied.
                        </div>
                        <div
                            ref={chatEndRef}
                            className="justify-center px-5 py-2 mt-1 text-sm bg-blue-700 text-white rounded-[32px_4px_32px_32px]">
                            Sure i am available 11Am Monday!
                        </div>
                        <span className='text-xs text-gray-400 pr-2 mt-1'>Seen now o 11:46 PM</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MsgrConversation