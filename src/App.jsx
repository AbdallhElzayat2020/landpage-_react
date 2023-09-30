import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  )
}

export default App