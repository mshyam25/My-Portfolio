import Header from './Components/Header/Header'
import IntroSection from './Components/Intro-Section/IntroSection'
import ProjectsSection from './Components/Projects-Section/ProjectsSection'
import SkillsSection from './Components/Skills-Section/SkillsSection'
function App() {
  return (
    <div className='main'>
      <Header />
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <h1>Portfolio</h1>
    </div>
  )
}

export default App
