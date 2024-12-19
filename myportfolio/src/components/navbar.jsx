// import logo from "../assets/Logo.png"
// import "./navbar.css"
// import resume from "../assets/Resume - Srinivas Sampath.pdf"


// function Navbar() {


//     return (
//         <div className="navbackgroud">
//             <div className="Navbar">
//                 <div className="navbarsec1">
//                     <img src={logo} alt="" />
//                     <p>SRINI</p>
//                 </div>
//                 <div className="navbarsec2">
//                     <p>Home</p>
//                     <p>About</p>
//                     <p>My Projects</p>
//                     <p>Contact Me</p>
//                     <span>
//                         <a href={resume} download = "Srini_Resume.pdf">
//                             <p>Download CV</p>
//                         </a>
//                     </span>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar




import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import "./navbar.css";
import resume from "../assets/Resume - Srinivas Sampath.pdf";
import menubar from "../assets/menubar.png"

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;

            // Set the active section based on scroll position
            if (scrollPos >= 0 && scrollPos < 190) {
                setActiveSection("home");
            } else if (scrollPos >= 480 && scrollPos < 950) {
                setActiveSection("about");
            } else if (scrollPos >= 1000 && scrollPos < 2200) {
                setActiveSection("project");
            } else if (scrollPos >= 2550) {
                setActiveSection("contactme");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handlemenubar = () => {
        const Navbarvertical = document.getElementById("Navbarvertical")
        const navbackgroud = document.getElementById("navbackgroud")

        Navbarvertical.style.right = "5px";
        Navbarvertical.style.transition = ".5s"
        navbackgroud.style.overflow = "visible";

    }

    const handleclsbtn = () => {
        const Navbarvertical = document.getElementById("Navbarvertical")
        const navbackgroud = document.getElementById("navbackgroud")

        Navbarvertical.style.right = "-100%";
        setTimeout(() => { navbackgroud.style.overflow = "hidden"; }, 200)

    }

    const scrollmobile = (value) => {

        if (value == "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleclsbtn()
        } else {
            const topvalue = document.getElementById(value).offsetTop;
            // console.log(topvalue)
            window.scrollTo({ top: topvalue - 80, behavior: "smooth" });
            handleclsbtn()

        }


    }


    return (
        <div className="navbackgroud" id="navbackgroud">


            <div className="Navbar">
                <div className="navbarsec1">
                    <img src={logo} alt="logo" />
                    <p>SRINI</p>
                </div>
                <div className="navbarsec2">
                    <p
                        style={{ color: activeSection === "home" ? "#F75023" : "white" }}
                        onClick={() => scrollmobile("home")}
                    >
                        Home
                    </p>
                    <p
                        style={{ color: activeSection === "about" ? "#F75023" : "white" }}
                        onClick={() => scrollmobile("pos1")}
                    >
                        About
                    </p>
                    <p
                        style={{ color: activeSection === "project" ? "#F75023" : "white" }}
                        onClick={() => scrollmobile("pos2")}
                    >
                        My Projects
                    </p>
                    <p
                        style={{ color: activeSection === "contactme" ? "#F75023" : "white" }}
                        onClick={() => scrollmobile("pos3")}
                    >
                        Contact
                    </p>
                    <span>
                        <a href={resume} download="Srini_Resume.pdf">
                            <p>Download CV</p>
                        </a>
                    </span>
                </div>

                <div id="menubar">
                    <img onClick={handlemenubar} src={menubar} alt="logo" />
                </div>
            </div>

            {/* MOBILE VIEW MENU BAR */}

            <div className="Navbarvertical" id="Navbarvertical">
                

                <div className="invisiblelayer" onClick={handleclsbtn}>

                    <div className="navbarsec2ver">
                        <p className="closebtn" id="closebtn" onClick={handleclsbtn}>X</p>

                        <p onClick={() => scrollmobile("home")} id='home'>Home</p>
                        <p onClick={() => scrollmobile("pos1")} >About</p>
                        <p onClick={() => scrollmobile("pos2")}>My Projects</p>
                        <p onClick={() => scrollmobile("pos3")}>Contact</p>



                        <span>
                            <a href={resume} download="Srini_Resume.pdf">
                                <p onClick={handleclsbtn}>Download CV</p>
                            </a>
                        </span>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default Navbar;


