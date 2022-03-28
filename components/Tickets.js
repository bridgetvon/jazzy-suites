import ticketStyles from '../styles/Tickets.module.css'

export default function Tickets() {

    return (
        <div className={ticketStyles.main}>
            <h1>Digital tickets</h1>
            <p>All tickets will be digital and accessible in the Utah Jazz + Vivint Arena App. Printed tickets will no longer be an option.

            <p>This move to digital-only has been made for several reasons:</p> 
                <ul>
                    <li> - Helps to prevent fraudulent tickets from being circulated.</li>
                    <li> - Increases safety and security by providing an easier way to track whos using tickets and entering the arena.</li>
                    <li> - Allows for a convenient transfer process—you can transfer your tickets with the touch of a button.</li>
                </ul>

                If you have questions or concerns about digital tickets, please contact your account representative.</p>
                <button className={ticketStyles.ticketBtn}>LEARN MORE ABOUT DIGITAL TICKETS</button>
                <div className={ticketStyles.video}>I am a video</div>
        </div>
    )
}
