import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ToDo from "../../Assets/Projects/ToDo.jpg";
import Calculator from "../../Assets/Projects/Calculator.png";
import Kapital from "../../Assets/Projects/Kapital.png";
import chatify from "../../Assets/Projects/chatify.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My Portfolio build with React.js and React-Bootstrap. this web app habe different module which shows my project, my resume and something about me"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kapital}
              isBlog={false}
              title="Kapital"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Armaan-pal/Kapital"
              demoLink="kapital-six.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To-Do List"
              description="This is a simple To-Do list based on react"
              ghLink="https://github.com/Armaan-pal/To-Do-List"
              demoLink="todolist-armaan-pal.vercel.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="This web app is an calculator based on react. I have written custom Css for styling of this application, Concepts like hooks have been used in creating this application"
              ghLink="https://github.com/Armaan-pal/Calculator"
              demoLink="calculator-armaan-pal.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
