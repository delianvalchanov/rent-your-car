import { CarArticle } from "./CarArticle"

import CarArticleListCSS from "./assets/CarArticleList.module.css"

export const CarArticleList = () => {
    return (
        <div className={`row ${CarArticleListCSS.wrapper}`}>
            <div className={`col-lg-4 col-md-6 ${CarArticleListCSS.article}`}>
                <CarArticle />
            </div>
            <div className={`col-lg-4 col-md-6 ${CarArticleListCSS.article}`}>
                <CarArticle />
            </div>
            <div className={`col-lg-4 col-md-6 ${CarArticleListCSS.article}`}>
                <CarArticle />
            </div>
            <div className={`col-lg-4 col-md-6 ${CarArticleListCSS.article}`}>
                <CarArticle />
            </div>
            <div className={`col-lg-4 col-md-6 ${CarArticleListCSS.article}`}>
                <CarArticle />
            </div>
            <div className={`col-lg-4 col-md-6 ${CarArticleListCSS.article}`}>
                <CarArticle />
            </div>

        </div>
    )
}