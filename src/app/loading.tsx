import React from 'react'
import loader from "./assets/loader.gif"
import Image from 'next/image'
function loading() {
  return (
    <div className='flex h-screen w-full items-center text-center justify-center'>
        <Image src={loader} alt="lodaing" height={100} width={100} />
    </div>
  )
}

export default loading