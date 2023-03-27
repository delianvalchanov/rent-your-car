import WelcomingSectionCSS from "./assets/WelcomingSection.module.css";
import { QuickAccessBtns } from './QuickAccessBtns';

export const WelcomingSection = () => {
   return (
      <div className={`row ${WelcomingSectionCSS.wrapper}`}>
         <h1 className={` col-12 ${WelcomingSectionCSS.slogan}`}>Your friend to make your tour easy</h1>
         <div className={`col-12 ${WelcomingSectionCSS.poppers}`}>
            <QuickAccessBtns />
         </div>
      </div>
   );
};
