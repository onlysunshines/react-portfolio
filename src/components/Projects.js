import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/coffeeShopRock5.jpg';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/jQueryQuiz3.jpg';
import projImg5 from '../assets/img/landingPage.jpg';
import projImg6 from '../assets/img/bogBlog.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import stayTuned5 from '../assets/img/stayTuned5.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "jQuery Quiz",
            description: "Test your skills",
            imgUrl: projImg4,
            location: "https://onlysunshines.github.io/quiz-app/",
        },
        {
            title: "Landing Page",
            description: "Dom Manipulation",
            imgUrl: projImg5,
            location: "https://onlysunshines.github.io/landingPage/",
        },
        {
            title: "Boggin' About",
            description: "You must be boggin' kidding me",
            imgUrl: projImg6,
            location: "https://onlysunshines.github.io/personalBlog/",
        },
        {
            title: "Coffee Shop",
            description: "Ground beans for the brew",
            imgUrl: projImg1,
            location: "https://onlysunshines.github.io/coffee-shop-rock/",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            location: "",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            location: "",
        },
    ];
    const projects2 = [
        {
            title: "Stay Tuned",
            description: "Chef is in the kitchen",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/quiz-app/",
        },
        {
            title: "Landing Page",
            description: "Dom Manipulation",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/landingPage/",
        },
        {
            title: "Boggin' About",
            description: "You must be boggin' kidding me",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/personalBlog/",
        },
        {
            title: "Coffee Shop",
            description: "Ground beans for the brew",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/coffee-shop-rock/",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: stayTuned5,
            location: "",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: stayTuned5,
            location: "",
        },
    ];

    const projects3 = [
        {
            title: "jQuery Quiz",
            description: "Test your skills",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/quiz-app/",
        },
        {
            title: "Landing Page",
            description: "Dom Manipulation",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/landingPage/",
        },
        {
            title: "Boggin' About",
            description: "You must be boggin' kidding me",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/personalBlog/",
        },
        {
            title: "Coffee Shop",
            description: "Ground beans for the brew",
            imgUrl: stayTuned5,
            location: "https://onlysunshines.github.io/coffee-shop-rock/",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: stayTuned5,
            location: "",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: stayTuned5,
            location: "",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Who ordered the project sampler?</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate_animated animate_slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <p>Order Up 🍲</p>
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
                                        <Tab.Pane eventKey="second">
                                            <p>Let him cook 👨‍🍳</p>
                                            <Row>
                                                {
                                                    projects2.map((project, index) => {
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
                                        <Tab.Pane eventKey="third">
                                            <p>Let him cook 👨‍🍳</p>
                                            <Row>
                                                {
                                                    projects3.map((project, index) => {
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
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    )
}