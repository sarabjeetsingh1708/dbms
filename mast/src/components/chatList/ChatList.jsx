import React, { use, useRef } from 'react'
import './chatList.css'
import { Link } from 'react-router-dom'
import { useEffect} from 'react'


export const ChatList = () => {
    
  return (
    <div className='chatList'>
        <span className='title'>DASHBOARD</span>
        <Link to='/dashboard'>Craete a new chat</Link>
        <Link to='/'>Explore MAST AI</Link>
        <Link to='/'>Contact</Link>
        <hr />
        <div className="list">
            <Link to='/dashboard/chats/:id'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>  
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            <Link to='/'>My Chat Title</Link>
            
        </div>
        <hr />
        <div className="upgrade">
        <img src="/react.svg" alt="" />
        <div className="texts">
          <span>Upgrade to MAST AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}
