import React from "react"
import './Contact.css'
import Resume from '../assets/resume.pdf'
 
function Contact(props) {
  return (
    <div>
        {/* <!-- I started with the contact form from the location below and modified --> */}
        {/* <!-- https://mdbootstrap.com/docs/jquery/forms/contact/ --> */}
        {/* <!--Section: Contact v.2--> */}
        <section className="mb-4 contactform">

            {/* <!--Section description--> */}

            <div className="row">

                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <div>Michael A. Mink</div>
                                </li>
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <div>Kansas City, Missouri 64118</div>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <div>816-820-7736</div>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <div>mmink@michaelamink.com</div>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <a href="https://github.com/cermqm/" target="_blank" rel="noreferrer">GitHub</a>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <a href="https://www.linkedin.com/in/michael-mink-3183b04/" target="_blank" rel="noreferrer">Linkedin</a>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <a href="https://photography.michaelamink.com" target="_blank" rel="noreferrer">Photography Website</a>
                                </li>
                            </ul>
                        </div>

                    <div className="status"></div>
                    </section>
                    </div>
  )};
 
export default Contact;