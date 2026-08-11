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
                    I build practical applications, sharpen my problem-solving skills, and 
                    explore new technologies to turn ideas into meaningful projects.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        View Projects ↗
                    </a>

                    <a href="#contact" className="btn btn-secondary">
                        Contact Me ↗
                    </a>
                </div>

                <div className="hero-stats">
                <div className="hero-stat">
                    <strong>80+</strong>
                    <span>Day Coding Streak</span>
                </div>

                <div className="hero-stat">
                    <strong>300+</strong>
                    <span>Problems Solved</span>
                </div>

                <div className="hero-stat">
                    <strong>3+</strong>
                    <span>Projects Built</span>
                </div>

                <div className="hero-stat">
                    <strong>3+</strong>
                    <span>Certifications</span>
                </div>
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