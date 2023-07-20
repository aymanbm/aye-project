import React from 'react';
import image from "./title.png";
import work1 from "./img/work-01.jpg";
import work2 from "./img/work-02.jpg";
import work3 from "./img/work-03.jpg";
import work4 from "./img/work-04.jpg";
import work5 from "./img/work-05.jpg";
import work6 from "./img/work-06.jpg";
import work7 from "./img/work-07.jpg";
import work8 from "./img/work-08.jpg";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return (
        <div >
            <div className='Home-first' id="#" >
                <div className='container col-lg-5' style={{}} id='Home-container' >
                    <h1>Taste the Creativity</h1>
                    <p style={{color:"rgb(140 148 159)"}}>We make awesome graphic and web design</p>
                    <Button variant="danger" id='button' >Get Started</Button>{' '}

                </div>
            </div>

            <div id='Home-second' className='text-center pt-5 pb-5'>
                
                <div class="container">

                    <div class=" mt-5 mb-5 position-relative">

                        <div class="first col-lg-" >
                            <Image src={image} className='mb-4'/>
                            <h3>We are Good at</h3>
                            <p class="text-black-50 ">SOME OF THESE STUFF UNDER</p>

                        </div>
                    
                    </div>
                    
                    <div class="row home-third">

                        <div class="col-md-6 col-lg-4">
                            <div className='feat'>

                                <div className='image-holder position-relative'>
                                    <Image src={image} className='mb-4' style={{opacity:"0",zIndex:"2"}}/>
                                    <FontAwesomeIcon className='number position-absolute bottom-0' icon={fa1}/>
                                    <FontAwesomeIcon className='pencel position-absolute bottom-0' icon={faPencil}/>
                                    
                                    
                                </div>
                                <div className='Parag'>

                                    <h3>GRAPHIC DESIGN</h3>
                                    <p class="text-black-50 ">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>

                                </div>
                                
                            </div>

                                                    </div>
                        <div class="col-md-6 col-lg-4">
                            <div className='feat'>

                                <div className='image-holder position-relative'>
                                    <Image src={image} className='mb-4' style={{opacity:"0",zIndex:"2"}}/>
                                    <FontAwesomeIcon className='number position-absolute bottom-0' icon={fa2}/>
                                    <FontAwesomeIcon className='pencel position-absolute bottom-0' icon={faTv}/>
                                </div>
                                <div className='Parag'>

                                    <h3>GRAPHIC DESIGN</h3>
                                    <p class="text-black-50 ">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>

                                </div>
                                
                            </div>
                            
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div className='feat'>
                                
                                <div className='image-holder position-relative '>
                                    <Image src={image} className='mb-4' style={{opacity:"0",zIndex:"2"}}/>
                                    <FontAwesomeIcon className='number position-absolute bottom-0' icon={fa3}/>
                                    <FontAwesomeIcon className='pencel position-absolute bottom-0' icon={faPlug}/>
                                </div>
                                <div className='Parag'>

                                    <h3>GRAPHIC DESIGN</h3>
                                    <p class="text-black-50 ">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>

                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>

                <div className='home-fourth'>
                        <div className='container mt-5 mb-5'>
                            <div className='row'>

                                <div class=" mt-5 mb-5 position-relative">

                                        <div class="first col-" >

                                            <Image src={image} className='mb-4'/>
                                            <h3>We Make This</h3>
                                            <p class="text-black-50 ">PREPARE TO BE AMAZED</p>

                                        </div>
                                </div>
                            </div>
                            <div className='row row-liste'>
                                <div className='col-lg-'>
                                    <ul class="list-unstyled d-flex justify-content-center mt-5 mb-5 liste">
                                        <li>All</li>
                                        <li>Design</li>
                                        <li>Code</li>
                                        <li>Photo</li>
                                        <li>App</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='our-work col-lg-3'>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work1} className='image img-fluid'/>
                                    </div>    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work2} className='image img-fluid'/>
                                    </div>    
                                    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work3} className='image img-fluid'/>
                                    </div>    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work4} className='image img-fluid'/>
                                    </div>    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work5} className='image img-fluid'/>
                                    </div>    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work6} className='image img-fluid'/>
                                    </div>    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work7} className='image img-fluid'/>
                                    </div>    
                                </div>

                                <div className='our-work col-lg-3 '>
                                    <div className='box bg-white mb-3 ' data-work="awesome work">
                                        <Image src={work8} className='image img-fluid'/>
                                    </div>    
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>

                                    <Button variant="danger" id='button-more'  ><a href='#'>I WANT MORE</a></Button>

                                </div>

                            </div>
                        </div>
                </div>

        </div>
    )
}
export default Home;