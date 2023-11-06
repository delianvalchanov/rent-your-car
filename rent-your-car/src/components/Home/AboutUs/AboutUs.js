import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import AboutUsCSS from "./assets/AboutUs.module.css"

export const AboutUs = () => {
    return (
        <Container>
            <div id='ourMission' className={AboutUsCSS.wrapper}>
                <h2 className={AboutUsCSS.heading}>Our Mission</h2>
                <div className={`row ${AboutUsCSS.articleWrapper}`}>
                    <article className={`col-xl-4 col-lg-5 ${AboutUsCSS.imageWrapper}`}>
                        <Link to={'/about'}><img className={AboutUsCSS.image} src={require('./assets/images/aboutus2.jpg')} alt="" /></Link>
                    </article>
                    <article className={`col-xl-8 col-lg-7 ${AboutUsCSS.descWrapper}`}>
                        <h3 className={AboutUsCSS.descHeading}>Create our shared automotive comunity</h3>
                        <p className={AboutUsCSS.desc}>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi nostrum consectetur
                            suscipit ratione error fugit cumque nisi quod, autem aut.
                        </p>
                    </article>
                </div>
                <div className={`row ${AboutUsCSS.articleWrapper}`}>
                    <div className={`col-xl-4 col-lg-5 ${AboutUsCSS.imageWrapper}`}>
                        <Link to={'/about'}><img className={AboutUsCSS.image} src={require('./assets/images/aboutus1.jpg')} alt="" /></Link>
                    </div>
                    <div className={`col-xl-8 col-lg-7 ${AboutUsCSS.descWrapper}`}>
                        <h3 className={AboutUsCSS.descHeading}>Find your best deal</h3>
                        <p className={AboutUsCSS.desc}>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi nostrum consectetur
                            suscipit ratione error fugit cumque nisi quod, autem aut.
                        </p>
                    </div>
                </div>
                <div className={`row ${AboutUsCSS.articleWrapper}`}>
                    <div className={`col-xl-4 col-lg-5 ${AboutUsCSS.imageWrapper}`}>
                        <Link to={'/about'}><img className={AboutUsCSS.image} src={require('./assets/images/aboutus3.avif')} alt="" /></Link>
                    </div>
                    <div className={`col-xl-8 col-lg-7 ${AboutUsCSS.descWrapper}`}>
                        <h3 className={AboutUsCSS.descHeading}>Enjoy your trip with just a few clicks</h3>
                        <p className={AboutUsCSS.desc}>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Eligendi nostrum consectetur
                            suscipit ratione error fugit cumque nisi quod, autem aut.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}