import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserDetailsContext } from '../context/UserDetailsContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Theme.css';
import robot from '../assets/robot1.png';


function RegistrationPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });
    const [showPassword, setShowPassword] = useState(false);

    const { saveUserDetail } = useContext(UserDetailsContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
        
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        //check the terms accept or not then only work create account otherwise disable create account.
        if (!formData.terms) {
            alert("Please accept the terms and conditions.");
            return;
        }


        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/registration/verify`,
                {
                    user: formData
                }
            );
            //user already exists to show alert box
            const data = response.data;
            if (data.success) {
                saveUserDetail({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                });
                alert(data.message);
                navigate('/pricing');


            } else {
                alert("user already exists");
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <div className="container-fluid ai-page">               
                    <div className="navbar-brand text-white fw-bold fs-4 py-2 ai-navbar">
                        🤖 DocPilot AI
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">

                            <div className="col-12 d-flex justify-content-center">
                                <div className="ai-card">
                                    <div className='row align-items-center'>
                                        {/* left content */}
                                        <div className="col-lg-6 left-content">
                                            <div className="card-body p-3">
                                                <h5 className="card-title-ai fs-4 ">Create Your <span className='title'>Smart WorkSpace</span></h5>
                                                <p className='small mb-1'>Please fill in the details below.</p>

                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-2">
                                                        <label htmlFor="exampleInputEmail1" className="form-label mb-1"><i className="bi bi-person"></i> Enter your Name:</label>
                                                        <input type="text" className="form-control ai-input" id='text-name' name='name' value={formData.name} onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="exampleInputEmail1" className="form-label mb-1"><i className="bi bi-envelope"></i> Enter your Email</label>
                                                        <input type="email" className="form-control ai-input" id='text-email' name='email' value={formData.email} onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-2 password-show">
                                                        <label htmlFor="exampleInputPassword1" className="form-label mb-1"><i className="bi bi-lock"></i> Password</label>
                                                        <input type={showPassword ? "text" : "password"} className="form-control ai-input" id='text-password' name='password' value={formData.password} onChange={handleChange} />
                                                        <span><i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} onClick={() => setShowPassword((prev) => !prev)}></i></span>
                                                    </div>
                                                    <div className="mb-2 form-check">
                                                        <input type="checkbox" className="form-check-input ai-check" id='term-checked' name='terms' checked={formData.terms} onChange={handleChange} />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">I agree the Terms & Conditions.</label>
                                                    </div>
                                                    <button type="submit" disabled={!formData.terms} className="ai-btn w-100 mb-1">Create Account</button>

                                                    <div id='exampleText' className='form-text'>
                                                        <p className='mb-0 ai-para'>Already have an account?</p>
                                                        <Link to="/login" className='d-block text-center link-log fs-5'>
                                                            Login
                                                        </Link>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center right-content ps-0">
                                            <img
                                                src={robot}
                                                className="robot-side"
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </>
            )
}

            export default RegistrationPage;