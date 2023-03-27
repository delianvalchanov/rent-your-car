import { Container } from 'react-bootstrap'

import AboutUsCSS from "./assets/AboutUs.module.css"

export const AboutUs = () => {
    return (
        <>
            <div className={AboutUsCSS.wrapper}>
                <h2 className={AboutUsCSS.heading}>Our Mission</h2>
                <div className={`row ${AboutUsCSS.articleWrapper}`}>
                    <article className={`col-lg-6 ${AboutUsCSS.imageWrapper}`}>
                        <a href=""><img className={AboutUsCSS.image} src={require('./assets/images/aboutus2.jpg')} alt="" /></a>
                    </article>
                    <article className={`col-lg-6 ${AboutUsCSS.descWrapper}`}>
                        <h3 className={AboutUsCSS.descHeading}>Create our shared automotive comunity</h3>
                        <p className={AboutUsCSS.desc}>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi nostrum consectetur
                            suscipit ratione error fugit cumque nisi quod, autem aut.
                        </p>
                    </article>
                </div>
                <div className={`row ${AboutUsCSS.articleWrapper}`}>
                    <div className={`col-lg-6 ${AboutUsCSS.imageWrapper}`}>
                        <a href=""><img className={AboutUsCSS.image} src={require('./assets/images/aboutus1.jpg')} alt="" /></a>
                    </div>
                    <div className={`col-lg-6 ${AboutUsCSS.descWrapper}`}>
                        <h3 className={AboutUsCSS.descHeading}>Create our shared automotive comunity</h3>
                        <p className={AboutUsCSS.desc}>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi nostrum consectetur
                            suscipit ratione error fugit cumque nisi quod, autem aut.
                        </p>
                    </div>
                </div>
                <div className={`row ${AboutUsCSS.articleWrapper}`}>
                    <div className={`col-lg-6 ${AboutUsCSS.imageWrapper}`}>
                        <a href=""><img className={AboutUsCSS.image} src={require('./assets/images/aboutus3.avif')} alt="" /></a>
                    </div>
                    <div className={`col-lg-6 ${AboutUsCSS.descWrapper}`}>
                        <h3 className={AboutUsCSS.descHeading}>Create our shared automotive comunity</h3>
                        <p className={AboutUsCSS.desc}>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi nostrum consectetur
                            suscipit ratione error fugit cumque nisi quod, autem aut.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}