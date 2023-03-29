import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import HostsCSS from "./assets/Hosts.module.css"
import CarArticleCSS from "../Catalog/CarArticle/assets/CarArticle.module.css";
import { CarArticle } from "../Catalog/CarArticle";
import CatalogCSS from "../Catalog/assets/Catalog.module.css"
import { GarageArticle } from "./GarageArticle";



export const Hosts = ({
    articles,
}
) => {
    return (
        <div className={HostsCSS.wrapperPage}>
            <div className={HostsCSS.heading}>
                <h2>Your garage</h2>
                <Link to="/hosts/create"><Button variant="outline-primary">Add new</Button></Link>
            </div>

            <div className={`row ${HostsCSS.wrapper}`}>

                {articles.map(x => <div className={`col-lg-4 ${CatalogCSS.article}`}> <GarageArticle key={x._id} {...x} /> </div>)}
            </div>

            <div>
                <h2>All hosts</h2>
                <table className={HostsCSS.table}>
                    <tr>
                        <th className={HostsCSS.profilePic}></th>
                        <th className={HostsCSS.name}>Name</th>
                        <th className={HostsCSS.email}>Email</th>
                        <th className={HostsCSS.vehicle}>Vehicle</th>
                        <th className={HostsCSS.location}>Location</th>
                        <th className={HostsCSS.actions}>Actions</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td>George</td>
                        <td>georgi.n@abv.bg</td>
                        <td>Mercedes c220 W203</td>
                        <td>Sofia, Mladost</td>
                        <td>
                            <input type="submit" />
                            <input type="submit" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}