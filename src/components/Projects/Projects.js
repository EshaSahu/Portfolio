import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PlagCheck from "../../Assets/Projects/plagCheck.png";
import api from "../../Assets/Projects/api.png";
import gblog from "../../Assets/Projects/gblog.png";
import keeper from "../../Assets/Projects/keeper.png";
import chat from "../../Assets/Projects/chat.png";
import todo from "../../Assets/Projects/todo.png";
import YogGuru from "../../Assets/Projects/YogGuru.png";

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
              imgPath={chat}
              isBlog={false}
              title="Connect NOW"
              description=" A real-time chat application built using MERN stack and socket.io. It includes user authentication, message history, support for emojis with a responsive UI. By implementing WebSocket communication, users can enjoy instant messaging, creating a dynamic user experience. MongoDB is utilized for scalable data storage, optimizing chat history and user data management. "
              ghLink="https://github.com/EshaSahu/Connect-NOW."
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper App"
              description="A user-friendly web app built with ReactJS for the frontend, Express for the backend, and MongoDB as the NoSQL database. It incorporates API integration and utilizes Bootstrap for styling. The app is designed to enhance the efficiency of note-keeping, allowing users to create and delete their own notes. It provides a seamless platform for storing and managing user data. "
              ghLink="https://github.com/EshaSahu/Keeper"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YogGuru}
              isBlog={false}
              title="Yog Guru"
              description="A React-based web app providing personalized yoga instructions with improved pose accuracy (50-60%) using Tensorflow.js and a live camera platform. It includes a motivation feature with dependencies like use-streak. Beyond promoting health, YogGuru reimagines healthcare with generative AI for personalized diagnosis and treatment."
              ghLink="https://github.com/EshaSahu/YogGuru-final-project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gblog}
              isBlog={false}
              title="Blog App"
              description="GenZies Blog is a responsive website designed as a versatile platform for individuals and organizations to publish and share content with an online audience. Tailored to the needs of the modern generation, it provides an accessible and user-friendly space for creating and disseminating articles, insights, and information. It also stores user comments in the database."
              ghLink="https://github.com/EshaSahu/Blog-Web-app"
                         
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlagCheck}
              isBlog={false}
              title="Plagiarism Detector using ML"
              description="The ML-based Plagiarism Check is a robust, efficient, and user-friendly system catering to academic and professional communities. Designed to maintain the integrity and originality of written content. Leveraging machine learning, React, Node.js, and MongoDB, the system ensures a reliable and advanced approach to identifying and preventing plagiarism."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do list"
              description="A user-centric app that prioritizes daily tasks and monitors their completion. Developed using HTML, CSS, and JavaScript on the frontend, and MongoDB, Express, and Node.js on the backend, it offers a robust and interactive interface. With a focus on enhancing user experience, the app ensures efficient task management and completion tracking. "
              ghLink="https://github.com/EshaSahu/To-Do-List1"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="RESTful API for Notes Keeping"
              description="Built with Node.js, Express.js, and MongoDB. Users can create, retrieve, update, and delete text notes through specific API endpoints, facilitating seamless management of note-related operations. The endpoints include functionalities for adding new notes, retrieving lists or specific notes, updating note content, and deleting notes from the database."
              ghLink="https://github.com/EshaSahu/Notes-taking-API"
              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
