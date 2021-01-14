import Styles from './styles/footer.module.scss'
import ContactForm from '../components/contactform'

const Footer = () => {
    return(
        <>
        <footer className={Styles.footer}>
            <div className={Styles.form}>
                <ContactForm />
            </div>
            <div>
                <p className={Styles.copyright}>Copyright &copy; 2020 MAGI Web Production. <br />All rights reserved</p>
            </div>
        </footer>
        
        </>
        
    )
}

export default Footer