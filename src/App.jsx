import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About_Us/About';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Popup from './components/Contact_Us/Popup';
import Service from './components/Service/Service';
import Title from './components/Title/Title';
import ScheduleMeeting from './components/ScheduleMeeting/ScheduleMeeting'; // import the new component
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';

export const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className='container'>
                <About />
                <Section/>
                <Title subTitle='Our' title='Services' />
                <Service />
                <Title subTitle='Essential Guide to Restaurant Success' title="Unlock Your Restaurant's Potential" />
                <Popup/>
                <Footer/>
              </div>
            </>
          } />
          {/* <Route path="/consultation" element={<Popup />} /> */}
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} /> {/* add the new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
