import Layout from '../components/layout'
import Styles from '../styles/pages/index.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
    return(
        <>
            <Head>
                <title>Cafe Mocha &bull; Home</title>
            </Head>
            <Layout>
                <section className={Styles.main_image_section}>
                    <div className={Styles.main_image_container}>
                        <Image src="/images/cafe/andy-falconer-dwQRixazu9I-unsplash.jpg" layout="fill" objectFit="cover"/>
                        <div className={Styles.desc_container}>
                            <p className={Styles.title}>Cafe Mocha</p>
                            <p className={Styles.description}>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </section>

                <section className={Styles.about_section}>
                    <p className={Styles.title}>
                        About us
                        </p>
                    <p className={Styles.description}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Nam ut tristique lacus. 
                        In et mollis massa. Aliquam egestas congue ex non lacinia. 
                        Duis condimentum elit sem, non dictum ipsum ultricies a. 
                        Cras ullamcorper lacinia felis, vestibulum venenatis dui pretium eu. 
                        Nulla laoreet semper convallis.
                    </p>
                    <div className={Styles.icons_container}>
                        <Link href="/about">
                            <a data-aos="fade-up">
                                <Image src="/icons/coffee-cup.png" width={100} height={100} />
                                <p className={Styles.icon_desc}>Home</p>
                            </a>
                        </Link>
                        <Link href="/menu">
                            <a data-aos="fade-up" data-aos-delay="200">
                                <Image src="/icons/coffee-machine.png" width={100} height={100} />
                                <p className={Styles.icon_desc}>Menu</p>
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a data-aos="fade-up" data-aos-delay="400">
                                <Image src="/icons/location.png" width={100} height={100} />
                                <p className={Styles.icon_desc}>Contact</p>
                            </a>
                        </Link>
                    </div>
                </section>
                
                <section className={Styles.why_section}>
                    <div className={Styles.why_container}>
                        <div className={Styles.why_image_container_left}>
                            <Image src="/images/coffee/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg" layout="fill" objectFit="cover"/>
                        </div>
                        <div className={Styles.why_desc_container_right} data-aos="fade-left" data-aos-offset="500" data-aos-anchor-placement="top-bottom">
                            <p className={Styles.why_title}>Why coffee?</p>
                            <p className={Styles.why_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam ut tristique lacus. In et mollis massa. Aliquam egestas congue ex non lacinia.
                        Duis condimentum elit sem, non dictum ipsum ultricies a.
                        Cras ullamcorper lacinia felis, vestibulum venenatis dui pretium eu
                        . Nulla laoreet semper convallis.</p>
                        </div>
                        <div className={Styles.why_desc_container_left} data-aos="fade-right" data-aos-offset="500" data-aos-anchor-placement="top-bottom">
                            <p className={Styles.why_title}>Why cafe mocha?</p>
                            <p className={Styles.why_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam ut tristique lacus. In et mollis massa. Aliquam egestas congue ex non lacinia.
                        Duis condimentum elit sem, non dictum ipsum ultricies a.
                        Cras ullamcorper lacinia felis, vestibulum venenatis dui pretium eu
                        . Nulla laoreet semper convallis.</p>
                        </div>
                        <div className={Styles.why_image_container_right}>
                            <Image src="/images/coffee/nathan-dumlao-r-KfktlyBL0-unsplash.jpg" layout="fill" objectFit="cover"/>
                        </div>
                    </div>
                </section>
                
                <section className={Styles.background_section}>
                    <div className={Styles.background_image_container}>
                    </div>
                </section>
                
                
                
            </Layout>
        </>
    )
}

export default Home;