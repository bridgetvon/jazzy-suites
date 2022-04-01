import Image from 'next/image'
import Link from 'next/link'


export default function LuxurySuites() {
    return (
        <div className='main p-10 bg-black' id='luxury-suites'>
            <h1 className='text-yellow mb-5 font-bold text-xl'>LUXURY SUITES</h1>
            <div className="flex flex-wrap grid lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div className='relative brightness-50'>
                    <Link href='eideBailly' passHref>
                    <Image
                        src='/eideBaillysuitelevel.jpg'
                        alt='Eide Bailey Suite Level'
                        width={650}
                        height={350}
                        layout='responsive'
                    />
                    </Link>
                    <div className='inline-block text-white absolute inset-x-20 top-20 lg:inset-x-44 lg:top-24 font-bold lg:text-lg'>EIDE BAILLY SUITE LEVEL</div>
                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/loge-boxes.jpg'
                        alt='Loge boxes'
                        width={650}
                        height={350}
                        layout='responsive'
                    />
                    <div className='inline-block text-white absolute inset-x-20 top-20 lg:inset-x-44 lg:top-28 font-bold lg:text-lg'>LOGE BOXES</div>
                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/level-three-udo-lounge.jpg'
                        alt='Level three udo lounge'
                        width={650}
                        height={350}
                        layout='responsive'
                    />
                    <div className='inline-block text-white absolute inset-x-20 top-20 lg:inset-x-44 lg:top-24 font-bold lg:text-lg'>LEVEL THREE UDO LOUNGE</div>
                </div>
                <div className='relative brightness-50'>
                    <Image
                        src='/courtside-suites.jpg'
                        alt='court-side suites'
                        width={650}
                        height={350}
                        layout='responsive'
                    />
                    <div className='inline-block text-white absolute inset-x-20 top-20 lg:inset-x-44 lg:top-24 font-bold lg:text-lg'>COURTSIDE SUITES</div>
                </div>
            </div>
        </div>
    )
}
