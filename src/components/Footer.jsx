import "../styles/Footer.css";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    © 2026 <span>Saanvi Saxena</span> · Built with React
                </p>

                <button onClick={scrollToTop}>
                    Back to Top ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;