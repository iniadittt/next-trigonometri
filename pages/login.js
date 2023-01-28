import React, { useEffect } from 'react'
import Router from 'next/router'

const Login = () => {

  useEffect(() => {
    setTimeout(() => {
      Router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='w-full h-screen flex flex-col justify-center font-poppins'>
      <h1 className='text-center lg:text-7xl text-5xl font-bold'>Sedang Dalam Pengembangan</h1>
    </div>
  )
}

export default Login