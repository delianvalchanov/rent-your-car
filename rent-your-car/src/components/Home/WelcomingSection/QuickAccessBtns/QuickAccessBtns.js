import QuickAccessBtnsCSS from "./assets/QuickAccessBtns.module.css"

import { HashLink as Link } from 'react-router-hash-link';

export const QuickAccessBtns = () => {
    return (
        <div className={QuickAccessBtnsCSS.wrapper}>
            <ul className={QuickAccessBtnsCSS.steps}>
                <li className={QuickAccessBtnsCSS.step}>
                    <Link to='#ourMission'>Our mission</Link>
                </li>
                <li className={QuickAccessBtnsCSS.step}>
                    <Link to='#clientJourney'>Your journey as a client</Link>
                </li>
                <li className={QuickAccessBtnsCSS.step}>
                    <Link to='#hostJourney'>Your journey as a host</Link>
                </li>
            </ul>
        </div>
    )
}