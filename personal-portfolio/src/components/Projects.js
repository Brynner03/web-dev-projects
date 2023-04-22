import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import quotes from "../assets/img/quotes.png"
import flappybird from "../assets/img/flappybird.png"
import realtor from "../assets/img/realtor.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Quote Generator",
      description: "Get inspired anytime, anywhere with our quote generator app. Discover insightful quotes from various categories and authors with just a tap.",
      imgUrl: quotes,
      url: "https://quote-generator-with-redux.vercel.app/quotes"
    },
    {
      title: "Realtor",
      description: "Need help on renting, buying, or selling a house, apartment or condo and stories on decorating? We have the site for you where you can check out newest property listings for sale or rent!",
      imgUrl: realtor,
      url: "https://real-estate-project-psi.vercel.app/"
    },
    {
      title: "Flappy Bird Clone",
      description: "Experience the addictive gameplay of the classic Flappy Bird game with our exciting clone. Featuring stunning graphics and intuitive controls, this clone offers endless fun as you tap your way through pipes and obstacles to earn high scores. With its engaging gameplay and challenging levels, you'll find yourself hooked for hours.",
      imgUrl: flappybird,
      url: "https://flappy-clone-bice.vercel.app/"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My software development projects demonstrate my expertise in creating innovative, user-centered solutions that deliver measurable value to businesses. With a strong focus on problem-solving, I approach each project with a collaborative mindset and a dedication to delivering high-quality results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
