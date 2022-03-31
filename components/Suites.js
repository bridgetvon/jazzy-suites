import Image from 'next/image'


export default function Suites() {
    return (
        <div id="mainDiv" className='p-15 flex flex-wrap justify-center'>
            <div className="text-white bg-black mr-4 my-5">
                <div className="max-w-sm overflow-hidden">
                    <div>
                        <Image
                            src='/luxury-suites.jpg'
                            alt='Luxury suite picture'
                            width={400}
                            height={200}
                        />
                        <div className="font-bold text-xl text-yellow m-5">LUXURY SUITES</div>
                        <p className="text-gray-700 p-6 text-md bg-black h-80">
                            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
                        </p>
                        <button className='text-yellow text-xs w-40 m-3 font-bold rounded p-1 border-2'>LEARN MORE</button>
                    </div>
                </div>
                </div>
                <div className='text-white bg-black my-5'>
                <div className="max-w-sm overflow-hidden">
                    <div className='sm:w-full'>
                        <Image
                            src='/exclusive-clubs.jpg'
                            alt='Luxury suite picture'
                            width={400}
                            height={200}
                        />
                        <div className="font-bold text-xl text-yellow m-5">EXCLUSIVE CLUBS</div>
                        <p className="text-gray-700 p-6 text-md bg-black h-80">
                            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
                        </p>
                        <button className='text-yellow text-xs w-40 m-3 rounded font-bold p-1 border-2'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

{/* <div id="mainDiv" className='bg-white p-15'>
<div className="grid grid-cols-2 gap-1 text-white bg-black m-20">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <Image
                src='/../public/images/luxury-suites.jpg'
                alt='Luxury suite picture'
                width={450}
                height={220}
            />
            <div className="font-bold text-xl text-yellow mb-2">Luxury Suites</div>
            <p className="text-gray-700 text-base">
                Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
            </p>
            <button className='text-yellow'>Learn More</button>
        </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <Image
                src='/../public/images/exclusive-clubs.jpg'
                alt='Luxury suite picture'
                width={450}
                height={220}
            />
            <div className="font-bold text-xl text-yellow mb-2">Exclusive Clubs</div>
            <p className="text-gray-700 text-base">
                Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
            </p>
            <button className='text-yellow'>Learn More</button>
        </div>
    </div>
</div>
</div> */}
