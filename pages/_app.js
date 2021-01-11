import '../styles/globals.scss'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    Aos.init({duration: 1300})
  })
  return <Component {...pageProps} />
}

export default MyApp
