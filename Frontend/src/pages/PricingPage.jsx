import React, { useContext } from 'react';
import { UserDetailsContext } from '../context/UserDetailsContext';
import { useNavigate } from 'react-router-dom';

function PricingPage() {
    const { saveSelectDetail, getCompleteData, userDetailData } = useContext(UserDetailsContext);

    const navigate = useNavigate();

    const handleSelectedPlan = (plan) => {


        if (userDetailData && plan) {
            saveSelectDetail(plan);
            navigate('/submission');
        } else {
            alert("Please complete a registration and select a plan");
        }
    }

    return (
        <div className="container-fluid ai-page">
            <div className="navbar-brand text-white fw-bold py-2 fs-4 ai-navbar">
                🤖 DocPilot AI
            </div>
            <div className='container'>
                <h5 className='text-center ai-txt text-decoration-underline mt-2'>Select your Plan</h5>
                <p className='text-white'>"From active listening to strategic implementations, we redefine system for enhanced efficiency, simplified processes, and informed decision-making."</p>
                <div className="row mt-4 g-4">

                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="ai-card1 h-100">
                            <div className="basic-box">
                                <i className="bi bi-send-arrow-up-fill arrow"></i>
                                <h4 className='ai-txt rounded p-2 text-center'>Basic</h4>
                            </div>
                            <div className="card-body1">
                                <h5 className='card-title text-center fs-4 mb-4'><span className='text-primary'>Rs: 0</span> /24 hours</h5>
                                <p><i className="bi bi-check2"></i>Max file size: 5 MB</p>
                                <p><i className="bi bi-check2"></i>OCR Support: YES</p>
                                <p><i className="bi bi-check2"></i>Customer support: NO</p>
                                <p><i className="bi bi-check2"></i>Document Upload(5)</p>
                                <p><i className="bi bi-check2"></i>Total session: UNLIMITED</p>
                                <button className='btn-chk w-100'
                                    onClick={() => handleSelectedPlan({
                                        planName: "Basic",
                                        price: 0,
                                        duration: "24 hours"
                                    })
                                    }>Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="ai-card1 h-100">
                            <div className="basic-box">
                                <i className="bi bi-star arrow"></i>
                                <h4 className='ai-txt rounded p-2 text-center'>Pro</h4>
                            </div>
                            <div className="card-body1">
                                <h5 className='card-title text-center fs-4 mb-4'><span className='text-primary'>Rs 999</span> /Week</h5>
                                <p><i className="bi bi-check2"></i>Max file size: 5 MB</p>
                                <p><i className="bi bi-check2"></i>OCR Support: YES</p>
                                <p><i className="bi bi-check2"></i>Customer support: YES(Email)</p>
                                <p><i className="bi bi-check2"></i>Document Upload(10)</p>
                                <p><i className="bi bi-check2"></i>Total session: UNLIMITED</p>
                                <button className='btn-chk w-100'
                                    onClick={() => handleSelectedPlan({
                                        planName: "Pro",
                                        price: 999,
                                        duration: "One Week"
                                    })
                                    }>Choose Pro</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="ai-card1 h-100">
                            <div className="basic-box">
                                <i className="bi bi-gem arrow"></i>
                                <h4 className='ai-txt rounded p-2 text-center'>Premium</h4>
                            </div>
                            <div className="card-body1">
                                <h5 className='card-title text-center fs-4 mb-4'><span className='text-primary'>Rs 3499</span> /Month</h5>
                                <p><i className="bi bi-check2"></i>Max file size: 5 MB</p>
                                <p><i className="bi bi-check2"></i>OCR Support: YES</p>
                                <p><i className="bi bi-check2"></i>Customer support: YES(Email)</p>
                                <p><i className="bi bi-check2"></i>Document Upload(20)</p>
                                <p><i className="bi bi-check2"></i>Total session: UNLIMITED</p>
                                <button className='btn-chk w-100'
                                    onClick={() => handleSelectedPlan({
                                        planName: "Premium",
                                        price: 3499,
                                        duration: "One Month"
                                    })
                                    }>Choose Premium</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PricingPage