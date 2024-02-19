import React from 'react'
import check from '../assets/k (5).png'
import puzzle from '../assets/puzzle.png'
import phone from '../assets/pphone.png'
import FormButton from '../components/FormButton'

function Processing() {
  return (
  <>
  <div className='Processing'>
      <h1>Get Compliant With ATM Processing</h1>
      <div className='ProcessingContent'>
          <div className='ProcessingText1'>
              <br />
              <h2>Real-Time Updates</h2>
              <p>
              You can’t grow an ATM business without quality <br /> 
              data, which is exactly what our terminal management <br /> 
              platform provides. Enjoy a custom analytics <br />
              dashboard and receive automated updates on ATM <br /> 
              performance and health. 
              </p>
          </div>
          <img src= {check} alt="image of a check mark" className='checkMark'/>
          <div className='ProcessingText2'>
              <br />
              <br />
              <h2>Full Compatibility</h2>
              <p>
              Don’t worry about whether or not your ATM can be <br />
              processed through us. Our processing platform is <br />
              compatible with every major ATM manufacturer, including <br /> 
              Hyosung, Genmega, Triton, and Puloon. You can ensure <br /> 
              your transactions will be rapidly and safely settled.
              </p>
          </div>
          <img src= {puzzle} alt="image of a puzzle" className='puzzle'/>
          <div className='ProcessingText3'>
              <br />
              <br />
              <h2>Technical Phone Support</h2>
              <p>
              Choosing your processor is a big deal, and we value <br /> 
              building a relationship with you. When you choose to <br /> 
              process through us we offer free technical phone  <br />
              support for any issue you encounter growing your business. <br /> 
              We have a lot of experience in the ATM industry and are <br /> 
              happy to share our knowledge and mentorship.
              </p>
          </div>
          <img src={phone} alt="image of a phone" className='phone'/>
      </div>
  </div>
  <div className="ReadyForATM">
      <h3>Ready to start processing your ATM transactions? </h3>
      <FormButton text = 'Apply For Processing' />
  </div>
  </>
)
}

export default Processing
