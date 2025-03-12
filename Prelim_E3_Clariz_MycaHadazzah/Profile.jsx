import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Profile({ user, setUser }) {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState(user.name);

    const handleNameChange = (e) => {
        setTempName(e.target.value);
    };

    const handleSubmit = () => {
        setUser({ ...user, name: tempName });
        setIsEditing(false);
    };

    return (
        <div className={`profile-container ${user.settings.darkMode ? "dark-mode" : ""}`}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <span className="navbar-brand fw-bold">My Profile</span>
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary" onClick={() => navigate("/")}>
                            Home
                        </button>
                        <button className="btn btn-outline-light" onClick={() => navigate("/settings")}>
                            Settings
                        </button>
                    </div>
                </div>
            </nav>

            <div className="profile-content container mt-5 p-4 rounded-lg shadow-lg">
                <div className="text-center">
                    <div className="position-relative d-inline-block mb-4">
                        <ProfilePicture className="mb-3" />
                        <button className="btn btn-sm btn-primary rounded-circle position-absolute bottom-0 end-0">
                            <i className="bi bi-pencil"></i>
                        </button>
                    </div>

                    <div className="mt-4">
                        {isEditing ? (
                            <div className="input-group mb-3 justify-content-center">
                                <input
                                    type="text"
                                    className="form-control w-50"
                                    value={tempName}
                                    onChange={handleNameChange}
                                    placeholder="Enter your name"
                                />
                                <button className="btn btn-primary" onClick={handleSubmit}>
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="mb-3">
                                <UserInfo name={user.name} />
                                <button
                                    className="btn btn-outline-primary mt-2"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Name
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
