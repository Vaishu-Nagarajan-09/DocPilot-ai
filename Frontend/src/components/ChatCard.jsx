import React, { useState } from "react";
import axios from "axios";

const ChatCard = ({ setAnswers }) => {

    const [userQuestion, setUserQuestion] = useState("");

    const handleQuery = async() => {
        try {
            const response = await axios.post("http://localhost:3000/chat/ask",{
                question : userQuestion
            });

            setAnswers((prevData) => {
                return [...prevData, response.data.answer];
            });
            setUserQuestion("");
        }
        catch(e){
            console.log(e);
        }
        
    }

    return (
        <>
            <div className="card ai-cd mt-5">
                <h5 className="text-center mt-2 text-decoration-underline">Ask your Questions</h5>
                <input type="text" className="form-control txt-input" value={userQuestion} onChange={(e) => setUserQuestion(e.target.value)} placeholder="Ask about your document" />
                <button type="submit" className="btn-cd1 w-100" onClick={handleQuery}>Submit</button>
            </div>
        </>
    )
}

export default ChatCard;