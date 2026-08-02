import "../styles/About.css";

function About() {
    return (
        <section id="about" className="about">

            <div className="section-title">
                <h2>About Me</h2>
                <p>Get to know me</p>
            </div>

            <div className="about-content">

                <div className="about-text">

                    <p>
                        I'm a Computer Science undergraduate with a strong
                        interest in software development and problem solving.
                        I enjoy transforming ideas into clean, responsive,
                        and user-friendly applications.
                    </p>

                    <p>
                        Currently, I'm strengthening my Data Structures & Algorithms 
                        skills, building responsive web applications with React, and 
                        exploring AI and Machine Learning. I enjoy solving coding problems, 
                        participating in hackathons, and creating projects that combine 
                        creativity with real-world impact.
                    </p>

                </div>

                <div className="about-card glass">

                    <div className="info">
                        <span>🎓</span>
                        <div>
                            <h3>Education</h3>
                            <p>B.Tech in Computer Science (ABES Engineering College, Ghaziabd)</p>
                        </div>
                    </div>

                    <div className="info">
                        <span>💻</span>
                        <div>
                            <h3>Interests</h3>
                            <p>Web Development • DSA • AI</p>
                        </div>
                    </div>

                    <div className="info">
                        <span>📍</span>
                        <div>
                            <h3>Location</h3>
                            <p>Ghaziabad, India</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;