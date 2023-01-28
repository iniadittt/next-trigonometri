import React from 'react'
import Navigasi from '../components/Navigasi'
import Menu from '../components/Menu'
import CardMenu from '../components/CardMenu'
import CardQuestion from '../components/CardQuestion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomNavigasi from '../components/BottomNavigasi'

const Index = () => {

    return (
        <div className='bg-[#F2F5FA]'>
            <BottomNavigasi/>
            <Navigasi/>
            <div className='lg:w-full lg:h-auto lg:pt-16 pt-16'>
                <Header title='Belajar Matematika Itu Menyenangkan' subTitle='Website pembelajaran mengenal konsep Trigonometri untuk siswa SMA/SMK.' urlImage='/assets/images/6472096.png'/>
                <Menu/>
                <div className='lg:w-full lg:h-auto lg:px-24 lg:mt-10 px-4'>
                    <div className='lg:w-[1080px] lg:h-full lg:mx-auto lg:flex lg:flex-col lg:gap-7 flex flex-col gap-3'>
                        <h1 className='lg:font-poppins lg:text-2xl lg:font-semibold font-poppins text-2xl font-semibold'>Materi Pembelajaran</h1>
                        <CardMenu/>
                    </div>
                </div>
                <CardQuestion/>
            </div>
            <Footer/>
        </div>
    )      
}

export default Index