import './App.css'
import { About } from './components/About'
import { Conclusion } from './components/Conclusion'
import { DiplomaWork } from './components/DiplomaWork'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Meta } from './components/Meta'
import { PracticeCharacter } from './components/PracticeCharacter'
import { Report } from './components/Report'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Meta />
        <PracticeCharacter />
        <DiplomaWork />
        <Report />
        <Conclusion />
      </main>
      <Footer />
    </div>
  )
}

export default App
