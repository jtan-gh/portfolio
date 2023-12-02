import "./about.css"
import { Heading } from "components/Heading/Heading";

const About = () => {
  return (
    <div className="about" >
      <div className="left">
        <img src={process.env.PUBLIC_URL + "/profile.png"} alt="about" />
      </div>
      <div className="right">
        <Heading text="Who am I?" style={{ padding: "3rem" }} />
        <p>
        I am a Vancouver-based Software Developer with a BSc in Computer Science. Versatile in software engineering, I specialize in creating seamless applications and excel in full-stack web development. Proficient in various languages and tech stacks, I craft robust solutions by leveraging critical thinking and innovative approaches. Beyond my professional work, I actively engage in data analysis, applying my expertise to gain insights and refine analytical skills.
        </p>
      </div>
    </div>
  )
}

export default About;
