import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className="services-wrapper">
            <h1>Our Services</h1>
            <div className="services-container">
                <div className="services-content">
                    <img src="./images/services1.png" alt="Service 1" />
                    <h2>Accounting</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis asperiores omnis eveniet</p>
                </div>
                <div className="services-content">
                    <img src="./images/services2.png" alt="Service 2" />
                    <h2>Tax Filing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="services-content">
                    <img src="./images/services3.png" alt="Service 3" />
                    <h2>Financial Planning</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="services-content">
                    <img src="./images/services4.png" alt="Service 4" />
                    <h2>Auditing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="services-content">
                    <img src="./images/services5.png" alt="Service 5" />
                    <h2>Consulting</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="services-content">
                    <img src="./images/services6.png" alt="Service 6" />
                    <h2>Advisory</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
