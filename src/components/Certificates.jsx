import "../styles/Certificates.css";

function Certificates() {
    const certificates = [
        {
            title: "500 Difficulty Rating",
            issuer: "CodeChef",
            description:
                "Achievement demonstrating consistent problem-solving practice through coding challenges.",
            link: "https://www.codechef.com/certificates/public/b863d60",
        },
        {
            title: "Problem Solving (Basic)",
            issuer: "HackerRank",
            description:
                "Certificate validating foundational problem-solving and programming skills.",
            link: "https://www.hackerrank.com/certificates/iframe/dad76fc8f905",
        },
        {
            title: "JavaScript (Basic)",
            issuer: "HackerRank",
            description:
                "Certificate validating foundational JavaScript concepts and programming skills.",
            link: "https://www.hackerrank.com/certificates/iframe/b523393714ef",
        },
    ];

    return (
        <section id="certificates" className="certificates-section">
            <div className="certificates-container">

                <div className="section-heading">
                    <p className="section-label">CERTIFICATIONS & ACHIEVEMENTS</p>

                    <h2>
                        Learning & <span>Milestones</span>
                    </h2>

                    <p className="section-description">
                        Certifications and achievements that reflect my
                        continuous learning and growing technical skills.
                    </p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((certificate) => (
                        <article
                            className="certificate-card glass"
                            key={certificate.title}
                        >
                            <div className="certificate-icon">
                                🏆
                            </div>

                            <div className="certificate-content">
                                <p className="certificate-issuer">
                                    {certificate.issuer}
                                </p>

                                <h3>{certificate.title}</h3>

                                <p>{certificate.description}</p>

                                <a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    View Certificate ↗
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Certificates;