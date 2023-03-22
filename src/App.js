import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppCSS from './App.module.css'

import { Header } from "./components/Header"
import { WelcomingSection } from "./components/WelcomingSection"
import { HomeContent } from "./components/HomeContent"
import { CarArticleList } from "./components/CarArticleList"
import { Hosts } from "./components/Hosts"
import { Footer } from "./components/Footer"
import { AboutUsPage } from './components/AboutUsPage';



function App() {
   return (
      <>
         <Header />

         <div id="main">
            <AboutUsPage />
         </div>

         <Footer />
      </>
   );
}

export default App;
