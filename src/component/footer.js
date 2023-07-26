import React from 'react';
import logo from "./logo.png"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
function Footer() {
    return ( 
        <div>
            <div id='home-eleven'className='footer pt-5 pb-5 text-white-50 text-center text-md-start'>
                <div className='container'>
                    <div className='row' style={{textAlign:"left"}}>
                        <div className='col-lg-4'>
                            <Image src={logo} />
                            <div>
                                <p className='mt-3'>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            </div>
                            <div className='mt-5' >
                                <h6>Created By <span style={{color:"#33d1cc"}}>Graphberry</span></h6>
                                <h6>© 2022 -<span style={{color:"#ffc400"}}>Bondi Inc</span></h6>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <h4 className='text-light'>Links</h4>
                            <ul class="list-unstyled lh-lg">
                                <li>Home</li>
                                <li>Our Services</li>
                                <li>Portfolio</li>
                                <li>Testimonials</li>
                                <li>Support</li>
                                <li>Terms and Condition</li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h4 className='text-light'>About Us</h4>
                            <ul class="list-unstyled lh-lg">
                                <li>Sign In</li>
                                <li>Register</li>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <h4 className='text-light mb-3'>Contact Us</h4>
                            <p>Get in touch with us via mail phone.We are waiting for your call or message</p>
                            <div>
                            <Button variant="danger" id='button-more-2'className='w-100 mt-4' >graphberry@gmail.com</Button>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;