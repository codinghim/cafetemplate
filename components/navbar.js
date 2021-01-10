import Styles from "./styles/navbar.module.scss"
import Link from 'next/link'
import { useEffect } from "react"
import Image from 'next/image'

const Navbar = () => {
    useEffect(()=>{
        window.onscroll= () =>{
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('nav_container').style.transform = "translateY(-10vh)";
                document.getElementById('nav_container').style.boxShadow="0px 0px 0.2vh 0vh rgba(0,0,0,0.4)"
            } else {
                document.getElementById('nav_container').style.transform = "none";
                document.getElementById('nav_container').style.boxShadow="none"
            }
        }
        
    },[])
    return(
        <nav className={Styles.nav_container} id="nav_container">
            <Link href="/">
                <a className={Styles.nav_title} id="nav_title">Cafe Mocha</a>
            </Link>
            <div className={Styles.nav_items}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <p className={Styles.divider}>|</p>
                <Link href="/menu">
                    <a>Menu</a>
                </Link>
                <p className={Styles.divider}>|</p>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
            <div className={Styles.nav_links}>
                <a className={Styles.nav_link_item} href="https://instagram.com">
                    <Image src='/icons/instagram.png' width={40} height={40} />
                </a>
            </div>
        </nav>
        
    )
}

export default Navbar