import React, {useState, useRef, useEffect} from 'react'

const OptInputUI = ({length=4, onOtpSubmit=() => {}}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [allInputsFilled, setAllInputsFilled] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if(inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [])

  useEffect(() => {
    const getFinish = otp.join('');

    setAllInputsFilled(getFinish.length === length)
  },[otp])

  console.log(otp)

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };


  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  }

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  }

  const handleOtpSubmit = () => {
    const combinedOtp = otp.join('');
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };

  return (
    <div>
      {
        otp.map((value, index) => {
          return (
            <input key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type='text'
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ width: '40px', height: '40px', margin: '5px', textAlign: 'center', fontSize: '1.2rem'}}
            />
          )
        })
      }
      {
        allInputsFilled && (<button onClick={handleOtpSubmit}>Login</button>)
      }
    </div>
  )
}

export default OptInputUI