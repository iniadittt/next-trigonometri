import React from 'react'
import Image from 'next/image'
import CardTeam from './CardTeam'

const Team = () => {
    return (
        <div className='lg:w-full lg:h-auto lg:-mt-4 lg:relative lg:flex lg:justify-center'>
            <div className='lg:absolute lg:pt-32 lg:w-[1080px] lg:flex lg:flex-col lg:gap-12'>
                <h1 className='lg:font-bold lg:text-[#222] lg:text-3xl lg:text-center'>Kenalan Dengan Para Team Pembuat Aplikasi</h1>
                <CardTeam/>
            </div>
            <Image src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1600' height='1080' preserveAspectRatio='none' viewBox='0 0 1600 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4281%26quot%3b)' fill='none'%3e%3cpath d='M288.47 91 a185.01 185.01 0 1 0 370.02 0 a185.01 185.01 0 1 0 -370.02 0z' fill='rgba(198%2c 202%2c 205%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M895.36 1046.01 a274.83 274.83 0 1 0 549.66 0 a274.83 274.83 0 1 0 -549.66 0z' fill='rgba(198%2c 202%2c 205%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M529.06 1056.35 a359.09 359.09 0 1 0 718.18 0 a359.09 359.09 0 1 0 -718.18 0z' fill='rgba(198%2c 202%2c 205%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M544.5 362.55 a229.34 229.34 0 1 0 458.68 0 a229.34 229.34 0 1 0 -458.68 0z' fill='rgba(198%2c 202%2c 205%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M29.6 542.04 a339.11 339.11 0 1 0 678.22 0 a339.11 339.11 0 1 0 -678.22 0z' fill='rgba(198%2c 202%2c 205%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4281'%3e%3crect width='1600' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e" alt='Background Team' width={1920} height={1080}/>
        </div>
    )
}

export default Team