import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const BottomNavigasi = () => {
    return (
        <section id="bottom-navigation" className="font-poppins md:hidden block fixed inset-x-0 bottom-0 z-50 bg-white shadow-[0_-2px_6px_-2px_rgba(0,0,0,0.2)]">
            <div id="tabs" className="flex justify-between">
                <Link href="/trigonometri" className="w-full focus:font-[600] hover:text-[#333] justify-center inline-block text-center pt-2 pb-2">
                    <Image alt='Trigonometri' width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXUlEQVR4nO2aPWsUQRiAJwYsNKJYpbLwBwiiVn40olj4ReB974qAjbWohYLNOO9ZKHY2NnZ2c/e+K+nyB4Qg/gJbO1MlhYjKyuZMuG1uN8nszszuPDDN3R7M89zc3t7tKJVIJBKJRCIRKaDt0m29dkz1jaEen0Piz0DyF438QRIBbZdVHxiY7CqSbCNJPjuA5CtYu6j6KI//x2AkN1VXwdHk2jz5nVVg+JHqImgml9Hw1jz5aQB5qvoqj10MgPuQ71wA3Kd8pwLgAeQ7EwAPKN+JAHgI+egD4CHlow6ADuSjDYCO5KMMgA7lowsAI7niUj6qANCAfDQBoCH5KAJAg/LBB4CG5YMOAC3IBxsAWpIPMgC0KB9cAGhZPqgA4EE+mADgST6IAOBR3nsA8CzvNQAEIO8twN03n06g4U3f8p5XAN8Ckp+9DVAAJKvupfjDPZ2dUkHepTX8EbQ9Ovs4GHnnMkC48jS9SwskVuX5wu5zxW4NJP7mKoCK4f48GH4xewxSdr+JAGj4EhA/nzeKY1qVx+n4VWxZ2TswzxfAyBfXAYoTnLeTIFb8ewuG10uTfSkPOhNgSOPzVTszpueD7EL5XFD9migCoOGNehPm96UJE69FHwBe25O1J2zk++w3Ahp+3HoA4idOA6y+XT+OxL/rTnhFT87uvnZgsuttBxiQrCjXIInUXwXZnb0Ja3umzQBA/AO0Pe08AGi7XGxCrDdpflj6kdRSgB15wzdUU2itjxSbEIvP2LwLkeGr8cXS9UDFhUvVqLoQQpM9K5Z9I+98IpFIJBKJRCKhOss/Wu+16uEIiRIAAAAASUVORK5CYII=" className='mx-auto'/>
                    <span className="tab tab-home block text-xs font-medium">Trigonometri</span>
                </Link>
                <Link href="/phytagoras" className="w-full focus:font-[600] hover:text-[#333] justify-center inline-block text-center pt-2 pb-2">
                    <Image alt='Phytagoras' width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3ElEQVR4nO2dPWgUQRSAV0XEH7DzF2wEsbHRShCtBJEoRJlJREVBtLGxSGE3N3OJBEWJZbp0wnnzVsUERKxio42NhVqIEkFFUAOiSNSTdx6Kxe0menfzZt77YKo7jpn72Nm9j+U2ywRBEARB4MngyM212sIV5eC+dn5iwMCW0HNiizK1VdrCM+2g8Wf4D9r47aHnxhJVgdN/y/g93sqREgBtYbSNkIa28EIN1zaGmBdbtPUX2wpx0FDOP+03fk3oebKhTMgvKfAQzzWh58qC+QhpbV/39l2dWhZ6vskzbyF4pFifq1ptSeg5J81ChLQuiSeyRmNR6Hkny8KFNMdI6Hknyz8Kwe1rKPTceQmx/om28LH9Sd7/UBU4EXr+nI6Q28rCTmX9p4Irr2/a5odDr4GNEHx9wEGfdn6uYPv6qqzfG3odbIQ031PxR5WD7wW/5meVy3eEXQkjIYiq+rMlieXdIVPfGm4lzIQgyvlqydXXjDK1TWFWwlBI6/1jJUeKxMheCjHGLFYWrhVLkRjZMyHImfHxpcr5qcLtS2Jk74QgfebWCm39dMmv+VxiZI+EIGq0tlo7/6j4RO8lRvZKCDJobmzQ1j8vufoaWdCkOPO/QpCBKmzWDl6XbF9D3V1JInRCCKJcvk1Z/744RuanureSROiUEERiJDEhiMRIYkKanykxkpYQRGIkMSGIxEhiQlqfPyYxkpAQIzGSlhBEYiQxIYjESGJCEImRxIQgEiOJCUEkRhITgkiMJCYEkRhJTAgiMZKYEERiJDEhiMRIYkIQiZHEhCDsYyQ1IYZ7jKQmJOMeIykKYR0jqQphGyMpC2EZI6kLYRcjYxDCKkbGIoRNjIxJCIsYGZuQ5GNkjEKSjpGxCkk2RsYsJMkYGbsQk1qMjF1IcjEyBSFJxchUhCQTI1MSkkSMTE1I9DEyRSFRx8iCP8Gcxvyw0IFPVMBL0YwAulrfrS18LjifzCnnD2Yp/E1syXipqrArI4C2+YGiGKkcfFEW9mSJC8E9+g1e9WQEUJX6cdyi2kvxs2QeYNMtIb9GfX9GBG39uZL50niATTeFKJefzAgRRYzkJCSKGMlNiKEeI7kJIR8jOQohHSO5CiEbIzkLIRkjuQshFyNFCLEYKUKI3RkpQojdGSlCiN0ZKUKI3RnZVSEWJptPo451OJgpXGM3nqbd3fye/lAWHh+7dGelCHGkpJzvmBBl/YXQC9KxDwvXOyekAkeCL8hFPiyMdjRFa+sfBF+Ui3RYeKVMbV3WSdTl2nJsNdoBKAt3ZcB8voNJ3O77h/36jsoQBEEQBEEQhCxKfgJNmHbA/mYlowAAAABJRU5ErkJggg==" className='mx-auto'/>
                    <span className="tab tab-kategori block text-xs font-medium">Phytagoras</span>
                </Link>
                <Link href="/sinus" className="w-full focus:font-[600] hover:text-[#333] justify-center inline-block text-center pt-2 pb-2">
                    <Image alt='Sinus' width={32} height={32} src="data:image/png;base64,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" className='mx-auto'/>
                    <span className="tab tab-whishlist block text-xs font-medium">Sinus</span>
                </Link>
                <Link href="/cosinus" className="w-full focus:font-[600] hover:text-[#333] justify-center inline-block text-center pt-2 pb-2">
                    <Image alt='Cosinus' width={32} height={32} src="data:image/png;base64,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" className='mx-auto'/>
                    <span className="tab tab-whishlist block text-xs font-medium">Cosinus</span>
                </Link>
                <Link href='/latihan' className="w-full focus:font-[600] hover:text-[#333] justify-center inline-block text-center pt-2 pb-2">
                    <Image alt='Latihan' width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE30lEQVR4nO2dSYhcVRSGrwMoCIIIjiioOAsO4LBzoYLggGk5t5okIrgQp00WTrh4Obc6ERwWukucQFdW1znVgaQhuBA3EQxBUaLGCKJJBKdslIREzZNTPdjDq069GvrdV+//4FBUQd176vzv3vvu8E45BwAAAAAAAAAAAAAAAAAAAIYKTTQuHuep2ynIgzVWmreg9w+rTit7YV1Wt/kwnkxd5KrIw2Hyeh/kdWL53gdNO9iBYdVvZXeq13wi1tcombrOjTprJuRCCvquZ/1nBSHSIgWZt7aP8jYljQvcKDIeJm8mlp+6ECKNQpC5FhPkEE3obW6UIJZ7KOjRHGKksQgyI4oe9fXm3W4UoDB1NbEczilGGpMgs2PL4VqiV7kykyTJqT7I5z2IkVKQ34bll5Xdm0+6x36TKyu0sflILz/ctwdVOVGrty4ZuE9J41Iru2e/Nso6V1Y8y7c9//BgJlsG7ROxvtWPT8TytSvvXKMfMXTONt37xvQZ/frzaPLemcSyeRA+lXKOQqwvDEiQ1Af9xbNOWovpyey7rL8OzB9uPefKhmd5Z4CCpHGZbHVlg4JMFx84HYoR6w5XNnyQXSPcQna5sgFBIgOCRAYEiQwIEhkQJDIgSGRAkMiAIJEBQSIDgkRGtIKwHvEsE7WgY/bafo+lk1UJ/M+2CEhBfljw+R8+kVuWHsDIv4OItaw0nxjygW1ItQPeaJzmg3CWGAta814Ikn3l7SeW+9Ykct7al7efk2Xjm7adb93NCme8/lz/6s6zlgbdyuzUvRLrFxBkeSCPjYXmld2OUZS0bqKg/y4th4J+1W0Z7dbBcmuXJymr1WVR0M/y1kFB9mUN2g9t1nO7+f5Y0rzcB/0Rg3qH7srlIU1Pae+1Z4orU3cmH58+HDEq0kJmAtlc23X5LE+dpMU1OonSnxiVEkRtTHif6vI0hdbjmcb6jGf5sJtb1SxR+hejQoL4IRixfuSD3LgumT67fXcW5FD/5UKQtGhhIUgoOugQJC0+0BAkguAqBCk+oApBYjJi3W3nc2de0UJW80r+e9F7lhMUZIPN8v+f7bdXgvOWi3mIzxMwli9t0dACbs9yEOsnbTHq+uTS+ZItz+efm1RHkGPE+qY9NrYoq8OirAu6fvaZj8wVWmI9XqvrFQt9sQd+VsoMQayfQpDMK7v1QP/PL8rePBeO7a8Qy18QZHkwv3E5sW3ajO7qd+uGuvm+tRxi2YkxJKurCbontyBB9nco66XuxNAduMvqfCt63CdyQ9diTMgdHVd8bQBnfWI4YlRrUD9geyKWMcGWybOsnRki6GOdNqdOJkr/YlRLkHSgNtOCXpwbU2YH8B7GDAiSDlYYPWgXSP67KQiSFt6qIEjRwVUIUnxAFYIUH0SFIMUHTiHIHP3f62vMtt2VDcvoOcItZIsrGxTk+eIDp0MxCvqsq3ACszQ2G0ua17hqpvjT6Ky0Kf4M2/krOoB+4CbjrqxYSlXb5xid1qG75w9IlBWqb7us1zy5PiKzRMp5nvCKGkvT3UOq8TQaYz1S49ZdruLJ+NMYbCST8c9hf/3QnjDmfshSCzpkJ1ttU8uNOrWg13qWVzodUvDFdk/fmW+lnWsM4k9e7JThsr884tUzq9t8MF+KjgcAAAAAAAAAAAAAAAAAAIAbcf4D2dFyYp1cL3AAAAAASUVORK5CYII=" className='mx-auto'/>
                    <span className="tab tab-account block text-xs font-medium">Latihan</span>
                </Link>
            </div>
        </section>
    )
}

export default BottomNavigasi