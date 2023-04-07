import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AppCSS from './App.module.css'

import { carServiceFactory } from './services/carService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';
import { useAuthService } from './hooks/useAuthService';

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Catalog } from "./components/Catalog"
import { Details } from "./components/Catalog/Details"
import { Hosts } from "./components/Hosts"
import { Footer } from "./components/Footer"
import { About } from './components/About/About';
import { Login } from './components/Login'
import { Register } from './components/Register';
import { Logout } from './components/Logout';
import { BecomeHost } from './components/Hosts/BecomeHost'
import { Edit } from './components/Hosts/Edit';
import { Create } from './components/Hosts/Create';



function App() {
   const navigate = useNavigate();
   const [articles, setArticles] = useState([]);
   const [auth, setAuth] = useState({});
   const carService = carServiceFactory(auth.accessToken);
   const authService = authServiceFactory(auth.accessToken)

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

   const onLoginSubmit = async (data) => {
      try {
         const result = await authService.login(data)
         setAuth(result)

         navigate('/catalog')
      } catch (error) {
         console.log(error);
      }
   }

   const onRegisterSubmit = async (values) => {
      const { confirmPassword, ...registerData } = values;

      if (confirmPassword !== registerData.password) {
         return;
      }

      try {
         const result = await authServiceFactory.register(registerData)
         setAuth(result)

         navigate('/catalog')
      } catch (error) {
         console.log(error);
      }
   }

   const onLogout = async () => {
      await authService.logout();

      setAuth({});
   };

   const context = {
      onLoginSubmit,
      onRegisterSubmit,
      onLogout,
      userId: auth._id,
      token: auth.accessToken,
      email: auth.email,
      isAuthenticated: !!auth.accessToken
   }

   return (
      <>
         <AuthContext.Provider value={context}>
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
                  <Route path='/logout' element={<Logout />} />
                  <Route path='/hosts/becomehost' element={<BecomeHost />} />
                  <Route path='/hosts/edit' element={<Edit />} />
                  <Route path='/hosts/create' element={<Create onCreateArticle={onCreateArticle} />} />
               </Routes>
            </main>
            <Footer />
         </AuthContext.Provider>
      </>
   );
}

export default App;
