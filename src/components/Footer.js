import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row pt-5 pb-3">
                    <div className="col pl-lg-0"><a href="mailto:marcdl636@example.com">marcdl636@gmail.com</a></div>
                    <div className="col text-right"><a href="https://www.linkedin.com/in/marcledda/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>  |  <a href="https://github.com/marcdledda" target="_blank" rel="noopener noreferrer">GITHUB</a></div>
                </div>
            </div>
        )
    }
}

export default Footer;