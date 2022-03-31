import Image from 'next/image'


export default function Buffet() {
  return (
    <div>
      <Image
        src='/buffet.jpg'
        alt='Buffet in the Eide Bailly suite'
        width={950}
        height={500}
        layout='responsive'
      />
      <p className='bg-black bg-opacity-75 text-white mt-0 h-full p-4 font-bold'>
        Tailor your food and beverage experience to your group each night. Choose from an expansive menu based on who you will be hosting for that event. Submit your food and beverage orders 2 business days prior to the event. Access to your suite and food service will start 90 minutes prior to tipoff
        </p>
    </div>
  )
}
