import React from 'react'
import Navigasi from '../components/Navigasi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import BottomNavigasi from '../components/BottomNavigasi'

const Cosinus = () => {
  return (
    <div className='lg:bg-[#F2F5FA] bg-[#F2F5FA]'>
            <Navigasi/>
            <BottomNavigasi/>
            <div className='lg:w-full lg:h-auto lg:pt-16 pt-16'>
                <Header title='Aturan Cosinus' subTitle='Belajar Trigonometri Untuk Siswa/i SMA/SMK' urlImage='/assets/images/63337651.png'/>
                <div className='lg:w-full lg:h-auto font-poppins p-5'>
                    <div className='lg:w-[1080px] lg:mx-auto bg-white rounded-2xl lg:-mt-10 lg:z-10 lg:py-8 lg:px-10 lg:mb-8 lg:flex lg:flex-col lg:gap-6 shadow-xl p-5 -mt-48 relative z-10'>
                        <div className='lg:flex lg:flex-col lg:gap-3'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Pengertian Aturan Cosinus</h1>
                            <p className='lg:text-md text-[#222] leading-relaxed'>Aturan cosinus adalah rumus yang dapat digunakan untuk menghitung panjang sisi atau besar sudut yang belum diketahui pada suatu segitiga. Rumus aturan cosinus digunakan apabila pada suatu segitiga terdapat dua panjang sisi yang diketahui dan besar sebuah sudut yang diapit kedua sisi tersebut. Panjang sisi yang berhadapan dengan sudut apit dapat ditentukan panjangnya dengan aturan cosinus.</p>
                        </div>
                        <div className='my-7'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Rumus Aturan Cosinus</h1>
                            <div className='lg:flex lg:flex-row lg:gap-10 lg:mb-4'>
                                <div className='lg:w-3/5 lg:flex lg:flex-col lg:gap-4 flex flex-col gap-7'>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Misalkan sebuah segitiga ABC memiliki tiga panjang sisi yaitu satuan a , b , dan c . Dan besar ketiga sudut segitiga ABC adalah α, β, dan γ. Rumus aturan cosinus pada Segitiga ABC memenuhi tiga persamaan berikut.</p>
                                    <Image src='/assets/images/aturan-cosinus.png' alt='Cosinus' width={600} height={600} className='lg:w-1/3 lg:hidden'/>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>
                                        <span className='font-bold'>Contoh :</span><br/>
                                        Dua kapal A dan B meninggalkan pelabuhan P bersama-sama. Kapal A boat dengan arah 30o dan kecepatan 30 km/jam, sedangkan kapal B boat dengan arah 90o dan kecepatan 45 km/jam. Jika kedua kapal kapal selama 2 jam, maka jarak kedua kapal
                                        tersebut adalah...
                                    </p>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>
                                        <span className='font-bold'>Pembahasan :</span><br/>
                                        Dari keterangan pada soal dapat diperoleh informasi bahwa kecepatan kapal A adalah
                                        vA = 30 km/jam dan kecepatan kapal B adalah v B = 45 km/jam. Peringatan bahwa
                                        kedua kapal telah berlayar selama t = 2 jam. Sehingga jarak yang ditempuh kedua
                                        kapal dapat dihitung seperti cara berikut.<br/>
                                    </p>
                                    <p className='mx-5'>
                                        <span className='list-item'>Jarak yang ditempuh kapal A (SA):</span><br/>
                                        S A  = v A × t<br/>
                                        S A  = 30  × 2 = 60 km<br/><br/>
                                        <span className='list-item'>Jarak yang ditempuh kapal B (SB) : S B  = v B × t S B  = 45 × 2 = 90 km</span><br/>
                                    </p>
                                    <p>
                                        Kapal A bergerak pada arah 30o dan kapal B bergerak pada arah 90o  dari
                                    pelabuhan. Gambar yang sesuai dengan kondisi-pernyataan pada hal yang ditunjukkan
                                    seperti berikut.
                                    </p>
                                </div>
                                <Image src='/assets/images/aturan-cosinus.png' alt='Phytagotas' width={600} height={600} className='lg:w-2/5 lg:block hidden h-96'/>
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-row lg:gap-7'>
                            <Image src='/assets/images/jawaban-cosinus1.jpg' alt='Jawaban Cosinus' width={300} height={300} className='lg:w-2/4 lg:h-64'/>
                            <div className='lg:w-3/4 lg:mb-4 flex flex-col gap-7'>
                                <p className='lg:text-md text-[#222] leading-relaxed'>
                                Menghitung jarak antara kapal A dan kapal B:<br/>
                                AB 2  = PA 2  + PB 2  ‒ 2 × PA × PB × cos ∠APB<br/>
                                AB 2  = 60 2  + 90 2  ‒ 2 × 60 × 90 × cos 60 o<br/>
                                AB 2  = 3.600  + 8.100 ‒ 2 × 5.400 × ½<br/>
                                AB 2  = 3.600  + 8.100 ‒ 5.400<br/>
                                AB 2  = 6.300<br/>
                                AB = √6.300 = √(900×6) = √900 × √7 = 30√7 km<br/>
                                </p>
                                <p className='lg:text-md text-[#222] leading-relaxed'>Jadi, jarak terdekat dari pelabuhan A ke C adalah 30√7 km.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
  )
}

export default Cosinus