import React, { useState, useRef } from "react";

function ProfilePicture({ className }) {
    const defaultImage = "https://via.placeholder.com/150x150";
    const [profileImage, setProfileImage] = useState("https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-1/449857124_1637006080472537_7002512653901432547_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGvBB6Wn0udDChqWqU6Yn0E96I7TvRz8XX3ojtO9HPxdVgAH7a4JPQDM3Qp-BYk0w7iMLam6fgLajRKvrEA_xK4&_nc_ohc=Qipi5pDPHcsQ7kNvgFKG7ot&_nc_oc=AdhuqXdm02tUUP2f_uhwM2qXJ32g67baNHhblDyHVqbhlkskXSrmVxpge6G38dgU6FTAnqr65eIQGoRkBQ357Hw4&_nc_zt=24&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=A4FJ_assXm6KZr4zYJbZv6o&oh=00_AYHBfYEjCvE-Mdcr-BLsEDMOTz3iDrNOUQQsnw94uCxwMw&oe=67D32855");
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="position-relative" style={{ display: "inline-block" }}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: "none" }}
            />
            <img
                src={profileImage}
                alt="Profile"
                className={`rounded-circle ${className || ''}`}
                style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "3px solid #fff",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    cursor: "pointer"
                }}
                onClick={handleImageClick}
                onError={(e) => {
                    e.target.src = defaultImage;
                }}
            />
            <div
                className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-1"
                style={{ cursor: "pointer" }}
                onClick={handleImageClick}
            >
                <i className="bi bi-pencil text-white"></i>
            </div>
        </div>
    );
}

export default ProfilePicture;
