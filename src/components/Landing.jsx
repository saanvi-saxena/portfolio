import "../styles/Landing.css";
import profileImg from "../assets/portfolio.jpg";

function Landing() {
    return (
        <section id="home" className="landing">
            <div className="landing-left">

                <div className="status-badge">
                    ✨ Open to Internships
                </div>

                <p className="intro">
                    👋 Hello, I'm
                </p>

                <h1>
                    <span>Saanvi Saxena</span>
                </h1>

                <h2>
                    Computer Science Undergraduate
                </h2>

                <p className="description">
                    Building modern web applications, solving real-world
                    problems, and continuously learning new technologies.
                </p>

                <div className="buttons">

                    <button className="btn btn-primary">
                        View Projects
                    </button>

                    <button className="btn btn-secondary">
                        Contact Me
                    </button>

                </div>

            </div>

            <div className="landing-right">

                <div className="orb">

            <div className="orb-ring"></div>

            <div className="orb-center">
                <img src={profileImg} alt="Saanvi Saxena" />
            </div>

        </div>

            </div>

        </section>
    );
}

export default Landing;