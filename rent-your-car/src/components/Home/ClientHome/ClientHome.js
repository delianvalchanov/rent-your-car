import { Link } from "react-router-dom";
import UserHomeCSS from "./assets/UserHome.module.css";


export const ClientHome = () => {
    return (
        <div id="clientJourney" className={UserHomeCSS.wrapperClient}>
            <h2 className={UserHomeCSS.heading}>Your journey as a client</h2>
            <div className="row">
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Log in / Create your account
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <Link to={'/login'}
                            className={UserHomeCSS.link}
                            id={UserHomeCSS['createAcc']}>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Choose your ride
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <Link to={'/catalog'} className={UserHomeCSS.link} id={UserHomeCSS['chooseCar']}>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Contact the host
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <Link to={'/catalog'} className={UserHomeCSS.link} id={UserHomeCSS['contactHost']}>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}