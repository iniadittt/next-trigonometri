import React from 'react'
import Image from 'next/image'



const dataTeam = [
    {nama: 'Aditya ', posisi: 'Fullstack Web Developer'},
    {nama: 'Bayu', posisi: 'Frontend Web Developer'},
    {nama: 'Aji', posisi: 'Backend Web Developer'},
    {nama: 'Aditya ', posisi: 'Fullstack Web Developer'},
    {nama: 'Bayu', posisi: 'Frontend Web Developer'},
    {nama: 'Aji', posisi: 'Backend Web Developer'},
]


const CardTeam = () => {
    return (
        <div className='lg:flex lg:gap-6 lg:justify-center lg:flex-wrap font-poppins'>
            {
                dataTeam.map((element, index) => {
                    return <div key={index} className='lg:w-1/4'>
                        <Image src='/assets/images/person.png' alt={element.nama} width={140} height={140} className='lg:mx-auto'/>
                        <div className='lg:bg-white lg:rounded-3xl lg:py-4 lg:px-5 lg:flex lg:flex-col lg:gap-2'>
                            <h1 className='lg:text-xl lg:font-semibold lg:text-center'>{element.nama}</h1>
                            <p className='lg:font-medium lg:text-center'>{element.posisi}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default CardTeam