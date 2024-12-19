import "./myProject.css"
import thumbnail from "../assets/Thumbnail.png"
import git from "../assets/git.png"
import udemy from "../assets/udemy.png"
import tripadvisor from "../assets/tripadvisor.png"
import greenden from "../assets/greenden.png"
import nostra from "../assets/nostra.png"
import acttodo from '../assets/acttodo.png'

function MyProject() {

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="myproject" id="pos2">

            <h6>MY PROJECTS</h6>

            <div className="cardcontainer">

                <div className="card">
                    <img src={udemy} alt="" />
                    <p className="proname">Udemy Clone</p>
                    <p className="prodes1">A responsive Udemy clone with course
                        listings, homepage design, and basic navigation.</p>
                    <p className="prodes2">HTML /CSS /Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('https://srinivas883.github.io/Udemy-clone/')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('https://github.com/Srinivas883/Udemy-clone')} ><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={tripadvisor} alt="" />
                    <p className="proname">Trip Advisor Clone</p>
                    <p className="prodes1">A static TripAdvisor clone with a
                        homepage, travel listings, and basic navigation.</p>
                    <p className="prodes2">HTML /CSS /Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('https://srinivas883.github.io/TripAdvisor-Clone/')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('https://github.com/Srinivas883/TripAdvisor-Clone')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={greenden} alt="" />
                    <p className="proname">Greenden</p>
                    <p className="prodes1">A front-end website with Home, Product, and Contact
                        sections, featuring a shared navbar and footer.</p>
                    <p className="prodes2">HTML /Tailwind CSS /Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('https://srinivas883.github.io/Greenden-tailwindcss/index.html')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('https://github.com/Srinivas883/Greenden-tailwindcss')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={nostra} alt="nostra" />
                    <p className="proname">Nostra</p>
                    <p className="prodes1">Nostro is a sleek e-commerce site for
                        showcasing and selling clothing, built with HTML, CSS, and JavaScript.</p>
                    <p className="prodes2">HTML/ CSS /Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('https://srinivas883.github.io/Nostro_clone/')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('https://github.com/Srinivas883/Nostro_clone')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={acttodo} alt="" />
                    <p className="proname">ActToDo</p>
                    <p className="prodes1">ActToDo is a task management app.
                        Users must sign up before logging in and can add or delete activities.</p>
                    <p className="prodes2">HTML/ ReactJS/ Tailwind CSS</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('https://actodo-react-js-gilt.vercel.app/')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('https://github.com/Srinivas883/ActodoReactJS')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={thumbnail} alt="" />
                    <p className="proname">Live Weather App</p>
                    <p className="prodes1">description</p>
                    <p className="prodes2">HTML/CSS/Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={thumbnail} alt="" />
                    <p className="proname">Bulk Mail</p>
                    <p className="prodes1">description</p>
                    <p className="prodes2">HTML/CSS/Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={thumbnail} alt="" />
                    <p className="proname">Blog</p>
                    <p className="prodes1">description</p>
                    <p className="prodes2">HTML/CSS/Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>

                <div className="card">
                    <img src={thumbnail} alt="" />
                    <p className="proname">ecommerce clone</p>
                    <p className="prodes1">description</p>
                    <p className="prodes2">HTML/CSS/Javascript</p>
                    <div className="projectbtns">
                        <button className="button1" onClick={() => handleButtonClick('')}>👁️ Live demo</button>
                        <button className="button2" onClick={() => handleButtonClick('')}><img src={git} alt="" />Gitlink</button>
                    </div>
                </div>



            </div>



        </div>
    )
}

export default MyProject