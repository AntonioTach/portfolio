import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Background, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Background />
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <Contact />
        </div>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
