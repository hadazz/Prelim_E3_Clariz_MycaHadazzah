import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [user, setUser] = useState({ name: "John Doe", settings: { darkMode: false } });
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
                <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
            </Routes>
        </Router>
    );
}

export default App;