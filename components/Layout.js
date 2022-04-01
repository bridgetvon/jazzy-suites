import Nav from './Nav'
import Contact from './Contact'
import Meta from './Meta'

export default function Layout({children}) {
    return (
        <>
            <div>
                <Meta /> 
                <Nav />
                <main>
                    {children}
                </main>
                    <Contact />
            </div>
        </>
    )
}
