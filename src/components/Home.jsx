import Domain from './Domain'
import Features from './Features'
import Footer from './Footer'
import Hero from './Hero'
import Money from './Money'
import Navbar from './Navbar'
import Partner from './Partner'
import Plans from './Plans'
import Services from './Services'

const Home = () => {
  return (
    <div className="relative h-screen lg:h-[140vh]">
      <Navbar />
      <Hero />
      {/* <Partner /> */}
      <Plans />
      <Services />
      <Domain />
      <Features />
      <Money />
      <Footer />
    </div>
  )
}

export default Home