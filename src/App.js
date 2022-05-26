import Header from './Components/Header/Header'
import IntroSection from './Components/Intro-Section/IntroSection'
import ProjectsSection from './Components/Projects-Section/ProjectsSection'
import SkillsSection from './Components/Skills-Section/SkillsSection'
import AboutSection from './Components/About-Section/AboutSection'
function App() {
  return (
    <div className='main'>
      <Header />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <h1>Portfolio</h1>
    </div>
  )
}

export default App
