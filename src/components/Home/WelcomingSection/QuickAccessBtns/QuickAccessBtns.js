import QuickAccessBtnsCSS from "./assets/QuickAccessBtns.module.css"

export const QuickAccessBtns = () => {
    return (
        <div className={QuickAccessBtnsCSS.wrapper}>
            <ul className={QuickAccessBtnsCSS.steps}>
                <li className={QuickAccessBtnsCSS.step}>
                    <a href="/">Our mission</a>
                </li>
                <li className={QuickAccessBtnsCSS.step}>
                    <a href="/">Your journey as a client</a>
                </li>
                <li className={QuickAccessBtnsCSS.step}>
                    <a href="/">Your journey as a host</a>
                </li>
            </ul>
        </div>
    )
}