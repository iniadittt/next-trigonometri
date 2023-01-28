import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const dataMateri = [
    'trigonometri',
    'phytagoras',
    'sinus',
    'cosinus',
    'latihan'
]

const Footer = () => {
    return (
        <div className='font-poppins lg:w-full lg:h-96 lg:bg-slate-800 lg:px-24 lg:pt-8 lg:py-8 bg-slate-800 pt-5 pb-16 px-4'>
            <div className='lg:w-[1080px] lg:h-full lg:mx-auto lg:flex lg:flex-col lg:justify-between flex flex-col gap-10'>
                <div className='lg:flex lg:flex-row lg:justify-between lg:gap-24 flex flex-col gap-6'>
                    <div className='lg:w-1/4'>
                        <Image alt='logo' width={120} height={120} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nO2YS07DMBBALSGFOwDHgJ4Bqa3Yliv0GqgSt2HRsuQjtSdpuQC0uy4ecmNEhNTYbsaZRPht7cz4xcmME2MymUzGB3AHvAM70rED3oCxSQHwSPvMUuyEFiNJEfs4afEqKbJVFPmSFFHFdBHgDLgEJsCytyJ/AabAXlREq09QysiIaPcJYHVsUuxOqPYJ4F5CRL1PUBaAxiLqfYKymjUWUcV41iElMgdugCI44G/cwl270BaZxy6+JseTpsi1Gx8CHycnKGMMNEUKN75plKCMca4mYqQStJWHLBJH3pHUdyq2txyJsQ4tBilFDuW5QZ41cBtanlOKLGJEPGt41hQ5yLi7eeoRZlAn0aZIckxTEXu07soxP4iaIBdu3H5ja/EiITJx42P0GEqILCtzZrTPQ7CER8Qyrcwb2W/sxO/M1j5OUTsRKLKvynQawli5XzZXP9Wsc6CMERTR7BOfkiL96BM+etMnQuhFnwil830ik8n8P74Bu7PrZMfYUxwAAAAASUVORK5CYII=" className='lg:m-0 mx-auto'/>
                        <span className='lg:inline lg:font-semibold lg:text-white lg:text-3xl lg:leading-normal text-white text-center block font-semibold text-lg'>Trigonometri Project</span>
                    </div>
                    <div className='lg:w-1/4'>
                        <p className='lg:text-sm lg:text-[#ddd] lg:my-1 text-[#ddd] text-sm my-1'>TrigonometriProject adalah suatu Website Media Pembelajaran yang membahas mengenai Konsep dasar Trigonometri, Phytagoras (Sinus dan Cosinus).</p>
                    </div>
                    <div className='lg:w-1/4'>
                        <h1 className='lg:font-semibold lg:text-xl lg:text-white lg:mb-3 font-semibold text-white text-2xl mb-2'>Materi</h1>
                        {
                            dataMateri.map((element, index) => {
                                return <Link href={`/${element}`} key={index} className='lg:block lg:text-[#ddd] lg:my-1 lg:text-sm lg:capitalize block text-[#ddd] capitalize my-1 text-sm'>{element}</Link>
                            })
                        }
                    </div>
                    <div className='lg:w-1/4'>
                        <h1 className='lg:font-semibold lg:text-xl lg:text-white lg:mb-3 font-semibold text-2xl text-white mb-2'>Hubungi Kami</h1>
                        <p className='lg:text-sm lg:text-[#ddd] lg:my-1 text-[#ddd] text-sm my-1'>info@trigonometriproject.com</p>
                        <p className='lg:text-sm lg:text-[#ddd] lg:my-1 text-[#ddd] text-sm my-1'>cs@trigonometriproject.com</p>
                    </div>
                </div>
                <hr/>
                <div className='lg:flex lg:justify-between'>
                    <p className='lg:text-sm lg:text-[#ddd] lg:my-1 text-[#ddd] text-sm my-4'>&copy;Copyright 2023. All Right Reserved.</p>
                    <p className='lg:text-sm lg:text-[#ddd] lg:my-1 text-[#ddd] text-sm my-4'>Trigonometri Project</p>
                </div>
            </div>
        </div>
    )
}

export default Footer