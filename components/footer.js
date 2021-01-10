import Styles from './styles/footer.module.scss'

const Footer = () => {
    return(
        <>
        <footer className={Styles.footer}>
            <div>
                <p className={Styles.copyright}>Copyright &copy; 2020 MAGI Web Production. All rights reserved</p>
            </div>
        </footer>
        </>
        
    )
}

export default Footer