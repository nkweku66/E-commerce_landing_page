import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import data from './data/info-data.tsx'

function App() {
  // const heroFeatures = data.map((feature) => {
  //   return (
  //     <Hero
  //       key={feature.id}
  //       coverImage={feature.coverImage}
  //       heading={feature.heading}
  //       description={feature.description as string}
  //     />
  //   )
  // })

  return (
    <>
      <Hero 
        coverImage={data[0].coverImage}
        heading={data[0].heading}
        description={data[0].description}
      />
      <About />
    </>
  )
}

export default App
