import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Python from "./page/Python";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import User from "./page/User";
import CreateData from "./page/CreateData";
import NotFound from './page/NotFound';
import HowToUse from "./page/HowToUse";
import Login from './page/Login';
import LandingPage from "./page/LandingPage";
import SignUp from "./page/SignUp";
import ProtectedRoute from './components/ProtectedRoute';
import Profile from "./page/Profile";
import SelectLang from "./page/SelectLang";
import SQL from "./page/SQL";
import Loading from "./page/Loading";
import { useLoading } from "./page/LoadingContext";

function App() {

  const { dataLoading } = useLoading();

  const ShowCustomNav = () => {
    const location = useLocation();
    const setNavBar = location.pathname === "/";
    return setNavBar ? null : <NavBar />
  }

  const isAuth = localStorage.getItem('userAuth');

  if (dataLoading) {
    return <Loading />
  }

  return (
    <div>
    <BrowserRouter>
    <ShowCustomNav />
    <Routes>

      {/* UnAuthorized Route */}
      
      {!isAuth && (
        <>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/use" element={<HowToUse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      )}



    {/* Authorized Route */}
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Navigate to="/language" />}/>
      <Route path="/login" element={<Navigate to='/language' />} />
      <Route path="/signup" element={<Navigate to='/language' />} />
      <Route path="/python" element={<Python />} />
      <Route path="/user" element={<User />}/>
      <Route path="/senddata" element={<CreateData />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/language" element={<SelectLang />} />
      <Route path="/sql" element={<SQL />} />
      <Route path="/loadingdata" element={<Loading />} />
    </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
