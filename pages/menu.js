import Layout from '../components/layout'
import Styles from '../styles/pages/menu.module.scss'
// import Image from 'next/image'
import {useEffect} from 'react'
import {getMenu} from '../lib/menu'

const Menu = ({menusections}) => {
    // useEffect(()=>{
    //     console.log(menusections)
    // },[])
    return(
        <>
        <Layout>
            <section className={Styles.menu_section}>
                <div className={Styles.menu_title_container}>
                    <p className={Styles.menu_title}>Menu</p>
                </div>
                <div className={Styles.menu_grid}>
                    
                    <div className={Styles.menu_grid_column}>
                        <div className={Styles.menu_section}>
                            <div className={Styles.menu_section_title_container}>
                                <p className={Styles.menu_section_title}>Coffee</p>
                                <img className={Styles.menu_section_divider} src="/images/menu_divider/hl_hot.png" />
                            </div>
                            
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Americano</p>
                                <p className={Styles.menu_price}>$ 4</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Cafe Latte</p>
                                <p className={Styles.menu_price}>$ 5</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Cafe Latte</p>
                                <p className={Styles.menu_price}>$ 5</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.menu_section}>
                            <div className={Styles.menu_section_title_container}>
                                <p className={Styles.menu_section_title}>Coffee</p>
                                <img className={Styles.menu_section_divider} src="/images/menu_divider/hl_hot.png" />
                            </div>
                            
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Americano</p>
                                <p className={Styles.menu_price}>$ 4</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Cafe Latte</p>
                                <p className={Styles.menu_price}>$ 5</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Cafe Latte</p>
                                <p className={Styles.menu_price}>$ 5</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        
                    
                    </div>
                    <div className={Styles.menu_grid_column}>
                        <div className={Styles.menu_section}>
                            <div className={Styles.menu_section_title_container}>
                                <p className={Styles.menu_section_title}>Tea</p>
                                <img className={Styles.menu_section_divider} src="/images/menu_divider/hl_iced.png" width={350} height={150} />
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Camomile</p>
                                <p className={Styles.menu_price}>$ 4</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Peach</p>
                                <p className={Styles.menu_price}>$ 5</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.menu_section}>
                            <div className={Styles.menu_section_title_container}>
                                <p className={Styles.menu_section_title}>Tea</p>
                                <img className={Styles.menu_section_divider} src="/images/menu_divider/hl_iced.png" width={350} height={150} />
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Camomile</p>
                                <p className={Styles.menu_price}>$ 4</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className={Styles.menu_container}>
                                <p className={Styles.menu_name}>Peach</p>
                                <p className={Styles.menu_price}>$ 5</p>
                                <p className={Styles.menu_desc}>
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const menu = await getMenu()
    const menusections = menu.menu;
    console.log(menusections)
    return {
        props: {menusections}
    }
}


export default Menu