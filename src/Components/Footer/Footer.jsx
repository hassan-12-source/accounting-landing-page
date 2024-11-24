import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='contact-footer'>
        <h1 className='title'>Contact us</h1>
          <div className='elemnt-footer'>
          <span>Address</span>
          <h2>121 King Street, Melbourne Victoria 3000 Australia</h2>
          </div>

          <div className='elemnt-footer'>
          <span>Phone</span>
          <h2>+61 3 8376 6284</h2>
          </div>

          <div className='elemnt-footer'>
          <span>Email</span>
          <h2>contact@domain.com</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

