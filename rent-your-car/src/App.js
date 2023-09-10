import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import AppCSS from './App.module.css';

import { carServiceFactory } from './services/carService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Catalog } from "./components/Catalog"
import { Details } from "./components/Catalog/Details"
import { Footer } from "./components/Footer"
import { About } from './components/About/About';
import { Login } from './components/Login'
import { Register } from './components/Register';
import { Logout } from './components/Logout';
import { Edit } from './components/Catalog/Details/Edit';
import { Create } from './components/Catalog/Create';

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

      navigate('/catalog')
   }

   const onEdit = async (values) => {
      const result = await carService.edit(values._id, values)

      setArticles(state => state.map(x => x._id === values._id ? result : x))

      navigate(`/catalog/${values._id}`);
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
         const result = await authService.register(registerData)
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
      user: auth.user,
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
                  <Route path='/catalog/create' element={<Create onCreateArticle={onCreateArticle} />} />
                  <Route path='/catalog/:articleId' element={<Details />} />
                  <Route path='/catalog/:articleId/edit' element={<Edit onEdit={onEdit} />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/logout' element={<Logout />} />
               </Routes>
            </main>
            <Footer />
         </AuthContext.Provider>
      </>
   );
}

export default App;
