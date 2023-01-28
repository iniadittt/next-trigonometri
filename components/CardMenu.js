import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const dataMenu = [
    'Trigonometri',
    'Phytagoras',
    'Aturan Sinus',
    'Aturan Cosinus',
    'Latihan Soal'
]

const dataNavigasi = [
    'trigonometri',
    'phytagoras',
    'sinus',
    'cosinus',
    'latihan'
]

const CardMenu = () => {
    return (
        <div className='lg:w-full lg:flex lg:flex-row lg:gap-5 flex flex-col gap-4 font-poppins'>
            {
                dataMenu.map((element, index) => {
                    return <div key={element} className='lg:1/4 lg:h-auto lg:relative lg:shadow-lg lg:rounded-2xl rounded-2xl shadow-lg relative'>
                        <div className='lg:absolute lg:px-4 lg:py-5 absolute px-4 py-5'>
                            <p className='lg:bg-blue-600 lg:inline-block lg:py-1 lg:px-3 lg:text-[11px] lg:font-semibold lg:rounded-2xl lg:text-white py-2 px-5 bg-blue-600 inline-block rounded-2xl font-semibold text-sm text-white'>Pemaparan Materi</p>
                            <p className='lg:px-2 lg:py-4 lg:text-md lg:text-[#222] lg:font-semibold lg:text-[16px] px-2 py-4 text-[#222] font-semibold text-3xl leading-snug'>Belajar materi {element} dengan materi lengkap dan latihan soal.</p>
                        </div>
                        <Image src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='400' height='420' preserveAspectRatio='none' viewBox='0 0 400 420'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3114%26quot%3b)' fill='none'%3e%3crect width='400' height='420' x='0' y='0' fill='url(%23SvgjsRadialGradient3115)'%3e%3c/rect%3e%3cpath d='M23.24 208.51 a120.13 120.13 0 1 0 240.26 0 a120.13 120.13 0 1 0 -240.26 0z' fill='rgba(217%2c 238%2c 255%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-36.01 398.36 a77.1 77.1 0 1 0 154.2 0 a77.1 77.1 0 1 0 -154.2 0z' fill='rgba(217%2c 238%2c 255%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M51.56 101.39 a69.8 69.8 0 1 0 139.6 0 a69.8 69.8 0 1 0 -139.6 0z' fill='rgba(217%2c 238%2c 255%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M188.94 324.9 a122.23 122.23 0 1 0 244.46 0 a122.23 122.23 0 1 0 -244.46 0z' fill='rgba(217%2c 238%2c 255%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3114'%3e%3crect width='400' height='420' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='0%25' cy='0%25' r='580' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient3115'%3e%3cstop stop-color='rgba(85%2c 129%2c 174%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(177%2c 182%2c 193%2c 1)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e" alt='Card Menu' width={300} height={360} className='lg:rounded-2xl rounded-2xl w-full'/>
                        <div className='lg:w-full lg:h-auto lg:-mt-6 lg:relative lg:z-10 lg:bg-white lg:rounded-2xl lg:p-4 lg:flex lg:flex-col lg:justify-between bg-white -mt-10 relative z-10 rounded-2xl p-4 shadow-sm flex flex-col gap-2'>
                            <h1 className='lg:font-semibold lg:mb-3 font-semibold text-xl'>{element}</h1>
                            {/* <p className='lg:mb-4 lg:mt-2 lg:text-sm lg:text-[13px] text-sm text-[#222]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate sapiente dolore in, quae ut distinctio!</p> */}
                            <Link href={dataNavigasi[index]} className='lg:w-full lg:py-2 lg:bg-[#F26D0F] lg:hover:bg-[#b9560f] lg:duration-300 lg:hover:duration-300 lg:text-sm lg:rounded-2xl lg:text-white lg:font-semibold lg:text-center w-full py-2 bg-[#F26D0F] font-semibold text-white text-center rounded-2xl hover:bg-[#b9560f] duration-300 hover:duration-300'>Lihat Detail</Link>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default CardMenu