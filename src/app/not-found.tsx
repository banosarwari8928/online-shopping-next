"use client"
import Image from 'next/image'
import React from 'react'
import { APP_NAME } from '../lib/constants'
import { Button } from '@/components/ui/button'

function notfound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center rounded-md '>
        <Image  src={"/images/logo.svg"} alt={`${APP_NAME}`} width={50} height={50}/>
        <div className="p-6 text-center shadow-sm">
            <h1 className='text-3xl font-bold'>Not Found...</h1>
            <p>Could not found the page you requested</p>
            <Button 
            variant={'outline'} 
            onClick={()=> (window.location.href="/")}>
                Back to Home 
          </Button> 
        </div>
    </div>
  )
}

export default notfound