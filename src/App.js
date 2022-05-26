import Footer from './Components/Footer/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Project from './Components/Projects'
import Skills from './Components/Skills'
import Works from './Components/work/Works'
import About from './Components/About/About'

function App() {
  return (
    <div className='main'>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App
