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
                        I'm a second year Computer Science undergraduate who enjoys turning curiosity
                        into code. Whether I'm solving a tricky DSA problem, building a web project from 
                        scratch, or exploring the possibilities of AI, I love learning by getting hands-on.
                        I'm always experimenting with new ideas, building things, and looking for the next 
                        challenge that pushes me to grow.
                    </p>

                    <p>
                        Currently, I'm strengthening my Data Structures & Algorithms skills
                        in C++, building web applications with React, and exploring
                        Artificial Intelligence and Machine Learning with Python. I enjoy
                        solving coding problems, participating in hackathons, and working
                        on projects that help me learn by building.
                    </p>

                </div>

                <div className="about-card glass">

                    <div className="info">
                        <span>🎓</span>
                        <div>
                            <h3>Education</h3>
                            <p>B.Tech in Computer Science</p>
                            <p>ABES Engineering College, Ghaziabad (2025-2029)</p>
                        </div>
                    </div>

                    <div className="info">
                        <span>💻</span>
                        <div>
                            <h3>Interests</h3>
                            <p>Web Development • DSA • AI/ML</p>
                        </div>
                    </div>

                    <div className="info">
                        <span>🔎 </span>
                        <div>
                            <h3>Currently Exploring</h3>
                            <p>AI/ML •Backend Development</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;