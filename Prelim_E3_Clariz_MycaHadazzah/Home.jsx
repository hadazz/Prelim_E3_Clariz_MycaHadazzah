import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="hero-content">
                <h1 className="display-4 mb-4">Welcome to Your Profile Hub</h1>
                <p className="lead mb-4">Manage your profile, customize settings, and explore features</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button 
                        className="btn btn-primary btn-lg px-4 me-md-2" 
                        onClick={() => navigate("/profile")}
                    >
                        View Profile
                    </button>
                    <button 
                        className="btn btn-outline-light btn-lg px-4" 
                        onClick={() => navigate("/settings")}
                    >
                        Settings
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
