import logo from './logo.svg';
import './App.css';

import Footer from './Components/Footer';
import Approach from './Components/OurApproach';
import Header from './Components/Header';
import ContactUs from './Components/ContactUs';
import OurWorks from './Components/OurWorks';
import Pricing from './Components/Pricing';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Intro from './Components/Intro';
import Video from './Components/Video';
import Counters from './Components/Counters';
import { useEffect, useRef, useState } from 'react';


function App() {

  const [IntroRefLink, SetIntroRefLink] = useState();

  const IntroRef = useRef();
  console.log(IntroRef);
  return (
    <div className="App">
      
      <Header/>
      <Intro Setref = {IntroRef}/>
      <OurWorks />
      <Counters />
      <Projects />
      <Approach />
      <Testimonials/>
      <Services/>
      <Pricing />
      <Video />
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
