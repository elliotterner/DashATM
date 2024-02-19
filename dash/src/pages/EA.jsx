import React from 'react'
import timer from '../assets/timer.png'
import rain from '../assets/k (11).png'
import safe from '../assets/k (13).png'
import FormButton from '../components/FormButton'

function EA() {
  return (
  <>
  <div className='Processing'>
      <h1>Mobile ATMs For Any Event</h1>
      <div className='ProcessingContent'>
          <div className='ProcessingText1'>
              <br />
              <h2>Short Notice Installation</h2>
              <p>
              For the 6th year in a row, event planning has been <br /> 
              ranked as one of the most stressful jobs on earth. <br /> 
              That is why we are not surprised when we get last <br />
              minute event ATM requests. In fact, we prepare for <br /> 
              this. We keep our event ATMs ready to go at a moments <br /> 
              notice, so your customers will always have access to cash. 
              </p>
          </div>
          <img src= {timer} alt="image of a check mark" className='checkMark'/>
          <div className='ProcessingText2'>
              <br />
              <br />
              <h2>Weatherproof</h2>
              <p>
              Operating out of Portland, Oregon, we understand what <br /> 
              it’s like to suddenly deal with foul weather. This can <br />
              create serious problems when it comes to using an ATM <br /> 
              outdoors. We ensure this will not be an issue, and protect <br /> 
              our event ATMs from moisture and direct sunlight.
              </p>
          </div>
          <img src= {rain} alt="image of a puzzle" className='puzzle'/>
          <div className='ProcessingText3'>
              <br />
              <br />
              <h2>Unlimited Vault Loading</h2>
              <p>
              Events are notorious for requiring exceptional amounts of <br />
              cash. In our experience, even small events often require <br />
              over $50,000 of cash on hand to keep ATMs filled. When you <br />
              request an event ATM through us, we guarantee unlimited vault <br /> 
              loading. While a variety of things can go wrong at an event, <br />
              running out of cash will not be one of them. 
              </p>
          </div>
          <img src={safe} alt="image of a phone" className='phone'/>
      </div>
  </div>
  <div className="ReadyForATM">
      <h3>Ready to start processing your ATM transactions? </h3>
      <FormButton text = 'Apply For Processing' />
  </div>
  </>
)
}

export default EA
