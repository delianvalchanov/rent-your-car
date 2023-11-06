import NotFoundPageCSS from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

export const NotFoundPage = () => {

    return (
        <Container>
            <div className={NotFoundPageCSS.container}>
                <h1 className={NotFoundPageCSS.heading}>PAGE NOT FOUND</h1>
                <h2 className={NotFoundPageCSS.subheading}>A <span className={NotFoundPageCSS.errCode}>404</span> error occured, Page not found, check the URL and try again.</h2>
                <Link to='/'>
                    <Button variant='primary'>Go back to HOME page</Button>
                </Link>
            </div>
        </Container>
    )
}