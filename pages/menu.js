import Layout from '../components/layout'
import Styles from '../styles/pages/menu.module.scss'
// import Image from 'next/image'
import {useEffect} from 'react'
import {getMenu} from '../lib/menu'

const Menu = ({menusections}) => {
    return(
        <>
        <Layout>
            <section className={Styles.menu_section}>
                <div className={Styles.menu_title_container}>
                    <p className={Styles.menu_title}>Menu</p>
                </div>
                <div className={Styles.menu_grid}>
                    {menusections.map((sc, scIndex) => (
                        <div className={Styles.menu_section} key={scIndex} data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <div className={Styles.menu_section_title_container}>
                                <p className={Styles.menu_section_title}>{sc.title}</p>
                                <img className={Styles.menu_section_divider} src={sc.divider ? `/images/menu_divider/${sc.divider}` : `/images/menu_divider/hl_hot.png`} />
                            </div>
                            {sc.menusection.map((mn,mnIndex)=>(
                                <div className={Styles.menu_container} key={mnIndex}>
                                <p className={Styles.menu_name}>{mn.name}</p>
                                <p className={Styles.menu_price}>{mn.price}</p>
                                <p className={Styles.menu_desc}>
                                    {mn.desc}
                                </p>
                            </div>
                            ))}
                            
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const menu = await getMenu()
    const menusections = menu.menu;
    return {
        props: {menusections}
    }
}


export default Menu