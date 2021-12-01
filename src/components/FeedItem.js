import React from 'react'

const FeedItem = ({displayName, username, content, avatar, timestamp, image}) => {
    return (
        <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
            <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full"/>
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold"> {displayName}</h4>
                    <span className="ml-2 text-gray-dark">{username}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"/>
                    <span className="text-gray-dark ">{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
                </div>
            </div>
            <p className="mt-2 text-gray-900 text-sm">{content}</p>
            {image && (
                <img src={image} className="my-2 rounded-xl max-h-96"/>
            )}
        </article>
    )
}

export default FeedItem
