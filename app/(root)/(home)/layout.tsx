import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "BestZoom",
  description: "Video Calling App From Best Choice Tech",
  icons: '/icons/logo.svg'
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative pt-0 mt-0">
      <Navbar />

      <div className="flex pt-12">
        <Sidebar />
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout