import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navigation from './components/Navigation/Navigation'
import TechStack from './components/TechStack/TechStack'

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Contact />
    </>
  )
}

export default App
