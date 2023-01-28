import React from 'react'
import Navigasi from '../components/Navigasi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import BottomNavigasi from '../components/BottomNavigasi'

const Trigonometri = () => {
    return (
        <div className='lg:bg-[#F2F5FA] bg-[#F2F5FA]'>
            <Navigasi/>
            <BottomNavigasi/>
            <div className='lg:w-full lg:h-auto lg:pt-16 pt-16'>
                <Header title='Trigonometri' subTitle='Belajar Trigonometri Untuk Siswa/i SMA/SMK' urlImage='/assets/images/bg-trigonometri.png'/>
                <div className='lg:w-full lg:h-auto font-poppins p-5'>
                    <div className='lg:w-[1080px] lg:mx-auto bg-white rounded-2xl lg:-mt-10 lg:z-10 lg:py-8 lg:px-10 lg:mb-8 lg:flex lg:flex-col lg:gap-6 shadow-xl p-5 -mt-48 relative z-10'>
                        <div className='lg:flex lg:flex-col lg:gap-3'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Pengertian Trigonometri</h1>
                            <p className='lg:text-md text-[#222] leading-relaxed'>Trigonometri (dari bahasa Yunani trigonon = &quot;tiga sudut&quot; dan metron = &quot;mengukur&quot;)[1] adalah sebuah cabang matematika yang mempelajari hubungan yang meliputi panjang dan sudut segitiga. Bidang ini muncul di masa Helenistik pada abad ke-3 SM dari penggunaan geometri untuk mempelajari astronomi.</p>
                            <p className='lg:hidden block'>&nbsp;</p>
                            <p className='lg:text-md text-[#222] leading-relaxed'>Trigonometri mudah dikaitkan dalam bidang segitiga siku-siku (dengan hasil jumlah besar kedua sudut lancip sama dengan besar sudut siku-siku). Peranan untuk selain segitiga siku-siku juga ada. Sejak segitiga yang bukan siku-siku dapat dibagi menjadi dua segitiga siku-siku, banyak masalah yang dapat diatasi dengan penghitungan segitiga siku-siku. Karena itu, sebagian besar penggunaan trigonometri berhubungan dengan segitiga siku-siku.</p>
                        </div>
                        <div className='my-10'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Definisi Dasar</h1>
                            <div className='lg:flex lg:flex-row lg:gap-10 lg:mb-4'>
                                <div className='lg:w-3/5 lg:flex lg:flex-col lg:gap-4 flex flex-col gap-7'>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Fungsi trigonometri dapat didefinisikan melalui segitiga siku-siku, dimana ABC adalah segitiga siku-siku, a dan b adalah sisi-sisi segitiga beserta c adalah hipotenusa atau sisi miring segitiga. Misalkan A adalah sudut yang diketahui.</p>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Fungsi sin didefinisikan sebagai rasio sisi depan dengan hipotenusa.</p>
                                    <Image src='/assets/images/sin.svg' alt='Sinus' width={600} height={600} className='lg:w-1/3'/>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Fungsi cos didefinisikan sebagai rasio sisi samping dengan hipotenusa.</p>
                                    <Image src='/assets/images/cos.svg' alt='Sinus' width={600} height={600} className='lg:w-1/3'/>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Fungsi tan didefinisikan sebagai rasio sisi depan dengan sisi samping.</p>
                                    <Image src='/assets/images/tan.svg' alt='Sinus' width={600} height={600} className='lg:w-1/3'/>
                                </div>
                                <Image src='/assets/images/trigonometri2.png' alt='Trigonometri' width={1000} height={1000} className='lg:w-2/5'/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Trigonometri