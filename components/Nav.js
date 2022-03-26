import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


export default function Nav() {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li className={navStyles.icon}>
               <img src='https://www.nba.com/resources/static/team/v2/jazz/JAZ1718_SeasonTickets_JNoteWhite.png'></img>
            </li>
            <li className={navStyles.premiumtitle}>UTAH JAZZ PREMIUM SEATING</li>
            <li>
                <a href='#luxury-suites'>Luxury Suites</a>
            </li>
            <li>
               <a href='#exclusive-clubs'>Exclusive Clubs</a>
            </li>
            <li>
               <a href='#contact-us'>Contact Us</a>
            </li>
        </ul>
    </nav>
  )
}
