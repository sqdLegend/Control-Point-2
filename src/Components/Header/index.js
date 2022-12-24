

import React, { useRef } from 'react';
import { useState } from 'react';
import './style.css';


import burgerIcon from './image/menu.png';
import burgerClose from './image/close.png';

function Header(props)
{


    const [navbar, SetNavbar] = useState(false);
    const [burgerMenu, SetBurgerMenu] = useState(false)

    const ChangeHeader = () =>{
        if(window.scrollY>=50)
        {
            SetNavbar(true);
        }
        else{
            SetNavbar(false);
        }
    }


    window.addEventListener('scroll', ChangeHeader);


    const Home = () =>{
        const intro  = document.querySelector('.intro');
        const introPosition = intro.offsetTop;

        window.scrollTo({
            top: introPosition,
            behavior: 'smooth',
        });
        SetBurgerMenu(false);

    }

    const Projects = () =>{
        const projects  = document.querySelector('.projects');
        const projectsPosition = projects.offsetTop;
        window.scrollTo({
            top: projectsPosition,
            behavior: 'smooth',
        });

        SetBurgerMenu(false);
    }

    const Approach = () =>{
        const approach  = document.querySelector('.Approach');
        const approachPosition = approach.offsetTop;
        window.scrollTo({
            top: approachPosition,
            behavior: 'smooth',
        });

        SetBurgerMenu(false);
    }

    const Testimonials = () =>{
        const testimonials  = document.querySelector('.testimonials');
        const testimonialsPosition = testimonials.offsetTop;
        window.scrollTo({
            top: testimonialsPosition,
            behavior: 'smooth',
        });

        SetBurgerMenu(false);
    }
    
    const Services = () =>{
        const services  = document.querySelector('.services');
        const servicesPosition = services.offsetTop;

        window.scrollTo({
            top: servicesPosition,
            behavior: 'smooth',
        });

        SetBurgerMenu(false);
    }

    const Pricing = () =>{
        const pricing  = document.querySelector('.pricing');
        const pricingPosition = pricing.offsetTop;
        window.scrollTo({
            top: pricingPosition,
            behavior: 'smooth',
        });

        SetBurgerMenu(false);
    }
    
    const Contact = () =>{
        const contact  = document.querySelector('.contact_us');
        const contactPosition = contact.offsetTop;

        window.scrollTo({
            top: contactPosition,
            behavior: 'smooth',
        });

        SetBurgerMenu(false);
    }

    const [introState, SetIntroState] = useState('false');
    const [projectState, SetProjectState] = useState('false');
    const [processState, SetprocessState] = useState('false');
    const [testimonialsState, SettestimonialsState] = useState('false');
    const [servicesState, SetservicesState] = useState('false');
    const [pricingState, SetpricingState] = useState('false');
    window.addEventListener('scroll', ()=>{
        const intro = document.querySelector('.intro');
        const introTop = intro.offsetTop;
        
        const introBottom = intro.offsetHeight + introTop;

        if((window.scrollY>introTop) && (window.scrollY<introBottom))
        {
            SetIntroState(true);
            
        }
        else{
            SetIntroState(false);
        }

        const projects = document.querySelector('.projects');
        const projectsTop = projects.offsetTop;
        
        const projectsBottom = projects.offsetHeight + projectsTop;

        if((window.scrollY>projectsTop) && (window.scrollY<projectsBottom))
        {
            SetProjectState(true);
            
        }
        else{
            SetProjectState(false);
        }

        const Approach = document.querySelector('.Approach');
        const ApproachsTop = Approach.offsetTop;
        
        const ApproachBottom = Approach.offsetHeight + ApproachsTop;

        if((window.scrollY>ApproachsTop) && (window.scrollY<ApproachBottom))
        {
            SetprocessState(true);
            
        }
        else{
            SetprocessState(false);
        }

        const testimonials = document.querySelector('.testimonials');
        const testimonialsTop = testimonials.offsetTop;
        
        const testimonialsBottom = testimonials.offsetHeight + testimonialsTop;

        if((window.scrollY>testimonialsTop) && (window.scrollY<testimonialsBottom))
        {
            SettestimonialsState(true);
            
        }
        else{
            SettestimonialsState(false);
        }

        const services = document.querySelector('.services');
        const servicesTop = services.offsetTop;
        
        const servicesBottom = services.offsetHeight + servicesTop;

        if((window.scrollY>servicesTop) && (window.scrollY<servicesBottom))
        {
            SetservicesState(true);
            
        }
        else{
            SetservicesState(false);
        }

        const pricing = document.querySelector('.pricing');
        const pricingTop = pricing.offsetTop;
        
        const pricingBottom = pricing.offsetHeight + pricingTop;

        if((window.scrollY>pricingTop) && (window.scrollY<pricingBottom))
        {
            SetpricingState(true);
            
        }
        else{
            SetpricingState(false);
        }
    })
    
    
  
   
    return(
        <div className={navbar ? 'header active' : 'header'}>
            <div className='header_container'>
                <div className='header_holder'>

                    <div className='header_holder_left'>
                        <div className={navbar ? 'header_logo dark': 'header_logo'}>Expert</div>
                        <div className={navbar ? 'header_links dark' : 'header_links'}>

                            <div onClick={Home} className='header_link_item' section='intro'>
                                <a>Home</a>
                                <div className={navbar && introState ? 'underline blackbackground underline_display': 'underline'}></div>
                            </div>

                            <div  onClick={Projects}   className='header_link_item' section='projects'>
                                <a>Projects</a>
                                <div className={navbar && projectState ? 'underline blackbackground underline_display' : 'underline'}></div>
                                <div className={navbar ? 'underline_second blackbackground' : 'underline_second'}></div>
                            </div>

                            <div onClick={Approach} className='header_link_item'>
                                <a>Process</a>
                                <div className={navbar && processState ? 'underline blackbackground underline_display': 'underline'}></div>
                                <div className={navbar ? 'underline_second blackbackground' : 'underline_second'}></div>
                            </div>

                            <div onClick={Testimonials} className='header_link_item'>
                                <a>Testimonials</a>
                                <div className={navbar && testimonialsState ? 'underline blackbackground underline_display': 'underline'}></div>
                                <div className={navbar ? 'underline_second blackbackground' : 'underline_second'}></div>
                            </div>

                            <div onClick={Services} className='header_link_item'>
                                <a>Services</a>
                                <div className={navbar && servicesState ?  'underline blackbackground underline_display': 'underline'}></div>
                                <div className={navbar ? 'underline_second blackbackground' : 'underline_second'}></div>
                            </div>

                        </div>
                    </div>

                    <div className='header_holder_right'>

                        <div onClick={Pricing} className='holder_right_link'>
                            <a>Pricing</a>
                            <div className={pricingState && navbar ? 'holder_right_link_line holder_right_link_line_display' : 'holder_right_link_line'}></div>
                        </div>

                        <div onClick={Contact} className='holder_right_button'>
                            <a>Contact</a>
                        </div>

                        <div onClick={() => SetBurgerMenu(true)} className='burger'>
                            <img src={burgerIcon} />
                        </div>

                        <div className={burgerMenu ? 'burger_menu display_burger' : 'burger_menu'}>

                            <div onClick={() => SetBurgerMenu(false)} className='close_burger_menu'>
                                <img src={burgerClose}/>
                            </div>
                            <div onClick={Home} className='header_link_item'>
                                <a>Home</a>
                            </div>

                            <div onClick={Projects} className='header_link_item'>
                                <a>Projects</a>
                            </div>

                            <div onClick={Approach} className='header_link_item'>
                                <a>Process</a>
                            </div>

                            <div onClick={Testimonials} className='header_link_item'>
                                <a>Testimonials</a>
                            </div>

                            <div onClick={Services} className='header_link_item'>
                                <a>Services</a>
                            </div>

                            <div onClick={Pricing} className='header_link_item'>
                                <a>Pricing</a>
                            </div>

                            <div className='holder_right_button'>
                                <a>Contact</a>
                            </div>




                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}



export default Header;