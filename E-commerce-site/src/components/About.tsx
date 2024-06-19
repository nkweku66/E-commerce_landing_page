const About = () => {
    let src = "./src/assets/images/";

    return (
        <div className="about--sec">
            <img src={`${src}image-about-dark.jpg`} alt="About us" />
            <h1>About our Furniture</h1>
            <p>Our multifunctional collection blends design and function 
                to suit your individual taste. Make each room unique, or pick 
                a cohesive theme that best express your interests and what inspires you.
                Find the furniture pieces you need, from traditional to contemporary
                styles or anything in between. Product specialists are available to help
                 you create your dream space.
            </p>
            <img src={`${src}image-about-light.jpg`} alt="About us" />
        </div>
    )
}

export default About;