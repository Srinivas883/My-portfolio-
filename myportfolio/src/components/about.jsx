import "./about.css"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import nodejs from "../assets/nodejs.png"
import reactlogo from "../assets/react1.png"
import mongodb from "../assets/db.png"
import git from "../assets/git.png"
import vscode from "../assets/vscode.png"



function About() {

    return (
        <div className="about" id="pos1">

            <h6>ABOUT ME</h6>
            <p>Aspiring full-stack developer with a strong foundation in
                HTML, CSS, JavaScript, React.js, Node.js, Express.js, and
                MongoDB. Former cybersecurity consultant with hands-on
                experience in automation and efficiency-driven solutions.
                Skilled in creating dynamic applications, optimizing
                workflows, and solving technical challenges. Driven by a
                passion for innovation and committed to building secure,
                scalable, and user-friendly web applications.</p>
            <p className="divider"></p>
            <h5>Education</h5>
            <p>2021 - B.Sc., Mysore University</p>
            <p>2023 - MCA, JAIN University</p>
            <h5>Experience</h5>
            <p>2021 - 2024 </p>
            <p>Cybersecurity Consultant (Project Management Technology & Services LLC, Muscat, Oman)</p>
            <p>Prepared documentation and ensured compliance with ISMS-ISO:27001 standards.
                Streamlined workflows using MS Office Suite and Office 365 tools.
                Assisted in ISMS implementation and audit preparation.</p>
            <h5>Skills</h5>
            <div className="skill">
                <div className="skillsec1">
                    <img className="s1" src={html} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={css} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={js} alt="Javascript" />
                    <p>Javascript</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={reactlogo} alt="React" />
                    <p>React</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={mongodb} alt="MongoDB" />
                    <p>MongoDB</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={git} alt="git" />
                    <p>GitHub</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={vscode} alt="VS code" />
                    <p>VS Code</p>
                </div>
                <div className="skillsec1">
                    <img className="s1" src={nodejs} alt="Node.js" />
                    <p>Node.js</p>
                </div>



            </div>

        </div>
    )
}

export default About