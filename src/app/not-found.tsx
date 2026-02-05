"use client"
import Image from 'next/image'
import React from 'react'
import { APP_NAME } from '../lib/constants'
import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'

function notfound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center rounded-md '>
        <Image  src={"/images/not-found.jpg"} alt={`${APP_NAME}`} width={100} height={100}/>
        <div className="p-6 text-center shadow-sm">
            <h1 className='text-2xl font-semibold'>Not Found...</h1>
            <p>Could not found the page you requested</p>
            <Button 
            variant={'outline'} 
            onClick={()=> (window.location.href="/")}>
           <i> Back To Home</i>
          </Button> 
        </div>
    </div>
  )
}

export default notfound