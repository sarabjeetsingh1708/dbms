import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import './SignUppage.css'

export const SignUppage = () => {
  return (
    <div className='SignUpPage'><SignUp path="/sign-up" signInUrl="sign-in"/></div>
  )
}
