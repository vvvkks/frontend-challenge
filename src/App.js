import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import MainBoard from "./components/mainBoard/MainBoard";
import Lovely from "./components/lovelyKittens/Lovely";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainBoard />} />
                    <Route path="/lovely" element={<Lovely />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

