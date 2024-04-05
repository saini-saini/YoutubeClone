import Header from "./components/header/header";
import Sidebar from "./components/sideBar/sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen";
import "./_app.scss";
import { useState } from "react";
import LoginScreen from "./screen/loginScreen/loginScreen";
import { BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import PageNotFound from "./screen/pageNotFound";

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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomeScreen /></Layout>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/search" element={<Layout><h1>search result</h1></Layout>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
