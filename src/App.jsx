import React from 'react'
import About from './components/About_Us/About'
import Contact from './components/Contact_us/Contact'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Photos from './components/Photos/Photos'
import Service from './components/Service/Service'
import Title from './components/Title/Title'

export const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <About/>
        <Title subTitle='Our' title='Services'/>
        <Service/>
        <Title subTitle='Gallery' title='Photos'/>
        <Photos/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
      </div>

    </div>
  )
}

export default App