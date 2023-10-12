import { CarArticle } from "./CarArticle"
import { Link, useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'
import { useContext, useState, useEffect } from "react"

import CatalogCSS from "./assets/Catalog.module.css"
import { AuthContext } from "../../contexts/AuthContext"
import { useAuthService } from "../../hooks/useAuthService"
import { carServiceFactory } from "../../services/carService"

export const Catalog = ({
    articles
}) => {
    const { isAuthenticated } = useContext(AuthContext)



    return (
        <>
            <div className={`row ${CatalogCSS.wrapper}`}>
                {isAuthenticated && (
                    <Link to="/catalog/create" className={CatalogCSS.addBtn}><Button variant="outline-primary">Add new</Button></Link>
                )}
                {articles.map(x => <div className={`col-lg-4 ${CatalogCSS.article}`}> <CarArticle key={x._id} {...x} /> </div>)}
            </div>
        </>
    )
}
