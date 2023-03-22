import FooterCSS from "./assets/Footer.module.css";

export const Footer = () => {
    return (
        <div className={FooterCSS.wrapper}>
            <div className="row">
                <div className={`col-lg-8 ${FooterCSS.brandContainer}`}>
                    <a className={FooterCSS.brand} href="/"></a>
                </div>
                <div className={`col-lg-2 ${FooterCSS.contacts}`}>
                    <h3 className={FooterCSS.heading}>Contact us:</h3>
                </div>
                <div className={`col-lg-2 ${FooterCSS.tel}`}>
                    <ul>
                        <li><a className={FooterCSS.telNum
                        } href="tel:+359895121212">0895121212</a></li>
                        <li><a className={FooterCSS.telNum
                        } href="tel:+359895143212">0895143212</a></li>
                        <li><a className={FooterCSS.telNum
                        } href="tel:+359895125554">0895125554</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}