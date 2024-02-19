import React from 'react'
import ATM1 from '../assets/ATM1.png'
import ATM2 from '../assets/ATM2.png'
import ATM3 from '../assets/ATM3.png'

function LocationShowcase() {
  return (
    <div className='LocationShowcase'>
      <h1>Trusted by Businesses Across the Country</h1>
      <div className='ATMPlacementImages'>
        <div className='ATM1'>
            <img src= {ATM1} alt="picture of an ATM at a festival" />
            <pre>Jazz and Wine Festival, WA</pre>
        </div>
        <div className='ATM2'>
            <img src={ATM2} alt="picture of an ATM at a farm" />
            <pre>  Corn Maze and Farm, PA  </pre>
        </div>
        <div className='ATM3'>
            <img src={ATM3} alt="picture of an ATM in a dispensary" />
            <pre>      Dispensary, MI      </pre>
        </div>
      </div>
      <div className='linebreak'></div>
    </div>
  )
}

export default LocationShowcase
