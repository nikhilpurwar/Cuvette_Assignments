import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Services } from './Components/Services'
import { CallToAction } from './Components/CallToAction'
import { Faq } from './Components/Faq'
import {Footer} from '../../Components/Footer/Footer'

export const Home = () => {  

  return(
    <div className='component'>
      <Hero/>
      <About/>
      <Services/>
      <CallToAction/>
      <Faq/>
      <Footer />
    </div>
  )
}
