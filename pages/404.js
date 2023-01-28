import React, { useEffect } from 'react'
import Router from 'next/router'

const NotFound = () => {

  useEffect(() => {
    setTimeout(() => {
      Router.push('/')
    }, 3000)
  }, [])


  return (
    <div className='w-full h-screen flex flex-col justify-center font-poppins'>
      <h1 className='text-center text-9xl font-bold'>404</h1>
      <p className='text-center text-4xl font-semibold'>Page Not Found</p>
    </div>
  )
}

export default NotFound