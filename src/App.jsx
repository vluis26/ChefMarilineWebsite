import React from 'react'
import About from './components/About_Us/About'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Photos from './components/Photos/Photos'
import Title from './components/Title/Title'

export const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
        <About/>
        <Title subTitle='Gallery' title='Photos'/>
        <Photos/>
      </div>

    </div>
  )
}

export default App