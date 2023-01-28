import React from 'react'
import Navigasi from '../components/Navigasi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import BottomNavigasi from '../components/BottomNavigasi'

const Sinus = () => {
  return (
    <div className='lg:bg-[#F2F5FA] bg-[#F2F5FA]'>
            <Navigasi/>
            <BottomNavigasi/>
            <div className='lg:w-full lg:h-auto lg:pt-16 pt-16'>
                <Header title='Aturan Sinus' subTitle='Belajar Trigonometri Untuk Siswa/i SMA/SMK' urlImage='/assets/images/74081.png'/>
                <div className='lg:w-full lg:h-auto font-poppins p-5'>
                    <div className='lg:w-[1080px] lg:mx-auto bg-white rounded-2xl lg:-mt-10 lg:z-10 lg:py-8 lg:px-10 lg:mb-8 lg:flex lg:flex-col lg:gap-6 shadow-xl p-5 -mt-44 relative z-10'>
                        <div className='lg:flex lg:flex-col lg:gap-3'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Pengertian Aturan Sinus</h1>
                            <p className='lg:text-md text-[#222] leading-relaxed'>Aturan sinus merupakan hubungan antara besar sudut dan panjang sisi yang berlawanan. Rumus aturan sinus dapat digunakan untuk menentukan panjang sisi atau besar sudut suatu segitiga. Namun aturan sinus hanya dapat digunakan ketika terdapat informasi sudut dan sisi yang berhadapan serta sudut/sisi lain yang berhadapan.</p>
                        </div>
                        <div className='my-7'>
                            <h1 className='lg:text-3xl text-[#222] font-semibold text-2xl mb-4 my-2'>Rumus Aturan Sinus</h1>
                            <div className='lg:flex lg:flex-row lg:gap-10 lg:mb-4'>
                                <div className='lg:w-3/5 lg:flex lg:flex-col lg:gap-4 flex flex-col gap-7'>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>Misalkan sebuah segitiga ABC memiliki tiga panjang sisi yaitu satuan a , b , dan c . Dan besar ketiga sudut segitiga ABC adalah α, β, dan γ. Rumus aturan sinus pada segitiga ABC memenuhi tiga persamaan berikut.</p>
                                    <Image src='/assets/images/aturan-sinus.png' alt='Sinus' width={600} height={600} className='lg:w-1/3 lg:hidden h-96'/>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>
                                        <span className='font-bold'>Contoh :</span><br/>
                                        Panjang segitiga PQR, panjang sisi QR = 8 cm, ∠P = 45 o  dan ∠R = 45 o.<br/>
                                        Panjang sisi PQ adalah...
                                    </p>
                                    <p className='lg:text-md text-[#222] leading-relaxed'>
                                        <span className='font-bold'>Pembahasan :</span><br/>
                                        Dari keterangan yang diberikan pada soal dapat diperoleh informasi seperti yang
                                        termuat dalam gambar di bawah.<br/>
                                        Ada dua sudut segitiga PQR dan satu panjang sisi segitiga yang diketahui.<br/>
                                        Panjang sisi segitiga lainnya yang belum diketahui dapat dihitung menggunakan aturan sinus seperti cara berikut.<br/>
                                        Menghitung panjang PQ :<br/>
                                    </p>
                                </div>
                                <Image src='/assets/images/aturan-sinus.png' alt='Phytagotas' width={600} height={600} className='lg:w-2/5 lg:block hidden'/>
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-row lg:gap-7'>
                            <Image src='/assets/images/jawaban-sinus1.png' alt='Jawaban Sinus' width={300} height={300} className='lg:w-1/4 lg:h-96'/>
                            <div className='lg:w-3/4 lg:mb-4 flex flex-col gap-7'>
                                <p className='lg:text-md text-[#222] leading-relaxed'>
                                    Ada dua sudut segitiga PQR dan satu panjang sisi segitiga yang diketahui. Panjang
                                    sisi segitiga lainnya yang belum diketahui dapat dihitung menggunakan aturan sinus
                                    seperti cara berikut.<br/>
                                    Menghitung panjang PQ :<br/>
                                </p>
                                <Image src='/assets/images/jawaban-sinus2.png' alt='Jawaban Sinus' width={300} height={300} className='lg:w-1/4 lg:mx-auto'/>
                                <p className='lg:text-md text-[#222] leading-relaxed'>Jadi, panjang sisi PQ = 4√6 cm.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
  )
}

export default Sinus