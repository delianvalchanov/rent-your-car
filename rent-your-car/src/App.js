import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AppCSS from './App.module.css'

import * as carService from './services/carService';

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Catalog } from "./components/Catalog"
import { Details } from "./components/Catalog/Details"
import { Hosts } from "./components/Hosts"
import { Footer } from "./components/Footer"
import { About } from './components/About/About';
import { Login } from './components/Login'
import { Register } from './components/Register';
import { BecomeHost } from './components/Hosts/BecomeHost'
import { Edit } from './components/Hosts/Edit';
import { Create } from './components/Hosts/Create';



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

      navigate('/hosts')
   }

   return (
      <>
         <Header />

         <main id="main">
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/catalog' element={<Catalog articles={articles} />} />
               <Route path='/catalog/:articleId' element={<Details />} />
               <Route path='/hosts' element={<Hosts articles={articles} />} />
               <Route path='/about' element={<About />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/hosts/becomehost' element={<BecomeHost />} />
               <Route path='/hosts/edit' element={<Edit />} />
               <Route path='/hosts/create' element={<Create onCreateArticle={onCreateArticle} />} />
            </Routes>
         </main>

         <Footer />
      </>
   );
}

export default App;
