import Nav from './Nav'
import Header from './Header'
import Contact from './Contact'
import Tickets from './Tickets'
import Suites from './Suites'
import LuxurySuites from './LuxurySuites'
import ExclusiveClubs from './ExclusiveClubs'

export default function Layout() {
    return (
        <>
            <Nav />
            <div>
                <main>
                    <Header />
                    <Suites />
                    <Tickets />
                    <LuxurySuites />
                    <ExclusiveClubs />
                    <Contact />
                </main>
            </div>
        </>
    )
}
