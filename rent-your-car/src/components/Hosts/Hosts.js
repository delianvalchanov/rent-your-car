import { Button } from "react-bootstrap";

import HostsCSS from "./assets/Hosts.module.css"
import CarArticleCSS from "../Catalog/CarArticle/assets/CarArticle.module.css";

import { StarRating } from "../Catalog/CarArticle/StarRating/StarRating";

export const Hosts = (
) => {
    return (
        <div className={HostsCSS.wrapperPage}>

            <article>
                <h2>Your garage:</h2>
                <div className={CarArticleCSS.wrapper}>
                    <img
                        src={require(`../Catalog/CarArticle/assets/images/mercedes-c-w203.jpg`)}
                        alt="car picture"
                    />
                    <div className="row">
                        <div className="col-8">
                            <a href="/">
                                <h4 className={CarArticleCSS.carModel}>Mercedes C-classe</h4>
                            </a>
                        </div>
                        <div className={`col-4 ${CarArticleCSS.price}`}>40$/day</div>
                    </div>

                    <div className={`row ${CarArticleCSS.carData}`}>
                        <div className="col-6"><span>Host: Georgi</span></div>
                        <div className="col-6"> <StarRating /></div>
                    </div>

                    <div className={`row ${CarArticleCSS.carData}`}>
                        <span className={`col-6 ${CarArticleCSS.carEngine}`}>Engine: 2.2CDI</span>
                        <span className={`col-6 ${CarArticleCSS.carPower}`}>Power: 150hp</span>
                        <span className={`col-6 ${CarArticleCSS.carSeatCapacity}`}>Passengers: 4</span>
                        <span className={`col-6 ${CarArticleCSS.carLuggageCapacity}`}>Luggage: 450l</span>
                    </div>
                    <div className={CarArticleCSS.buttonList}>
                        <Button variant="outline-success" className={CarArticleCSS.button}>Edit</Button>
                        <Button variant="outline-danger" className={CarArticleCSS.button}>Delete</Button>
                    </div>
                </div>
            </article>

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