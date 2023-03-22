import UserHomeCSS from "./assets/UserHome.module.css";


export const ClientHome = () => {
    return (
        <div className={UserHomeCSS.wrapperClient}>
            <h2 className={UserHomeCSS.heading}>Your journey as a client</h2>
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
                        Choose your ride
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <a className={UserHomeCSS.link} id={UserHomeCSS['chooseCar']} href="/">
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className={UserHomeCSS.label}>
                        Contact the host
                    </h3>
                    <div className={UserHomeCSS.linkWrapper}>
                        <a className={UserHomeCSS.link} id={UserHomeCSS['contactHost']} href="/">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}