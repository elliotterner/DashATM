import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import axios, { AxiosHeaders } from 'axios';

const EmailRestAPI = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessWebsite, setBusinessWebsite] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [numberLocations, setNumberLocations] = useState('');
    const [dailyCustomers, setDailyCustomers] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
  

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const serviceId = 'service_81jbajc';
        const templateId = 'template_vgyn8fc';
        const publickey = 'yJ1B8COD9BtNzIHi1';

        const formData = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publickey,
            template_params: {
                from_first_name: firstName,
                from_last_name: lastName,
                from_phone_number: phoneNumber,
                from_email: email,
                from_business_name: businessName,
                from_business_website: businessWebsite,
                from_business_address: businessAddress,
                from_number_locations: numberLocations,
                from_daily_customers: dailyCustomers,
                from_additional_info: additionalInfo,
            }
        };

        try{
            const res = axios.post("https://api.emailjs.com/api/v1.0/email/send", formData);
            console.log(res.formData);
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('');
            setBusinessName('');
            setBusinessWebsite('');
            setBusinessAddress('');
            setNumberLocations('');
            setDailyCustomers('');
            setAdditionalInfo('');
        } catch (error) {
            console.error(error);
        }
    
    }

  
    return (
    <div className='FormSubmit'>
        <div className='formHeader'>
            <h1> Free ATM Placement / Processing Application</h1>
            <p>Please be as thorough as possible!</p>
        </div>

        <form onSubmit={handleSubmit} className='Form'>
            <div className='Name'>
                <div className='firstName'>
                    <p>First Name</p>
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) =>setFirstName(e.target.value)} 
                    />
                </div>
                <div className='lastName'>
                    <p>Last Name</p>
                    <input 
                        type="text"
                        value={lastName}
                        onChange={(e) =>setLastName(e.target.value)} 
                    />

                </div>
            </div>
            <div className='phoneNumberContainer'>
                <div className='phoneNumber'>
                    <p>Phone Number</p>
                    <input 
                        type="text"
                        value={phoneNumber}
                        onChange={(e) =>setPhoneNumber(e.target.value)} 
                    />

                </div>
            </div>
            <div className='emailContainer'>
                <div className='email'>
                    <p>Email</p>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)} 
                    />
                </div>
            </div>
            <div className='businessNameContainer'>
                <div className='businessName'>
                    <p>Business Name</p>
                    <input 
                        type="text"
                        value={businessName}
                        onChange={(e) =>setBusinessName(e.target.value)} 
                    />
                </div>
            </div>
            <div className='businessWebsiteContainer'>
                <div className='businessWebsite'>
                    <p>Business Website</p>
                    <input 
                        type="text"
                        value={businessWebsite}
                        onChange={(e) =>setBusinessWebsite(e.target.value)} 
                    />
                </div>
            </div>
            <div className='businessAddressContainer'>
                <div className='businessAddress'>
                    <p>Business Address</p>
                    <input 
                        type="text"
                        value={businessAddress}
                        onChange={(e) =>setBusinessAddress(e.target.value)} 
                    />
                </div>
            </div>
            <div className='numLocationsContainer'>
                <div className='numberLocations'>
                    <p>Number of Locations</p>
                    <input 
                        type="text"
                        value={numberLocations}
                        onChange={(e) =>setNumberLocations(e.target.value)} 
                    />
                </div>
            </div>
            <div className='dailyCustomersContainer'>
                <div className='dailyCustomers'>
                    <p>Daily Customers</p>
                    <input 
                        type="text"
                        value={dailyCustomers}
                        onChange={(e) =>setDailyCustomers(e.target.value)} 
                    />
                </div>

            </div>
            <div className='additionalInfoContainer'>
                <div className='additionalInfo'>
                    <p>Message</p>
                    <textarea 
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)} 
                        rows={5} // Adjust the number of rows as needed to control the initial height
                    />
                </div>

            </div>
            <div>
                <input type="submit" value="Send" className='submit' />
            </div>
        </form>
    </div>
  )
}

export default EmailRestAPI