import Header from "./components/header/header";
import Sidebar from "./components/sideBar/sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen";
import "./_app.scss";
import { useEffect, useState } from "react";
import LoginScreen from "./screen/loginScreen/loginScreen";
import { Routes, Route, Redirect, useNavigate } from "react-router-dom";
import PageNotFound from "./screen/pageNotFound";
import { useSelector } from "react-redux";
import WatchScreen from "./screen/watchScreen/watchScreen";

const Layout = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const handleToggleSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container">
        <Sidebar sideBar={sideBar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector(state => state.login)

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login")
    }
  }, [accessToken, loading, navigate])

  return (
    <Routes>
      <Route path="/" element={<Layout><HomeScreen /></Layout>} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/search" element={<Layout><h1>search result</h1></Layout>} />
      <Route path="/watch/:id" element={<Layout><WatchScreen/></Layout>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
