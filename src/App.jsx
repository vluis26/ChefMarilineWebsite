import React from 'react'
import About from './components/About_Us/About'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Title from './components/Title/Title'

export const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <About/>
      </div>

    </div>
  )
}

export default App