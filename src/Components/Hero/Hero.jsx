import React from 'react'
import './Hero.css'

function Hero () {
    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <h1>Entrust Your Accounting <br></br> Problems With Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sit explicabo enim quo<br></br> nesciunt, consequatur perspiciatis numquam minus deleniti eum libero</p>
                <button>Get Started</button>
            </div>
            <div className='image'>
                <img src="./images/intro.png" alt="image-intro" />
            </div>
        </div>
    )
}

export default Hero;