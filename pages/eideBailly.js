import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Tickets from '../components/Tickets'
import Image from 'next/image'

export default function EideBailly() {
    return (
        <div>
            <Nav />
            <div className='flex flex-row items-center'>
                <header className='font-bold text-3xl m-6 ml-20 mr-40'>EIDE BAILLY SUITE LEVEL</header>
                <div className='flex justify-end'>
                    <button className='flex justify-end mr-20 border-2 rounded p-2 text-sm font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Download Info</button>
                    <button className=' flex justify-end border-2 rounded p-2 text-sm font-bold'>Contact us</button>
                </div>
            </div>
            <div className='object-center relative w-full h-full'>
            <Image 
            src='/../public/images/courtside-suites.jpg'
            alt='The Eide Bailly suite Level'
            layout='fill'
            />
            </div>
            <Tickets />
            <Contact />
        </div>
    )
}
