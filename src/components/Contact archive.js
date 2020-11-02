import React from "react"
import './Contact.css'
 
function Contact(props) {
  return (
    <div>
        {/* <!-- I started with the contact form from the location below and modified --> */}
        {/* <!-- https://mdbootstrap.com/docs/jquery/forms/contact/ --> */}
        {/* <!--Section: Contact v.2--> */}
        <section className="mb-4 contactform">

            {/* <!--Section description--> */}

            <div className="row">

                {/* <!--Grid column--> */}
                <div className="col-md-12 mb-md-0 mb-5" method="post" action="contact/send">
                    {/* <!-- Page header --> */}
                    <div id="headerstyling" className="formtext">Contact Form</div>
                    {/* <!-- Page header --> */}
                    <form id="contact-form" name="contact-form" action="contact/send" method="POST"></form>
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-md-12">
                                <div className="md-form mb-0 form-group">
                                    <input type="text" id="name" name="name" className="form-control" size="50"></input>
                                    <label className="formtext">Your name</label>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid row--> */}

                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0 form-group">
                                    <input type="text" id="email" name="email" className="form-control" size="50"></input>
                                    <label className="formtext">Your email</label>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid row--> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0 form-group">
                                    <input type="text" id="subject" name="subject" className="form-control" size="50"></input>
                                    <label className="formtext">Subject</label>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid row--> */}

                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-md-12">
                                <div className="md-form form-group">
                                    <textarea id="enquiry" name="enquiry" rows="2" className="form-control md-textarea" size="50"></textarea>
                                    <label className="formtext">Your message</label>
                                </div>
                            </div>
                        </div>
                        {/* <!--Grid row--> */}

                        <div className="float-left">
                            {/* <!-- align button to the left --> */}
                            <button type="submit" className="btn btn-primary btn-md">Submit</button>
                        </div>

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
                                    <a href="./html/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <a href="https://photography.michaelamink.com" target="_blank" rel="noreferrer">Photography Website</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="status"></div>
                    </section>
                    </div>
  )};
 
export default Contact;