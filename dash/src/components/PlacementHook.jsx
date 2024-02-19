import React from 'react'
import delivery from '../assets/k.png'
import installation from '../assets/install.png'
import training from '../assets/training.png'


function PlacementHook() {
  return (
    <div className='hookBlock'>
        <h1>Fully Managed ATM Placement</h1>
        <div className="hookContainer">
            <div className="delivery">
                <img src={delivery} alt="" />
                <h3>Delivery</h3>
                <p>
                On time and free. We know how many headaches <br />
                a business owner has to deal with, and the last <br />
                thing you need to worry about is ATM delivery. <br />
                </p>
            </div>
            <div className="installation">
                <img src={installation} alt="" />
                <h3>Installtion</h3>
                <p>
                We’ve installed an ATM or two before. Our <br /> 
                technician will install your ATM as securely <br />
                    and quickly as possible so as to not disrupt <br />
                    your customers. Installation is a lot more <br />
                    than just placement - we will bolt the machine <br />
                    down, connect it to the internet, and program <br />
                    it on-site.
                </p>
            </div>
            <div className="training">
                <img src={training} alt="" />
                <h3>Training</h3>
                <p>
                Once the ATM is in, we will teach you everything <br />
                you need to know about common errors and basic <br />
                operation. Having an ATM go down during a busy day <br />
                is no fun. We want to provide you with some basic <br />
                ATM knowledge to keep your customers happy in <br /> 
                emergencies. 
                </p>
            </div>
        </div>
        <div className='linebreak'></div>
    </div>
  )
}

export default PlacementHook
