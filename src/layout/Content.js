import React from 'react'
import TweetBox from '../components/TweetBox'
import { PopularIcon } from '../icons/icon'

const Content = () => {
    return (
        <main className="flex-1 bg-gray-100 flex-col border-r border-l border-gray">
           <header className="sticky top-0 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopularIcon className="w-6 h-6 text-primary-base"/>
           </header>
           <div className="flex space-x-4 px-4 py-3">
           <img src="https://pbs.twimg.com/profile_images/943222884973064193/_2u9vkvx_400x400.jpg" 
           alt="Profile"
           className="w-11 h-11 rounded-full"/>
            <TweetBox/>
                
           </div>
           <div>

           </div>
        </main>
    )
}

export default Content
