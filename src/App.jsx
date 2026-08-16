import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
}

export default App;