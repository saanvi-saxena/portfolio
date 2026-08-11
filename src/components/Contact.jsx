import "../styles/Contact.css";
import {
    FaGithub,
    FaLinkedin,
    FaCode,
    FaHackerrank,
    FaEnvelope,
} from "react-icons/fa";

function Contact() {
    const profiles = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            link: "https://github.com/saanvi-saxena",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/saanvi-saxena-10543739a",
        },
        {
            name: "CodeChef",
            icon: <FaCode />,
            link: "https://www.codechef.com/users/cse_25_0686",
        },
        {
            name: "LeetCode",
            icon: <FaCode />,
            link: "https://leetcode.com/u/Saanvi-18/",
        },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <div className="section-heading">
                    <p className="section-label">GET IN TOUCH</p>

                    <h2>
                        Let's <span>Connect</span>
                    </h2>

                    <p className="section-description">
                        I'm always open to learning, collaborating, and
                        connecting with people who enjoy building and
                        exploring technology.
                    </p>
                </div>

                <div className="contact-card glass">

                    <div className="contact-email">
                        <span className="contact-icon">
                            <FaEnvelope />
                        </span>

                        <div>
                            <h3>Have an idea or want to connect?</h3>
                            <p>Feel free to reach out.</p>
                        </div>
                    </div>

                    <a
                        href="mailto:saanvisaxena2026@gmail.com"
                        className="btn btn-primary"
                    >
                        Email Me ↗
                    </a>

                </div>

                <div className="social-links">
                    {profiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.link}
                            target="_blank"
                            rel="noreferrer"
                            className="social-link glass"
                            aria-label={profile.name}
                        >
                            <span>{profile.icon}</span>
                            <p>{profile.name}</p>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Contact;