import "./home.css"
import logo from "../assets/Logo.png"
import me from "../assets/me1.png"


function Home() {

    return (
        <div className="home">
            <div className="homesec2mobile">
                <img src={me} alt="" />
            </div>

            <div className="homesec1">
                <p className="homehello">Hello I'm</p>
                <p className="homename">Srinivas Sampath</p>
                <p className="homedev">A <span>Web developer</span></p>
                <p className="homeinfo">I'm passionate about building modern, user-friendly websites and web applications.
                    With expertise in the MERN stack (MongoDB, Express.js, React, Node.js),
                    I aim to create innovative solutions that help businesses grow and succeed online.</p>
                {/* <button>About Me</button> */}
            </div>
            <div className="homesec2">
                <img src={me} alt="" />
            </div>

        </div>
    )
}

export default Home