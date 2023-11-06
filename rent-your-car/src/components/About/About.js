import { Container } from "react-bootstrap"
import AboutCSS from './assets/About.module.css'


export const About = () => {
    return (
        <Container>
            <div className={AboutCSS.content}></div>
        </Container>
    )
}