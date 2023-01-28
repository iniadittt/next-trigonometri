import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const dataNavigasi = [
    'trigonometri',
    'phytagoras',
    'sinus',
    'cosinus',
    'latihan'
]

const MobileNavigasi = () => {
    return (
        <div className='font-poppins lg:w-full lg:bg-[#5682ae] lg:flex lg:justify-center lg:py-4 lg:px-24 lg:fixed lg:z-50 lg:shadow-2xl bg-[#5682ae] fixed w-full z-50 py-4 px-6'>
            <div className='lg:w-[1080px] lg:flex lg:justify-between flex gap-4 justify-between'>
                <div className='lg:flex lg:gap-3 flex gap-2 font-poppins'>
                    <Link href='/' className='lg:flex lg:gap-3 flex gap-2'>
                        <Image alt='logo' width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nO2YS07DMBBALSGFOwDHgJ4Bqa3Yliv0GqgSt2HRsuQjtSdpuQC0uy4ecmNEhNTYbsaZRPht7cz4xcmME2MymUzGB3AHvAM70rED3oCxSQHwSPvMUuyEFiNJEfs4afEqKbJVFPmSFFHFdBHgDLgEJsCytyJ/AabAXlREq09QysiIaPcJYHVsUuxOqPYJ4F5CRL1PUBaAxiLqfYKymjUWUcV41iElMgdugCI44G/cwl270BaZxy6+JseTpsi1Gx8CHycnKGMMNEUKN75plKCMca4mYqQStJWHLBJH3pHUdyq2txyJsQ4tBilFDuW5QZ41cBtanlOKLGJEPGt41hQ5yLi7eeoRZlAn0aZIckxTEXu07soxP4iaIBdu3H5ja/EiITJx42P0GEqILCtzZrTPQ7CER8Qyrcwb2W/sxO/M1j5OUTsRKLKvynQawli5XzZXP9Wsc6CMERTR7BOfkiL96BM+etMnQuhFnwil830ik8n8P74Bu7PrZMfYUxwAAAAASUVORK5CYII="/>
                        <span className='lg:my-auto lg:text-xl lg:font-[700] lg:text-[#F1FFFB] my-auto font-semibold text-white'>Trigonometri Project</span>
                    </Link>
                </div>
                <ul className='hidden lg:flex lg:my-auto lg:gap-8 lg:font-[500] lg:text-white'>
                    {
                        dataNavigasi.map(element => {
                            return <Link key={element} href={`/${element}`} className='lg:capitalize'>{element}</Link>
                        })
                    }
                </ul>
                <Link href='/login' className='lg:bg-white lg:my-auto lg:py-2 lg:px-5 lg:rounded-full lg:text-sm lg:font-semibold lg:shadow-md my-auto px-4 py-1 bg-white text-sm font-semibold rounded-full shadow-lg'>Login</Link>
            </div>
        </div>
    )
}

export default MobileNavigasi