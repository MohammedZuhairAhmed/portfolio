import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./api/axios";
import responseData from "./response.json";
import footerResponseData from "./footerResponse.json"

function App() {
  const [load, updateLoad] = useState(true);
  const [headerLoaded,setHeaderLoaded] = useState(false);
  const [footerLoaded,setFooterLoaded] = useState(false);
  const [header,setHeader] = useState(null);
  const [footer,setFooter] = useState(null);
  const [homeData,setHomeData] = useState(null);
  const [aboutData,setAboutData] = useState(null);
  const [projectData,setProjectData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(async () => {
    try{
      const response = await axios.get(
        "/v3/content_types/header_field/entries?environment=profile-page&include[]=navbar.reference"
      );

      const footerData = await axios.get(
        "/v3/content_types/footer_field/entries?environment=profile-page"
      );
      
      setHeader(response.data.entries[0]);
      setFooter(footerData.data.entries[0]);
      setHomeData(response.data.entries[0].navbar[0].reference[0]);
      setAboutData(response.data.entries[0].navbar[1].reference[0]);
      setProjectData(response.data.entries[0].navbar[2].reference[0]);
      setHeaderLoaded(true);
      setFooterLoaded(true);
    }catch(err){
      console.error(err);
      setHeader(responseData.data.entries[0]);
      setFooter(footerResponseData.data.entries[0]);
      setHomeData(responseData.data.entries[0].navbar[0].reference[0]);
      setAboutData(responseData.data.entries[0].navbar[1].reference[0]);
      setProjectData(responseData.data.entries[0].navbar[2].reference[0]);
      setHeaderLoaded(true);
      setFooterLoaded(true);
    }
  },[]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {headerLoaded ? <Navbar content={header}/> : <Preloader load={load} />}
        <ScrollToTop />
        <Routes>
        <Route path="/" element={headerLoaded ? <Home home={homeData} /> : <Preloader load={load} />} />
          <Route path="/about" element={headerLoaded ? <About about={aboutData}/> : <Preloader load={load} />} />
          <Route path="/project" element={headerLoaded ? <Projects data={projectData}/> : <Preloader load={load} />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {footerLoaded ? <Footer content={footer}/> : <Preloader load={load} />}
      </div>
    </Router>
  );
}

export default App;
