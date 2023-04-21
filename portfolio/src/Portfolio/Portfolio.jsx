import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Portfolio.css";
import Footer from "./Footer"
import Home from "./Home"
import Abouts from "./Abouts"
import Contacts from "./Contacts"
import { Outlet, Link } from "react-router-dom";
import Project from "./Project";
import { AppBlockingTwoTone } from '@mui/icons-material';

const Layout = () => {
  return (
    <>
      <nav>
        <ul id="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

function Portfolio()
{
    return (
        <div id="body">
        <h1 id="name">VISHNU PRIYA </h1>
        <center>
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Abouts />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="project" element={<Project />} />
        </Route>
        </Routes>
        </BrowserRouter>
        </div>
        </center>
        <br></br>
        <Footer/>
        </div>
    );
}

export default Portfolio;