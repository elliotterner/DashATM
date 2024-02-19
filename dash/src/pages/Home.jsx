import React from 'react'
import Hook from '../components/Hook'
import Welcome from '../components/Welcome'
import Services from '../components/Services'
import RequestATM from '../components/RequestATM'
import Quote1 from '../components/Quote1'
import LocationShowcase from '../components/LocationShowcase'
import Ready from '../components/Ready'

function Home() {
  return (
    <div className='HomePage'>
      <Hook />
      <Welcome />
      <Services />
      <RequestATM />
      <Quote1 />
      <LocationShowcase />
      <Ready />
    </div>
    
  )
}

export default Home
