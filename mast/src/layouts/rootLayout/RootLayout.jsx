import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './RootLayout.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className='RootLayout'>
        <header>
          <Link to="/" className='logo'>
            <img src="/react.svg" alt="Logo" />
            <span>MAST AI</span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
            
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};
