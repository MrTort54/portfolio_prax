import './App.css'
import { About } from './components/About'
import { Conclusion } from './components/Conclusion'
import { DiplomaWork } from './components/DiplomaWork'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Materials } from './components/Materials'
import { Meta } from './components/Meta'
import { PhotoGallery } from './components/PhotoGallery'
import { PracticeCharacter } from './components/PracticeCharacter'
import { PracticeProject } from './components/PracticeProject'
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
        <PracticeProject />
        <PhotoGallery />
        <Report />
        <Conclusion />
        <Materials />
      </main>
      <Footer />
    </div>
  )
}

export default App
