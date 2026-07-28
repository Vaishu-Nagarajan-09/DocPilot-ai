const dummyData = require("../data/dummyData.js");

const chatController = (req, res, next) =>{

    const {question} = req.body;

    let answer = "";

    const query =  question.toLowerCase();

    if(query.includes("skills")) {
        answer = dummyData.skills.join(", ");
    }
    else if(query.includes("projects")) {
        answer = dummyData.projects.map((project)=>{
            return `${project.title} - ${project.tech}`;
        }).join("\n, ");
    }
    else if(query.includes("education")) {
        answer = dummyData.education;
    }
    else if(query.includes("experience")) {
        answer = dummyData.experience;
    }
    else if(query.includes("name")) {
        answer = dummyData.name;
    }
    else{
        answer = "Sorry, I couldn't understand your question.";
    }
    res.status(200).json({
        success: true,
        answer
    });
};

module.exports = chatController;