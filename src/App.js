import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import AppCSS from './App.module.css'

import { Header } from "./components/Header"
import { HomeContent } from "./components/HomeContent"
import { CarArticleList } from "./components/CarArticleList"
import { Hosts } from "./components/Hosts"
import { Footer } from "./components/Footer"
import { About } from './components/About/About';
import { Login } from './components/Login'
import { Register } from './components/Register';
import { BecomeHost } from './components/BecomeHost'



function App() {
   return (
      <>
         <Header />

         <main id="main">
            <Routes>
               <Route path='/' element={<HomeContent />} />
               <Route path='/catalog' element={<CarArticleList />} />
               <Route path='/hosts' element={<Hosts />} />
               <Route path='/about' element={<About />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/becomehost' element={<BecomeHost />} />
            </Routes>
         </main>

         <Footer />
      </>
   );
}

export default App;
