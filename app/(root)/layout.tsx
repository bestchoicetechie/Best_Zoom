import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "BestZoom",
  description: "Video Calling App From Best Choice Tech",
  icons: '/icons/logo.svg'
};

const RootLayout = ({ children }: { children: ReactNode  }) => {
  return (
   <main>
        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
        
        Footer
   </main> 
  )
}

export default RootLayout