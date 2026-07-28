import React, { useState } from "react";


const UploadSection = () => {

    const [error, setError] = useState("");
    const [file, setFile] = useState(null);

    const handleUploadFile = (e) => {
        const fileUploaded = e.target.files[0];

        const allowedFiles = [
            "application/pdf",
            "application/doc",
            "application/docx",
            "image/jpg",
            "image/png"
        ];
        const maxFileSize = 5 * 1024 * 1024;
        
        if (fileUploaded) {
            if (!allowedFiles.includes(fileUploaded.type)) {
                setError("Not a valid file");
                return;
            }
            if (fileUploaded.size > maxFileSize) {
                setError("File size exceed");
                return;
            }
        }
        setError("");
        setFile(fileUploaded);
    }

    return (
        <>
            <div className="card mt-4 ai-cd">
                <h4 className="text-decoration-underline ms-2 mt-2 text-center">Upload the file</h4>
            <input type="file" className="form-control file-input mt-3" onChange={handleUploadFile} />
           {error && (<h3 className="text-danger mt-2">{error}</h3>)}
            <button className="btn-cd" disabled={!file}>Submit</button>
            </div>
        </>
    )
}

export default UploadSection;