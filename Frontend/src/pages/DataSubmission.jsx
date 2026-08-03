import React, { useContext, useEffect, useState } from "react";
import { UserDetailsContext } from "../context/UserDetailsContext";
import axios from "axios";
import robot from "../assets/robot1.png";
import { useNavigate } from "react-router-dom";


const DataSubmission = () => {
    const { getCompleteData } = useContext(UserDetailsContext);

    const [completeObjectData, setCompleteObjectData] = useState();

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const data = getCompleteData();
        setCompleteObjectData(data);
    }, []);

    useEffect(() => {
        if (completeObjectData) {
            callApi();
        }
    }, [completeObjectData])

    const callApi = async () => {
        try {
            const response = await axios.post('https://docpilot-ai-backend-rdwn.onrender.com/submission/userSubmit', completeObjectData);
    
            //keep loading screen visible for 3 seconds
            setTimeout(() => {
                navigate("/login");
            }, 3000);

        }
        catch (err) {
            console.log(err);
        }

    }

    if (loading) {
        return (
            <>
                <div className="container-fluid ai-page">
                    <div className="navbar-brand text-white fw-bold py-2 fs-4 ai-navbar">
                        🤖 DocPilot AI
                    </div>
                    <div className=" text-center">
                        <img
                            src={robot}
                            className="robot-side1"
                        />
                    </div>
                    <h4 className="text-center text-white mt-1">Submitting your details.....</h4>
                    <h4 className="text-center text-white mt-2"><i className="bi bi-hourglass-split"></i> Please wait while we create your account...</h4>

                    <div className="text-center">
                        <div className="spinner-border" style={{ color: "#A855F7" }} role="status">
                            <span className="visually-hidden">Loading....</span>

                        </div>
                    </div>
                </div>

            </>

        );
        return null;
    }
}
export default DataSubmission;