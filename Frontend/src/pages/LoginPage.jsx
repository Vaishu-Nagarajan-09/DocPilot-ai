import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import robot from '../assets/robot1.png';

const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [showLoginPwd, setShowLoginPwd] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev, [name]: value
        }))
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!loginData.email || !loginData.password) {
            alert("Please enter email and password");
            return
        }

        try {
            const response = await axios.post("http://localhost:3000/login/userLogin", loginData);
            const data = response.data;
        
            if (data.success) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.userLoginDetail));
                
                alert("Login Successfully!");
                navigate("/dashboard");

                setLoginData({
                    email: "",
                    password: ""
                });

            } else {
                alert("Your Plan validity expired...Please create a new account");
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="container-fluid ai-page">
                    <div className="navbar-brand text-white fw-bold py-2 fs-4 ai-navbar">
                        🤖 DocPilot AI
                    </div>
                <div className="container mt-2">
                    <div className="row d-flex justify-content-center align-items-center min-vh-100">
                        <div className="col-lg-5 col-md-8">
                            <div className="ai-log-card ">
                                <div className="card-body p-3">
                                    <h2 className="card-title text-center mb-1">Welcome Back!</h2>
                                    <p className='text-center small'> Login to continue your AI journey.</p>

                                    <form onSubmit={handleLogin}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label"><i className="bi bi-envelope"></i> Email address</label>
                                            <input type="email" className="form-control ai-input" name="email" value={loginData.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3 password-show">
                                            <label htmlFor="exampleInputPassword1" className="form-label"><i className="bi bi-lock"></i> Password</label>
                                            <input type={showLoginPwd ? "text" : "password"} className="form-control ai-input" name="password" value={loginData.password} onChange={handleChange} id="exampleInputPassword1" />
                                            <span><i className={showLoginPwd ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} onClick={() => setShowLoginPwd((prev) => !prev)}></i></span>
                                        </div>
                                        <button type="submit" className="btn-log w-100 mb-2">Login</button>

                                        <div id='exampleText' className='form-text'>
                                            <p className='mb-1 ai-text'>Don't have an account?</p>
                                            <Link to="/" className='d-block text-center link-log fs-5'>
                                                Create Account
                                            </Link>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage;