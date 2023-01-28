import React from 'react'

const dataMenu = [
    'Pemaparan Materi',
    'Bimbel Online Interaktif',
    'Video Pembelajaran',
    'Tanya Jawab',
    'Latihan Soal'
]

const Menu = () => {
    return (
        <div className='font-poppins lg:w-full lg:h-24 lg:relative lg:z-20 lg:-mt-8 lg:px-24 my-6'>
            <div className='lg:w-[1080px] lg:h-full lg:mx-auto lg:bg-white lg:rounded-3xl lg:p-3'>
                <ul className='lg:flex lg:flex-row lg:justify-between lg:h-full lg:gap-3 lg:px-0 flex flex-col gap-2 px-4'>
                    {
                        dataMenu.map(element => {
                            return <li key={element} className='lg:w-1/5 lg:h-full lg:rounded-2xl lg:border-[1px] lg:border-gray-300 lg:px-4 lg:py-3 lg:text-sm lg:font-medium w-full px-4 py-3 font-semibold text-sm bg-white shadow-sm rounded-2xl'>{element}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu