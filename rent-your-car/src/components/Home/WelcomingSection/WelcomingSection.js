import WelcomingSectionCSS from "./assets/WelcomingSection.module.css";
import { QuickAccessBtns } from './QuickAccessBtns';
import { Container } from "react-bootstrap";

export const WelcomingSection = () => {
   return (
      <div className={WelcomingSectionCSS.wrapper}>
         <Container>
            <div className={`row ${WelcomingSectionCSS.content}`}>
               <h1 className={`col-12 ${WelcomingSectionCSS.slogan}`}>Your friend to make your tour easy</h1>
               <div className={`col-12 ${WelcomingSectionCSS.poppers}`}>
                  <QuickAccessBtns />
               </div>
            </div>
         </Container>
      </div >

   );
};
