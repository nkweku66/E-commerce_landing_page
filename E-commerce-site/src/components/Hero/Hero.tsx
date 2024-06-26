// import {useState} from 'react'
import { MouseEventHandler } from 'react';
import Navbar from '../Navbar/Navbar1.tsx'
// import styled from 'styled-components'
import { Button, Aside, Div, Nav, Section, DesktopScreen } from './HeroStyles.ts'


interface Props {
    coverImage?: string;
    mobileImage?: string;
    heading: string;
    description: string;
    handleClick?: MouseEventHandler<SVGSVGElement>;
    switchBack?:  MouseEventHandler<SVGSVGElement>;
    isTransitioning: boolean;


}
  
const Hero = (props: Props) => {

    return (
        <Div>
            <DesktopScreen />
            <Section type='default'>
                <Navbar />
                <div className='image-container'>
                    <img 
                        src={props.mobileImage}
                        alt="Mobile image"
                        className="mobile-view"
                    />
                    <img 
                        src={props.coverImage}
                        alt="Desktop image" 
                        className="desktop-hidden"
                    />
                </div>
                <Nav mobile>
                    <Button variant="default">
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" onClick={props.switchBack}>
                            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
                        </svg>
                    </Button>
                    <Button variant="default">
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" onClick={props.handleClick}>
                            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
                        </svg>
                    </Button>
                </Nav>
            </Section>
            
            <Aside>
                <Section>
                    <h1>{props.heading}</h1>
                    <p>{props.description}</p>
                    <Button>
                        <h5>Shop Now</h5>
                        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero" />
                        </svg>
                    </Button>
                    <Nav desktop>
                    <Button variant="default">
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" onClick={props.switchBack}>
                            <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" />
                        </svg>
                    </Button>
                    <Button variant="default">
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg" onClick={props.handleClick}>
                            <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" />
                        </svg>
                    </Button>
                </Nav>
                </Section>
            </Aside>
        </Div>
    );
};

export default Hero;
