import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AppCSS from './App.module.css'

import * as carService from './services/carService';

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Catalog } from "./components/Catalog"
import { Hosts } from "./components/Hosts"
import { Footer } from "./components/Footer"
import { About } from './components/About/About';
import { Login } from './components/Login'
import { Register } from './components/Register';
import { BecomeHost } from './components/BecomeHost'
import { Edit } from './components/Hosts/Edit';
import { Create } from './components/Create';



function App() {
   const navigate = useNavigate();

   const [articles, setArticles] = useState([]);

   useEffect(() => {
      carService.getAll()
         .then(result => {
            setArticles(result)
         })
   }, [])

   const onCreateArticle = async (data) => {
      const newArticle = await carService.create(data);

      setArticles(state => [...state, newArticle])

      navigate('/catalog')
   }

   return (
      <>
         <Header />

         <main id="main">
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/catalog' element={<Catalog articles={articles} />} />
               <Route path='/hosts' element={<Hosts />} />
               <Route path='/about' element={<About />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/becomehost' element={<BecomeHost />} />
               <Route path='/edit' element={<Edit />} />
               <Route path='/create' element={<Create onCreateArticle={onCreateArticle} />} />
            </Routes>
         </main>

         <Footer />
      </>
   );
}

export default App;
