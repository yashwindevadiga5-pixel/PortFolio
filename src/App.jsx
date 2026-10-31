import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'
import { internshipsList } from './data/portfolioData'

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      {internshipsList && internshipsList.length > 0 && <Internships />}
      <SoftSkills />
      <Footer />
    </>
  )
}
