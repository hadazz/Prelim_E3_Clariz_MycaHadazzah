import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Settings({ user, setUser }) {
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
    };

    return (
        <div className={`profile-container ${user.settings.darkMode ? "dark-mode" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <span className="navbar-brand fw-bold">Settings</span>
                    <button className="btn btn-primary" onClick={() => navigate("/profile")}>
                        Back to Profile
                    </button>
                </div>
            </nav>

            <div className="profile-content container mt-5 p-4 rounded-lg shadow-lg text-center">
                <h2 className="mb-4">Appearance Settings</h2>

                <div className="form-check form-switch d-flex justify-content-center align-items-center gap-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="darkModeSwitch"
                        checked={user.settings.darkMode}
                        onChange={toggleDarkMode}
                        style={{ width: "3rem", height: "1.5rem" }}
                    />
                    <label className="form-check-label" htmlFor="darkModeSwitch">
                        {user.settings.darkMode ? "Dark Mode" : "Light Mode"}
                    </label>
                </div>

                <div className="mt-4">
                    <p className="text-muted">
                        Toggle between light and dark mode to customize your viewing experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Settings;
