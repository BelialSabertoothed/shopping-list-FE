import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListDetail from './Components/listDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/list-detail" element={<ListDetail/>} />

      </Routes>
    </Router>
  );
}

export default App;
