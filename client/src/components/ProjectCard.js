import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, location }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Project Cover"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    <br></br>
                    <a href={location}>Let's Go</a>
                </div>
            </div>
        </Col>
    )
}