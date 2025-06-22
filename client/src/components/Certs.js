import FrontEndCertificate from '../assets/img/FrontEndCertificate.jpeg';

export const Certs = () => {
    
    return (
        <section className="cert" id="certs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Certifications</h2>
                            <img src={FrontEndCertificate} alt="Front End Web Development certificate from Udacity"/>
                            <a target="_blank" rel="noopener noreferrer" href="https://confirm.udacity.com/e/b8f11b08-079b-11ed-8bb2-7725eccbe477">Confirm Certificate Here</a>
                            <p>I am constantly improving my knowledge base and expanding my comfort zone.</p>
                        </div>
                    </div>                    
                </div>
            </div>            
        </section>
    )
}