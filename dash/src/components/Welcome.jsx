import React from 'react'
import runningGuy from '../assets/runningGuy.png'


function Welcome() {
  return (
    <div className='Welcome'>
      <div className='WelcomeToDashText'>
        <h1>Welcome to Dash.</h1>
        <p>
        Where free means free. <br />
        We offer free ATM installation in qualified businesses, <br /> 
        accompanied by full service management. You can expect <br />
        rapid results, empathetic customer service, and a commitment <br />
        to meeting your needs. It’s that simple. <br />
        </p>
      </div>
      <img src={runningGuy} alt="image of a running guy" className='runningGuyImg' />
    </div>
  )
}

export default Welcome