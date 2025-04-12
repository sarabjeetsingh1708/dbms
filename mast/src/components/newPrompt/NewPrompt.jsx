import React from 'react'
import './newPrompt.css'

export const NewPrompt = () => {
  return (
    <div className="NewPrompt">
        <form  className="newForm">
            <label htmlFor="file">
            <img src="/attachment.png" alt="" />
            </label>
            <input type="file" id="file" multiple={false} hidden/>
            <input type="text" placeholder="Ask anything..." />
            <button>
                <img src="/arrow.png" alt="" />
            </button>
            

        </form>
    </div>
  )
}
