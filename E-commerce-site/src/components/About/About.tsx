// import styled from 'styled-components';
import {Container, Section} from './Aboutstyles.ts'


const About = () => {
    let src = "./src/assets/images/";

    return (
        <Container>
            <img src={`${src}image-about-dark.jpg`} alt="About us" />
            <Section className="about--content">
                <h3>About our Furniture</h3>
                <p>Our multifunctional collection blends design and function
                    to suit your individual taste. Make each room unique, or pick
                    a cohesive theme that best express your interests and what inspires you.
                    Find the furniture pieces you need, from traditional to contemporary
                    styles or anything in between. Product specialists are available to help
                     you create your dream space.
                </p>
            </Section>
            <img src={`${src}image-about-light.jpg`} alt="About us" />
        </Container>
    )
}

export default About;