import React,{useState} from 'react'
import {BookMarkIcon, ExploverIcon, HomeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, ProfilIcon} from "../icons/icon"
import twitterLogo from "..//images/twiter.svg"
import SideLink from '../components/SideLink.js'
import UserBox from '../components/UserBox'

const sideLinks=[
    {
        name:'Home',
        icon: HomeIcon,
    },
    {
        name:'Explore',
        icon:ExploverIcon,
    },
    {
        name:'Notification',
        icon: NotificationIcon,
    },
    {
        name:'Messages',
        icon: MessageIcon,
    },
    {
        name:'Bookmarks',
        icon: BookMarkIcon,
    },
    {
        name:'Lists',
        icon: ListIcon
    },
    {
        name:'Profile',
        icon: ProfilIcon,
    },
    {
        name:'More',
        icon: MoreIcon,
    },
    

]

const Sidebar = () => {
    const [active, setActive]=useState("Home");

    const handMenuItemClick =(name)=>{
        setActive(name)
    }
    return (
        <div className="sticky h-screen top-0 flex flex-col justify-between w-72 bg-gray-100 px-2">
            <div>
                <div className="mt-1 mb-4 flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-200 hover:bg-gray-lightest">
                <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9"/>
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(({name,icon})=>(
                            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handMenuItemClick}/>
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg transform transition-colors duration-200 rounded-full px-8 py-3 w-11/12">Tweet</button>
            </div>

            <div>
                <UserBox/>
            </div>
            
        </div>
    )
}

export default Sidebar
