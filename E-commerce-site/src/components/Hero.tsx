import Navbar from './Navbar.tsx'

type props = {
    coverImage: string,
    heading: string,
    description: string
}

const Hero = (props: props) => {
    return (
        <div className="hero--sec">
            <main className='main--sec'>
                <Navbar />
                <img src={props.coverImage} alt="Hero" />
            </main>
            <section className='hero--sec-content'>
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
                <button>Shop Now</button>
            </section>
        </div>
    )
};

export default Hero;