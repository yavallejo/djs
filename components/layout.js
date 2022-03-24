import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="container px-4 py-10 mx-auto lg:px-0">{children}</main>
            <Footer />
        </>
    )
}