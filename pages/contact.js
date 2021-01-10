import Layout from '../components/layout'
import Styles from '../styles/pages/contact.module.scss'
import Image from 'next/image'
import Head from 'next/head'

const Contact = () => {
    return(
        <>
        <Head>

        </Head>
        <Layout>
            <section className={Styles.contact_section}>   
                <p>Contact Us</p>
            </section>
            <section className={Styles.info_section}>
                <div className={Styles.contact_container}>
                    <div className={Styles.contact_container_left}>
                        <div className={Styles.hours_container}>
                            <p className={Styles.hours_title}>Operating Hours</p>
                            <div className={Styles.days_container}>
                                <p>Sunday-Thursday</p>
                                <p>Friday-Saturday</p>
                            </div>
                            <div className={Styles.time_container}>
                                <p>10AM - 10PM</p>
                                <p>10AM - 11PM</p>
                            </div>
                        </div>
                        <div className={Styles.address_container}>
                            <p className={Styles.address_title}>Address</p>
                            <p>
                                Kissena Blvd and, <br />
                                Booth Memorial Ave, <br />
                                Fresh Meadows, NY 11365
                            </p>
                        </div>
                    </div>
                    <div className={Styles.contact_container_right}>
                        <div>
                            <Image src="/images/cafe/daan-evers-tKN1WXrzQ3s-unsplash.jpg" width={300} height={400}/>
                        </div>
                    </div>
                </div>
                <div className={Styles.map_container}>
                    <p>Location</p>
                    <iframe className={Styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.532671430947!2d-73.9832326!3d40.7535965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb49cafb82537f1a7!2sBryant%20Park!5e0!3m2!1sen!2sus!4v1610319654546!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </section>
        </Layout>
        </>
    )
}

export default Contact