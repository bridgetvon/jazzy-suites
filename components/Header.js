import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={headerStyles.headerdiv}>
        <h1 className={headerStyles.main}>PREMIUM SEATING</h1>
        <h2 className={headerStyles.secondary}>THE BEST WAY TO ENJOY ALL THE EXCITEMENT</h2>
        <p className={headerStyles.description}>Whether youre entertaining business clients, closing a major deal, or socializing with family and friends, a luxury suite provides all the convenience, comfort and service you desire. As the home of the Utah Jazz and the country’s most popular touring musical acts and family shows, Vivint Arena is the place to meet, greet, see and be seen in Utah.</p>
    </div>
  )
}
