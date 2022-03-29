import Nav from './Nav'
import Contact from './Contact'


export default function Layout({children}) {
    return (
        <>
            <div>
                <main>
                <Nav />
                 
                    <Contact />
                </main>
            </div>
        </>
    )
}
