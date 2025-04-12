import React, { useRef } from 'react'
import './chatPage.css'
import { useEffect } from 'react'
import { NewPrompt } from '../../components/newPrompt/NewPrompt';

export const Chatpage = () => {
  const endRef = useRef(null);
      useEffect(() => {
          endRef.current.scrollIntoView({ behavior: "smooth" });
      }, []);
  return (
    
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nulla saepe in sit ipsa cumque. Libero distinctio numquam ex animi beatae quisquam possimus doloribus impedit magnam doloremque quaerat, nisi ad.</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message">Test message from user</div>
          
          <NewPrompt/>
          <div ref={endRef}/>
        </div>
      </div>
    </div>
  )
}
