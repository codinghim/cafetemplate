import Layout from '../components/layout'
import Styles from '../styles/pages/about.module.scss'

const About = () => {
    return(
        <>
        <Layout>
            <section className={Styles.about_section}>
                <h1>About</h1>
            </section>
        </Layout>
        </>
    )
}

export default About