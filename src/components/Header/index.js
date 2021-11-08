import React from 'react'

import facebook from '../../assets/facebook.png'
import {FaSearch, FaFacebookMessenger, FaCaretDown} from 'react-icons/fa'
import { IoMdNotifications } from "react-icons/io";


export default function Header(){
    return(
        <div className='Header'>
            <div className='Header-left'>
                <div>
                    <img src={facebook} />
                </div>
                <div className='Header-facebook'>
                    <FaSearch />
                </div>
            </div>

            <div className='Header-right'>
                <div className='Header-messenger'>
                    <FaFacebookMessenger size={20} />
                </div>
                <div className='Header-notification'>
                    <IoMdNotifications size={23}/>
                </div>
                <div className='Header-options'>
                    <FaCaretDown size={23} />
                </div>
            </div>
        </div>
    )
}