import { click } from '@testing-library/user-event/dist/click';

import UserHomeCSS from '../ClientHome/assets/UserHome.module.css';

export const HostHome = () => {
    return (
        <div className={UserHomeCSS.wrapperHost}>
            <h2 className={UserHomeCSS.heading}>Your journey as a host</h2>
            <div className="row">
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Log in / Create your account
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <a className={UserHomeCSS.link}
                            id={UserHomeCSS['createAcc']}
                            href="/">
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Become a host
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <a className={UserHomeCSS.link} id={UserHomeCSS['becomeHost']} href="/">
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Setup your vehicle offer
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <a className={UserHomeCSS.link} id={UserHomeCSS['setupOffer']} href="/">
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}