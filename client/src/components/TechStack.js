import HTML5 from '../assets/img/HTML5.png';
import CSS3 from '../assets/img/CSS3.png';
import JS5 from '../assets/img/javascript-r.svg';
import ReactLogo from '../assets/img/react-2.svg';
import EX from '../assets/img/express-109.svg';
import NodeJS from '../assets/img/nodejs-1.svg';
import Tailscale from '../assets/img/Tailscale.png';
import Render from '../assets/img/Render.png';
import Firebase from '../assets/img/firebase-2.svg';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';

export const TechStack = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="techstack" id="tech">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Technological Stack</h2>
                            <p>I am constantly improving my knowledge base and expanding my comfort zone.<br></br>This is my current Full Stack Work Flow List of Frameworks/Languages/Applications</p>
                                <div className="item">
                                    <img src={HTML5} alt="HTML Logo" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS3} alt="CSS Logo" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={JS5} alt="JavaScript Logo" />
                                    <h5>JavaScript</h5>
                                </div><div className="item">
                                    <img src={ReactLogo} alt="React Logo" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={EX} alt="Express Logo" />
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={NodeJS} alt="Node JS Logo" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={Tailscale} alt="Tailscale Logo" />
                                    <h5>Tailscale</h5>
                                </div>
                                <div className="item">
                                    <img src={Render} alt="Render Logo" />
                                    <h5>Render</h5>
                                </div>
                                <div className="item">
                                    <img src={Firebase} alt="Render Logo" />
                                    <h5>Firebase</h5>
                                </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    )
}