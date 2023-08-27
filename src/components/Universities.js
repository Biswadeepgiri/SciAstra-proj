import React from 'react'
import './Universities.css'
import cambridge from '../images/universities/cambridge.png';
import harvard from '../images/universities/harvard.png';
import california from '../images/universities/california.jpg';
import zurich from '../images/universities/ethzurich.png';
import maxplank from '../images/universities/maxplank.png';
import edinburg from '../images/universities/edinburg.png';
import hopkins from '../images/universities/hopkins.png';
import michigan from '../images/universities/michigan.png';
const Universities = () => {
    return (
        <React.Fragment>
            <h1>Team Page</h1>
            <br></br>
            <h3>Learn from scientists , research scholars from the top institutes in the world </h3>
            <br></br>
            <div className='university'>
                <div class="row row-cols-1 row-cols-md-4 g-10">
                    <div class="col">
                        <div class="card h-70">
                            <img src={cambridge} class="card-img-top h-216 w-144" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Cambridge University</h5>
                                {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={harvard} class="card-img-top" alt="..." n />
                            <div class="card-body">
                                <h5 class="card-title">Harvard University</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={california} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">University of California</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={zurich} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">ETH Zurich</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={maxplank} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Max Plank University</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={edinburg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Edingburg University</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={hopkins} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">John Hopkins University</h5>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={michigan} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Michigan State University</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Universities;