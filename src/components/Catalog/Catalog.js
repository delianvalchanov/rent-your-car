import { CarArticle } from "./CarArticle"

import CatalogCSS from "./assets/Catalog.module.css"

export const Catalog = ({
    cars
}) => {
    return (
        <>
            <div className={`row ${CatalogCSS.wrapper}`}>
                {cars.map(x => <div className={`col-lg-4 ${CatalogCSS.article}`}> <CarArticle key={x._id} {...x} /> </div>)}
            </div>
        </>
    )
}