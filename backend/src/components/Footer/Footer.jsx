import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (


        <div className='footer' id='footer'>

            <div className='footer-content'>

                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maxime maiores quaerat adipisci consequuntur sint possimus sequi excepturi? Placeat laboriosam, vel autem, delectus sed mollitia esse molestiae qui temporibus explicabo, maxime perferendis consequatur incidunt recusandae ullam totam laudantium distinctio quis.</p>
                    <div className="footer-social-icons">

                        <img src={assets.facebook_icon} alt="" className="" />
                        <img src={assets.twitter_icon} alt="" className="" />
                        <img src={assets.linkedin_icon} alt="" className="" />
                    </div>

                </div>

                <div className="footer-content-center">

                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">

<h2>GET IN TOUCH</h2>
<ul>

<li>+77-541-682-410</li>
<li>contact@us.com</li>

</ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Me.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer