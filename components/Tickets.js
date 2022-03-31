import Image from 'next/image'

export default function Tickets() {

    return (
        <div className='grid grid-cols-2 mt-8'>
            <div className='bg-grey p-9 text-sm'>
                <h1 className='mb-5 text-2xl font-bold'>Digital tickets</h1>
                <p>All tickets will be digital and accessible in the Utah Jazz + Vivint Arena App. Printed tickets will no longer be an option.
                    <p>This move to digital-only has been made for several reasons:</p>
                    <ul>
                        <li> - Helps to prevent fraudulent tickets from being circulated.</li>
                        <li> - Increases safety and security by providing an easier way to track whos using tickets and entering the arena.</li>
                        <li> - Allows for a convenient transfer process—you can transfer your tickets with the touch of a button.</li>
                    </ul>
                    If you have questions or concerns about digital tickets, please contact your account representative.</p>
                <button className='bg-yellow text-xs p-3 mt-3 border-2 rounded border-black-500'>LEARN MORE ABOUT DIGITAL TICKETS &#8680;</button>
            </div>
            <div className='p-8 bg-grey'>
            <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src="/tickets.mp4" />
      </video>
          
            </div>

        </div>
    )
}
