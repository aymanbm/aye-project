import React from 'react';
import image from "./title.png";
import logo from "./logo.png"
import work1 from "./img/work-01.jpg";
import work2 from "./img/work-02.jpg";
import work3 from "./img/work-03.jpg";
import work4 from "./img/work-04.jpg";
import work5 from "./img/work-05.jpg";
import work6 from "./img/work-06.jpg";
import work7 from "./img/work-07.jpg";
import work8 from "./img/work-08.jpg";
import laptop from "./img/laptop.png";
import team1 from "./img/team-1.png";
import team2 from "./img/team-2.png";
import team3 from "./img/team-3.png";
import team4 from "./img/team-4.png";
import tech1 from "./img/tech-1.png";
import tech2 from "./img/tech-2.png";
import tech3 from "./img/tech-3.png";
import tech4 from "./img/tech-4.png";
import blog1 from "./img/blog-1.jpg";
import blog2 from "./img/blog-2.jpg";
import blog3 from "./img/blog-3.jpg";
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

                    <div class=" mt-5 mb-5 ">

                        <div class="first col-lg- position-relative" >
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
                        <div className='container mt-5 mb-5 p-5'>
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
                <div id='Home-fifth' className='mt-5 mb-5'>
                    <div className='container '>
                                <div className='row'>

                                    <div class=" mt-5 mb-5  ">

                                            <div class="first col- position-relative" >

                                                <Image src={image} className='mb-4'/>
                                                <h3>Some Stuff About Us</h3>
                                                <p class="text-black-50 ">THE GREAT TEAM</p>

                                            </div>
                                    </div>
                                    <div class="description" >
                                                <p class="text-black-50 text-center mb-5 m-auto " style={{maxWidth:"500px"}}>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
                                    </div>
                                    
                                </div>
                                <div className='row align-items-center'>
                                    <div className='col-lg-4 text-center text-md-start' style={{fontWeight:"600",textAlign:"left"}}>
                                        <h4 style={{fontFamily:"system-ui"}}>Retina Design</h4>
                                        <p className='text-black-50 fs-6'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                        <p className='text-black-50 fs-6'>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>
                                        <Button variant="danger" id='button-more'style={{marginTop:"-4px"}}>ORDER ME ON</Button>

                                    </div>
                                    <div className='col-lg-8'>
                                        <Image src={laptop} className='img-fluid'/>

                                    </div>
                                </div>
                    </div>
                </div>
                <div id='home-sixth' className='pb-5 pt-5'>
                    <div className='container ' style={{marginTop:"7rem"}}>

                        <div class="row mt-5 mb-5">

                            <div class=" col-" >

                                <h2 style={{color:"#ffc400"}}>Meet The Team</h2>
                                <p className='text-black-50'>Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.</p>

                            </div>
                        </div>
                        <div class="row mt-5 mb-5">

                            <div class=" col-lg-3 col-mb-1 text-center" >

                                <div>
                                    <div data-team="Luke Skywalker" className='image-team'>
                                        <Image src={team1} className='img-fluid'/>
                                        <h4 className='sky p-3'>Luke Skywalker</h4>
                                        <blockquote className='p-3 text-black-50'><p >“I don't understand how we got by those troops. I thought we were dead.“
</p></blockquote>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class=" col-lg-3 col-mb-1 text-center" >

                                <div>
                                    <div data-team="Luke Skywalker" className='image-team'>
                                        <Image src={team2} className='img-fluid'/>
                                        <h4 className='sky p-3'>Luke Skywalker</h4>
                                        <blockquote className='p-3 text-black-50'><p >“I don't understand how we got by those troops. I thought we were dead.“
</p></blockquote>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class=" col-lg-3 col-mb-1 text-center" >

                                <div>
                                    <div data-team="Luke Skywalker" className='image-team'>
                                        <Image src={team3} className='img-fluid'/>
                                        <h4 className='sky p-3'>Luke Skywalker</h4>
                                        <blockquote className='p-3 text-black-50'><p >“I don't understand how we got by those troops. I thought we were dead.“
</p></blockquote>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div class=" col-lg-3 col-mb-1 text-center" >

                                <div>
                                    <div data-team="Luke Skywalker" className='image-team'>
                                        <Image src={team4} className='img-fluid'/>
                                        <h4 className='sky p-3'>Luke Skywalker</h4>
                                        <blockquote className='p-3 text-black-50'><p >“I don't understand how we got by those troops. I thought we were dead.“
</p></blockquote>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <div id='home-seventh text-center' className='pb-5 pt-5'>
                <div className='container ' >
                    <div className='row tech align-items-center'>
                        <div className='col-lg-2 mt-3 mb-3'><Image src={tech1} className='img-fluid'/></div>
                        <div className='col-lg-2 mt-3 mb-3'><Image src={tech2} className='img-fluid'/></div>
                        <div className='col-lg-2 mt-3 mb-3'><Image src={tech3} className='img-fluid'/></div>
                        <div className='col-lg-2 mt-3 mb-3'><Image src={tech4} className='img-fluid'/></div>
                        <div className='col-lg-2 mt-3 mb-3'><Image src={tech1} className='img-fluid'/></div>
                        <div className='col-lg-2 mt-3 mb-3'><Image src={tech2} className='img-fluid'/></div>

                    </div>
                </div>
            </div>
            <div id='home-eight' className='pb-5 pt-5 text-light text-center'>
                <div className='container ' >
                    <div className='row tech align-items-center'>
                        <h2>Start Your Project Now</h2>
                        <p className='text-white-50'>Leave your description and we start the engine.Don't worry,you can cancel anytime
</p>
                        <div class="d-flex justify-content-center mt-5 mb-5">
                            <Button variant="danger" id='button-more-2'>START PROJECT</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='home-nine' className='pb-5 pt-5 '>
                <div className='container ' >
                    <div className='row nine'>
                            <div class=" mt-5 mb-5  ">

                                <div class="first col- text-center position-relative" >

                                    <Image src={image} />
                                    <h3>Read Our Blog</h3>
                                    <p class="text-black-50 ">NEW STORIES</p>

                                </div>
                            </div>
                            <div class="row  mb-5  ">
                                
                                    <div className='col-lg-4'>
                                        <div className='card'>
                                            <Image src={blog1} className='card-img-top'/>
                                            <div className='card-body'>
                                                <span className='text-black-50'>Jan 17, 2022</span>
                                                <h5 className='card-title'>Some Awesome Blog Title Here</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='card'>
                                            <Image src={blog2} className='card-img-top'/>
                                            <div className='card-body'>
                                                <span className='text-black-50'>Jan 17, 2022</span>
                                                <h5 className='card-title'>Some Awesome Blog Title Here</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='card'>
                                            <Image src={blog3} className='card-img-top'/>
                                            <div className='card-body'>
                                                <span className='text-black-50'>Jan 17, 2022</span>
                                                <h5 className='card-title'>Some Awesome Blog Title Here</h5>
                                            </div>
                                        </div>
                                    </div>
                                    

                    </div>
                    <div class="d-flex justify-content-center  mb-5">
                            <Button variant="danger" id='button-more-2'>MORE STORIES</Button>
                    </div>

            </div>
                </div>
                    </div>
            <div id='home-ten' className="subscribe pt-5 pb-5 text-center text-md-start">
                <div className='container'>
                    <form className='row subscribe align-items-center '>
                        <div className='col-lg-3'>
                            <h5 class="fw-bold fs-5 mb-3" style={{fontWeight:"900",textAlign:"left"}}>Subscribe to our Newsletter:</h5>
                        </div>
                        <div className='col-lg-8'>
                            <input type='email' class="w-100 text-light p-2 bg-transparent" placeholder='Enter Email Address' />
                        </div>
                        <div className='col-lg-1'>
                            <Button variant="dark" id='button-more-2' style={{backgroundColor:"#19283f"}}>Subscribe</Button>
                        </div>

                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Home;