import React from "react"
import './Portfolio.css'
// import Popup from 'reactjs-popup';
import restaurantimg from '../assets/Restaurant.jpg'
import placeholderimg from '../assets/placeholder.jpg'
// import codememeimg from '../assets/codememe.png'
import explorationimg from '../assets/exploration.jpg'
import mathimg from '../assets/math.jpg'
import onesandzerosimg from '../assets/ones-and-zeros.jpg'
import photographyimg from '../assets/photography.jpg'
import techbackgroundimg from '../assets/techbackground.jpg'
import weatherimg from '../assets/weather.jpg'
import PortfolioPopup from "./PortfolioPopup";

 
function Portfolio(props) {
  return (
      
    <div>
      {/* <h1 className="title2">Portfolio Page</h1> */}

      {/* <!-- Container so that header is same size as cards --> */}
        <div className="container">
        <h1 className="title2">Portfolio</h1>

            {/* <!-- Container so that header is same size as cards --> */}
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    {/* <!-- Page header --> */}
                    {/* <!-- Page header --> */}
                </div>
            </div>
            {/* <!-- Creating a card for each portfolio entry --> */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://damp-falls-89423.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img src={restaurantimg} className="card-img-top" alt="Photography"></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/storventory-m" target="_blank" rel="noreferrer">Repo</a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="col mb-4">
                    <figure className="card">
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={placeholderimg} className="card-img-top" alt="placeholder"></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/storventory-m" title="storventory" target="_blank" rel="noreferrer"> </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://cermqm.github.io/explorationfood/" target="_blank" rel="noreferrer">
                            <img src={explorationimg} className="card-img-top" alt="Photography"></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/explorationfood" target="_blank" rel="noreferrer">Repo </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
                {/* <!-- Creating a card for each portfolio entry --> */}
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://cermqm.github.io/weatherapp/" target="_blank" rel="noreferrer">
                            <img src={weatherimg} className="card-img-top" alt="Weather"></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/weatherapp" target="_blank" rel="noreferrer">Repo </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
            </div>
            {/* <!-- Creating a card for each portfolio entry --> */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://cermqm.github.io/dayplanner/" target="_blank" rel="noreferrer">
                            <img src={techbackgroundimg} className="card-img-top" alt="Refactor "></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/dayplanner" target="_blank" rel="noreferrer">Repo </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://cermqm.github.io/javascriptquiz/" target="_blank" rel="noreferrer">
                            <img src={onesandzerosimg} className="card-img-top" alt="Photography"></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/javascriptquiz" target="_blank" rel="noreferrer">Repo </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://alyssadaniels.com" target="_blank" rel="noreferrer">
                            <img src={photographyimg} className="card-img-top" alt="Photography"></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/storventory-m" target="_blank" rel="noreferrer"> </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
                {/* <!-- Creating a card for each portfolio entry --> */}
                <div className="col mb-4">
                    <figure className="card">
                        <a href="https://dammath.com" target="_blank" rel="noreferrer">
                            <img src={mathimg} className="card-img-top" alt="Math "></img>
                            <div className="card-body">
                                <h6 className="card-title"><span><a href="https://github.com/cermqm/storventory-m" target="_blank" rel="noreferrer"> </a></span></h6>
                            </div>
                        </a>
                    </figure>
                </div>
              </div>
        </div>
        {/* <PortfolioPopup /> */}
    </div>
  )
}
 
export default Portfolio;