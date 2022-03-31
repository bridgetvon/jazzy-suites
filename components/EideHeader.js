import Image from 'next/image'

export default function EideHeader() {
    return (
        <>
            <div className='flex flex-row items-center'>
                <header className='font-bold text-3xl m-6 text-center mr-40'>EIDE BAILLY SUITE LEVEL</header>
                <div className='flex'>
                    <button className='flex mr-20 border-2 rounded p-1 text-xs font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Download Info</button>
                    <button className=' flex border-2 rounded p-1 text-xs font-bold'>Contact us</button>
                </div>
            </div>
            <div className='object-center relative w-full h-full'>
                <Image
                    src='/courtside-suites.jpg'
                    alt='The Eide Bailly suite Level'
                    width={950}
                    height={455}
                    layout='responsive'
                />
                <p className='bg-yellow text-black mt-0 h-full p-4 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Did You know? Whether youre closing an important business deal or celebrating with your employees, renting a suite for a Jazz game is perfect for any occasion. Call or text 801.325.2203 to learn more.</p>
            </div>
        </>
    )
}
