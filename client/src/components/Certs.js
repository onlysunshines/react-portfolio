import FrontEndCertificate from '../assets/img/FrontEndCertificate.jpeg';

export const Certs = () => {
    
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Certifications</h2>
                            <img src={FrontEndCertificate} alt="Front End Web Development certificate from Udacity"/>
                            <p>I am constantly improving my knowledge base and expanding my comfort zone.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                    </div>                    
                </div>
            </div>            
        </section>
    )
}