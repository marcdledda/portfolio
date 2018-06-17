import React, { Component } from 'react';
import profImg from '../media/profImg.jpg';
import Footer from './Footer';

class About extends Component {
    render(){
        return(
            <div className="container">
                <div className="row px-lg-5 py-lg-4 centerItem centerImg">
                    <div className="col-4 pl-lg-5 d-lg-flex justify-content-lg-end">
                        <img className="img-fluid" src={profImg} alt="Professional Headshot"/>
                    </div>
                    <div className="col-lg">
                        <h2>Hi, I'm Marc Ledda!</h2>
                        <p>
                            I have always been curious on how technology worked, so it was not a surprised when I transitioned my focus from becoming a nurse to becoming a developer and designer.
                        </p>
                        <p>
                            Following my curiosity, I enrolled at Nashville Software School, where I fell in love with development and design. I am grateful to be in an environment where my mind is constantly problem solving and learning new things.
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default About;