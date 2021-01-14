import Navbar from './navbar'
import Footer from './footer'
import Image from 'next/image'
import Styles from './styles/layout.module.scss'

const Layout = ({children}) => {
    return(
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <a href="#bottom" className={Styles.contact_button}>
                <Image src="/icons/email_brown.png" width={60} height={60}/>
            </a>
            <div id="bottom"></div>
        </>
    )
}

export default Layout