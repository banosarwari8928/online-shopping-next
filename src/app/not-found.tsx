"use client"
import Image from 'next/image'
import React from 'react'
import { APP_NAME } from '../lib/constants'
import { Button } from '@/components/ui/button'

function notfound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center '>
        <Image  src={""} alt={`${APP_NAME} `}/>
        <div className="p-6 text-center shadow-sm">
            <h1 className='text-3xl font-bold'>Not Found...</h1>
            {/* <Button variant={'outline'} onClick={()=> (window.location}> */}
                Back to Home
            {/* </Button> */}
        </div>
    </div>
  )
}

export default notfound