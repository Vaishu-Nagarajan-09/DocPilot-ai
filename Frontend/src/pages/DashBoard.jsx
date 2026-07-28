import React, { useState } from "react";
import UploadSection from "../components/UploadSection";
import WelcomeCard from "../components/WelcomeCard";
import ChatCard from "../components/ChatCard";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";


const DashBoard = () => {
    const [answers, setAnswers] = useState([]);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");


    }

    return (
        <>
            <nav className="navbar navbar-expand-lg ai-navbar1 px-4">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold fs-4" href="#">
                        🤖 DocPilot AI
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >   <i className="bi bi-list text-white fs-2"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto gap-4">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>

                        <button className="btn px-4" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <UploadSection />
                </div>
                <div className="col-lg-8 d-flex flex-column gap-4">
                    <WelcomeCard answers={answers} />
                    <ChatCard setAnswers={setAnswers} />
                </div>
            </div>
        </>
    )
}

export default DashBoard;