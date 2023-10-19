import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import AppCSS from "./App.module.css";

import { AuthProvider } from "./contexts/AuthContext";
import { ArticleProvider } from "./contexts/ArticleContext";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog";
import { Details } from "./components/Catalog/Details";
import { Footer } from "./components/Footer";
import { About } from "./components/About/About";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { Edit } from "./components/Catalog/Details/Edit";
import { Create } from "./components/Catalog/Create";
import { NotFoundPage } from "./components/404/NotFoundPage";
import { RequiredAuth } from "./components/RequiredAuth/RequiredAuth";

function App() {
  const isOwner = (ownerId, userId) => {
    return ownerId === userId;
  };
  return (
    <>
      <AuthProvider>
        <ArticleProvider>
          <Header />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<RequiredAuth />}>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/create" element={<Create />} />
                <Route
                  path="/catalog/:articleId"
                  element={<Details isOwner={isOwner} />}
                />
                <Route path="/catalog/:articleId/edit" element={<Edit />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </ArticleProvider>
      </AuthProvider>
    </>
  );
}

export default App;
