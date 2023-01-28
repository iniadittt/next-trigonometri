import React, { useState } from 'react'
import Navigasi from '../components/Navigasi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import BottomNavigasi from '../components/BottomNavigasi'

const Phytagoras = () => {

    const [pembahasan, setPembahasan] = useState('hidden')

    const handlerPembahasan = (e) => {
        e.preventDefault()
        if(pembahasan === 'hidden'){
            setPembahasan('block')
        }else{
            setPembahasan('hidden')
        }
    }

    return (
        <div className='lg:bg-[#F2F5FA] bg-[#F2F5FA]'>
            <Navigasi/>
            <BottomNavigasi/>
            <div className='lg:w-full lg:h-auto lg:pt-16 pt-16'>
                <Header title='Phytagoras' subTitle='Belajar Trigonometri Untuk Siswa/i SMA/SMK' urlImage='/assets/images/54376831.png'/>
                <div className='lg:w-full lg:h-auto font-poppins p-5'>
                    <div className='lg:w-[1080px] lg:mx-auto bg-white rounded-2xl lg:-mt-10 lg:z-10 lg:py-8 lg:px-10 lg:mb-8 lg:flex lg:flex-col lg:gap-6 shadow-xl p-5 -mt-24 relative z-10'>
                        <div className='lg:flex lg:flex-col lg:gap-3'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Pengertian Phytagoras</h1>
                            <p className='lg:text-md text-[#222] leading-relaxed'>Pythagoras berasal dari nama seorang filsuf dan ilmuan matematika yang berasal dari Yunani kuno pada masa 570-495 SM di kepulauan samos. Sebenarnya teorema ini telah dikenal jauh sebelum Pythagoras, misalnya di Mesir Kuno lewat tali 3-4-5 yang dipergunakan untuk menentukan sudut siku-siku, namun pemberian nama Pythagoras karena Pythagoras yang membawa pengetahuan ini ke peradaban Yunani kuno serta telah membuktikannya secara sistematis (atau pengikutnya yang mengatas namakan Pythagoras). </p>
                            <p className='lg:hidden block'>&nbsp;</p>
                            <p className='lg:text-md text-[#222] leading-relaxed'>Teorema Pythagoras menjelaskan hubungan atau relasi antara panjang sisi-sisi pada segitiga siku-siku. Dalil dari teorema Pythagoras berbunyi “kuadrat panjang hipotenusa (sisi miring) pada suatu segitiga siku-siku sama dengan jumlah kuadrat panjang sisi-sisi yang lainnya”.</p>
                        </div>
                        <div className='my-5'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Skema Pembuktian Dari Euclid </h1>
                            <div className='lg:flex lg:flex-row lg:gap-10 lg:mb-4'>
                                <div className='lg:w-3/5 lg:flex lg:flex-col lg:gap-4 flex flex-col gap-7'>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Pandang segitiga siku-siku ABC, dengan C sudut siku-siku. Tarik garis dari titik C sejajar AP atau BQ sehingga memotong AB di D dan PQ di E, maka jika BC = a dan AC = b dapat ditunjukkan bahwa:</p>
                                    <Image src='/assets/images/pic2.png' alt='Phytagotas' width={600} height={600} className='lg:w-1/3 lg:hidden'/>
                                    <p className='lg:text-md text-[#222] leading-relaxed font-bold'>Luas BDEQ =a^2  dan Luas ADEP = b^2</p>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Apa yang menarik dari pembuktian Pyhagoras tersebut?  
                                    Ternyata kita dapat menentukan dua “partisi” persegi berbentuk persegi panjang pada hipotenusa, yang masing-masing luasnya sama dengan luas persegi pada sisi-sisi penyiku dari segitiga siku-siku yang diberikan.<br/><br/>
                                    Jika kita dapat membuktikan bahwa luas BDEQ = a^2 dan luas ADEP = b^2 maka diperoleh 
                                    a^2+ b^2<br/>
                                    = luas BDEQ + luas ADEP<br/>
                                    = luas ABQP<br/>
                                    = c^2<br/>
                                    </p>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>
                                    <span className='font-bold'>Keterangan :</span><br/>
                                    c 	: adalah hipotenusa atau sisi miring (sisi yang berhadapan sudut siku-siku)<br/>
                                    a dan b : adalah sisi-sisi tegak segitiga siku-siku<br/>
                                    </p>
                                </div>
                                <Image src='/assets/images/pic2.png' alt='Phytagotas' width={600} height={600} className='lg:w-1/3 lg:block hidden lg:h-96'/>
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-col lg:gap-3'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Contoh Soal</h1>
                            <div className='lg:flex lg:flex-row lg:gap-4'>
                                <div className='lg:w-1/3'>
                                    <Image src='/assets/images/contoh-phytagoras.png' alt='Contoh Soal Phytagoras' width={300} height={300} className='lg:h-64'/>
                                </div>
                                <div className='lg:w-2/3'>
                                    <button className='bg-[#5682AE] lg:px-8 mb-7 font-semibold rounded-full shadow-xl text-white w-full py-3' onClick={e => handlerPembahasan(e)}>Lihat Pembahasan</button>
                                    <Image src='/assets/images/penyelesaian-phytagoras.png' alt='Penyelesaian Phytagoras' width={700} height={700} className={pembahasan}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Phytagoras