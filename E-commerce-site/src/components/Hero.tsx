import Navbar from './Navbar.tsx'

type props = {
    coverImage: string,
    heading: string,
    description: string
}

const Hero = (props: props) => {
    return (
        <div className="hero--sec">
            <section className='main--sec'>
                <Navbar />
                <img src={props.coverImage} alt="Hero" />
            </section>
            <aside className='hero--sec-content'>
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
                <button>Shop Now</button>
                <nav className="content--nav">
                    <button>
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                    </button>
                    <button>
                        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                    </button>
                </nav>
            </aside>
        </div>
    )
};

export default Hero;