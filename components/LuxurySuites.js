import Image from 'next/image'


export default function LuxurySuites() {
    return (
        <div className='main p-20 bg-black'>
            <h1 className='text-yellow mb-5'>Luxury Suites</h1>
            <div className="flex-wrap columns-2 gap-5">
                <div className="flex-wrap">
                    <Image
                        src='/../public/images/eideBaillysuitelevel.jpg'
                        alt='Eide Bailey Suite Level'
                        width={650}
                        height={350}
                    />
                </div>
                <div>
                    <Image
                        src='/../public/images/loge-boxes.jpg'
                        alt='Loge boxes'
                        width={650}
                        height={350}
                    />
                </div>
                <div>
                    <Image
                        src='/../public/images/level-three-udo-lounge.jpg'
                        alt='Level three udo lounge'
                        width={650}
                        height={350}
                    />
                </div>
                <div>
                    <Image
                        src='/../public/images/courtside-suites.jpg'
                        alt='courtside suites'
                        width={650}
                        height={350}
                    />
                </div>
            </div>
        </div>
    )
}
