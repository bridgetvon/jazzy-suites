import Image from 'next/image'
import Link from 'next/link'


export default function LuxurySuites() {
    return (
        <div className='main p-10 bg-black'>
            <h1 className='text-yellow mb-5 font-bold text-xl'>LUXURY SUITES</h1>
            <div className="flex flex-wrap grid lg:grid-cols-2 gap-4">
                <div>
                    <Image
                        src='/eideBaillysuitelevel.jpg'
                        alt='Eide Bailey Suite Level'
                        width={650}
                        height={350}
                        layout='responsive'
                    />
                
                    <div className='inline-block text-white'>EIDE BAILLY SUITE LEVEL</div>
                </div>
                <div>
                    <Image
                        src='/loge-boxes.jpg'
                        alt='Loge boxes'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>LOGE BOXES</div>
                </div>
                <div>
                    <Image
                        src='/level-three-udo-lounge.jpg'
                        alt='Level three udo lounge'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>LEVEL THREE UDO LOUNGE</div>
                </div>
                <div>
                    <Image
                        src='/courtside-suites.jpg'
                        alt='court-side suites'
                        width={650}
                        height={350}
                        layout='responsive'

                    />
                    <div className='inline-block text-white'>COURTSIDE SUITES</div>
                </div>
            </div>
        </div>
    )
}
