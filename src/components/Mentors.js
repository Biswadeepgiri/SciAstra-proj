import React from 'react'
import './Mentors.css';
import mentorpic from '../images/mentors/mentorpic.png';
import advisor1 from '../images/mentors/advisor1.png';
import advisor2 from '../images/mentors/advisor2.png';
import advisor3 from '../images/mentors/advisor3.png';
// import advisor4 from '../images/mentors/advisor4.png';
const Mentors = () => {
    return (
        <React.Fragment>
            <br></br>
            <br></br>
            <h3>Meet Your Mentors</h3>
            <br>
            </br>
            <div class="row row-cols-1 row-cols-md-4 g-5">
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail " alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Shubham</h5>
                            <p class="card-text">Cambridge University , UK</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Alok</h5>
                            <p class="card-text">ETH Zurich , Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Aman</h5>
                            <p class="card-text">Harvard University</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Atharv </h5>
                            <p class="card-text">John Hopkins University</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Shubham</h5>
                            <p class="card-text">Cambridge University , UK</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Alok</h5>
                            <p class="card-text">ETH Zurich , Germany</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Aman</h5>
                            <p class="card-text">Harvard University</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={mentorpic} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Atharv </h5>
                            <p class="card-text">John Hopkins University</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <h3 className='advisors'>Mentor and Advisors</h3>
            <br>
            </br>
            <br></br>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="">
                        <img src={advisor1} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr. Omkar</h5>
                            <p class="card-text">Principal Project Scientist at Indian Institute of Technology, Madras</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={advisor2} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Vivek Dwivedi</h5>
                            <p class="card-text">Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER</p>
                        </div>
                        <div>
                            <button type='button' class="btn btn-success ">Message him now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="">
                        <img src={advisor3} class="img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Akhil Tripathi</h5>
                            <p class="card-text">Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at NISER</p>
                        </div>
                        <div>
                            <button type='button' class="btn btn-success ">Message him now</button>
                        </div>
                    </div>
                </div>

            </div>





        </React.Fragment>
    )
}

export default Mentors;