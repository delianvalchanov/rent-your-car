import { Link } from 'react-router-dom';
import UserHomeCSS from '../ClientHome/assets/UserHome.module.css';

export const HostHome = () => {
    return (
        <div id='hostJourney' className={UserHomeCSS.wrapperHost}>
            <h2 className={UserHomeCSS.heading}>Your journey as a host</h2>
            <div className="row">
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Log in / Create your account
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <Link className={UserHomeCSS.link}
                            id={UserHomeCSS['createAcc']}
                            to={'/login'}>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Setup your vehicle offer
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <Link className={UserHomeCSS.link} id={UserHomeCSS['becomeHost']} to={'/catalog/create'}>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Share your vehicle with others
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <Link className={UserHomeCSS.link} id={UserHomeCSS['setupOffer']} to={'/catalog'}>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}