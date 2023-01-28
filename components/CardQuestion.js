import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CardQuestion = () => {
    return (
        <div className='lg:w-full lg:my-20 lg:px-0 my-10 px-4 font-poppins'>
            <div className='lg:w-[1080px] lg:h-auto lg:mx-auto lg:relative lg:rounded-2xl h-24 relative rounded-3xl'>
                <div className='lg:absolute lg:w-full lg:h-full lg:flex lg:justify-center lg:px-48 absolute w-full h-full flex justify-center px-4 gap-3'>
                    <div className='lg:w-2/3 lg:flex lg:flex-col lg:justify-center lg:gap-2 w-3/5 flex flex-col justify-center'>
                        <p className='lg:text-sm lg:text-white text-sm text-white font-semibold'>Masih punya pertanyaan?</p>
                        <p className='lg:text-2xl lg:font-semibold lg:text-white text-white font-semibold text-sm'>Tanyakan via chat ke Konsultan Pendidikan</p>
                    </div>
                    <div className='lg:w-1/3 my-auto w-2/5'>
                        <Link href='/question' className='lg:px-8 lg:py-4 lg:bg-white lg:text-lg lg:font-semibold lg:text-[#222] lg:rounded-full bg-white p-1 text-sm rounded-full shadow-md font-semibold'>Chat Pemateri</Link>
                    </div>
                </div>
                <Image src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1080' height='180' preserveAspectRatio='none' viewBox='0 0 1080 180'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3953%26quot%3b)' fill='none'%3e%3crect width='1080' height='180' x='0' y='0' fill='url(%23SvgjsRadialGradient3954)'%3e%3c/rect%3e%3cpath d='M473.32 157.57 a44 44 0 1 0 88 0 a44 44 0 1 0 -88 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M3.05 27.89 a51.21 51.21 0 1 0 102.42 0 a51.21 51.21 0 1 0 -102.42 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M713.34 127.68 a47.98 47.98 0 1 0 95.96 0 a47.98 47.98 0 1 0 -95.96 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M334.69 127.93 a32.91 32.91 0 1 0 65.82 0 a32.91 32.91 0 1 0 -65.82 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M574.66 36.44 a53.92 53.92 0 1 0 107.84 0 a53.92 53.92 0 1 0 -107.84 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M476.21 96.31 a51.38 51.38 0 1 0 102.76 0 a51.38 51.38 0 1 0 -102.76 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M985.85 135.49 a51.95 51.95 0 1 0 103.9 0 a51.95 51.95 0 1 0 -103.9 0z' fill='rgba(158%2c 178%2c 198%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3953'%3e%3crect width='1080' height='180' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='0%25' cy='0%25' r='1094.9' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient3954'%3e%3cstop stop-color='rgba(16%2c 67%2c 112%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(123%2c 160%2c 227%2c 1)' offset='0.98'%3e%3c/stop%3e%3cstop stop-color='rgba(123%2c 160%2c 227%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e" alt='Background Question' width={1080} height={180} className='lg:mx-auto lg:rounded-3xl lg:h-auto h-full rounded-2xl'/>
            </div>
        </div>
    )
}

export default CardQuestion