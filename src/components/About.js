import React from "react"
import './About.css'
import minkimg from '../assets/20200527_233118.jpg'
 
function About(props) {
  return (
    <div className="aboutme">   
      <h1 className="title">About Me</h1>
      <div>
          <img src={minkimg} alt="text" className="img-responsive mr-3" />
        <p className="text-white abouttext">I am an experienced Technical Manager and Technology Architect with expertise in the health care software industry. I have proven success leading teams, building teams, 
            creating and growing a business verticle, supporting sales and marketing, implementing software upgrades and solutions. I am accomplished in providing technical support to clients, leading teams 
            and troubleshooting.
        </p>
        <p className="text-white abouttext"> I have a BS in Electrical Engineering, a MS in Engineering Management and recently completed a full stack web development boot camp through the University of Kansas.
        </p>
        <p className="text-white abouttext"> Technical Skills include: Web Development - (HTML, JavaScript, jQuery, CSS, BootStrap, Git, API’s, Heroku, Node.js, Express.js, MySQL, Handlebars and ESLint), Virtualization, Linux, SAN, Networking.
        </p>
        <p className="text-white abouttext"> Management Skills include: Leadership, Team Building, Mentoring, Sales, Marketing, Pricing, Resource Modeling, Problem Management, Budgeting, Client Relations and Escalation Management.
        </p>
        <p className="text-white abouttext">My objective is to move into the engineering management side of a software company where I can impact solutions and clients further up stream. I thrive on challenging work and prefer that each day is different. I would like to
            work remote in my new role but realize that office time is also important.
        </p>
        <p className="text-white abouttext">I am a photographer on the side and prefer landscape/nature photography. Other priorities include riding my motorcycle, spending time with my family and continuous learning.
        </p>
      </div>
    </div>
  )
}
 
export default About;