import "../styles/Skills.css";
import { FaCode, FaLaptopCode, FaTools, FaBookOpen } from "react-icons/fa";

function Skills() {
    const skillCategories = [
    {
        title: "Languages",
        icon: <FaCode />,
        skills: ["C++", "Python", "JavaScript"]
    },
    {
        title: "Frontend",
        icon: <FaLaptopCode />,
        skills: ["HTML", "CSS", "React"]
    },
    {
        title: "Tools",
        icon: <FaTools />,
        skills: ["Git", "GitHub", "VS Code"]
    },
    {
        title: "Currently Learning",
        icon: <FaBookOpen />,
        skills: ["Node.js", "Express.js", "SQL", "Cloud Computing"]
    }
];

    return (
        <section id="skills" className="skills">

            <div className="section-title">
                <h2>Technologies & Tools</h2>
                <p>The tools and technologies I use to learn, build, and bring ideas to life.</p>
            </div>

            <div className="skills-grid">

                {skillCategories.map((category) => (

                    <div className="glass skill-card" key={category.title}>

                       <div className="skill-header">
                            <span className="skill-icon">{category.icon}</span>
                            <h3>{category.title}</h3>
                        </div>

                        <div className="skill-list">

                            {category.skills.map((skill) => (

                                <span className="skill-pill" key={skill}>
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;