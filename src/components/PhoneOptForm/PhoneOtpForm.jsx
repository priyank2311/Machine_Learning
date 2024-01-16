import React, {useState} from 'react';
import OptInputUI from '../OptInputUI';
import './PhoneOptForm.css';

const PhoneOtpForm = () => {
  const[phoneNum, setPhoneNum] = useState('');
  const [showOptInput, setShowOptInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;

    if(phoneNum.length < 10 || regex.test(phoneNum)) {
      alert('Invalid Phone Number');
    }

    setShowOptInput(true);
  }

  const handleChanged = (e) => {
    setPhoneNum(e.target.value)
  }

  const onOtpSubmit = (opt) => {
    console.log('Login Successfully', opt)
  }

  return (
    <div className='phoneoptform'>
      <h1>Log in or sign up to continue</h1>
      {
        !showOptInput ? (
          <form onSubmit={handleSubmit} className='formHeader'>
            <div className='loginId'>
              <span style={{ border:'1px solid gray', padding:'12px', fontSize: '20px', borderRadius: '10px', 
              textAlign: 'center', color: 'gray'}}>
                +91
              </span>
              <input type='text' value={phoneNum} onChange={handleChanged} placeholder='Enter mobile number'
              style={{height:'48px', width: '30rem', paddingLeft: '26px', fontSize: '20px'}}
              />
            </div>
            <button type='submit'>Get OTP</button>
          </form>
        ) : (
          <div>
            <p>Enter Opt send to {phoneNum}</p>
            <OptInputUI length={4} onOtpSubmit={onOtpSubmit} />
          </div>
        )
      }    
    </div>
  )
}

export default PhoneOtpForm