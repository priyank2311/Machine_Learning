import React, {useState} from 'react'
import './EmployeesDetails.css'
import { EmployeesData } from '../../Data/Employees'

const EmployeesDetails = () => {
  const [selectEmp, setSelectEmp] = useState(null);

  const [isToggle, setIsToggle] = useState(false);

  const handleClicked = (emply) => {
    setSelectEmp(emply);
  }

  return (
    <div className='container'>
      <header className='header'>
        <h1>Employees DataBase Management Center</h1>
        {
          isToggle && (
            <div className='addNewEmployees'>
              <form className='forms-container'>
                <div>
                <input type='text' placeholder='First Name' required />
                <input type='text' placeholder='Last Name' required />
                </div>
                <input type='text' placeholder='Address' required />
                <input type='email' placeholder='Email Id' required />
                <input type='number' placeholder='Contact Number' required />
                <input type='date' placeholder='DOB' required />
                <button className='databaseBtn'>Add Employees</button>
              </form>
            </div>
          )
        }
        <button className='databaseBtn' onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? 'Cancel' : 'Add Employees'}
        </button>
      </header>

      <div className='employees__database'>
        <div className='employees-name'>
          <span className='employees-list'>Employees List</span>
          <div className='render-names'>
            <span>
              {
                EmployeesData.map((detail) => <h2 onClick={() => handleClicked(detail)} className='empl-details'>{`${detail.firstName} ${detail.lastName}`}</h2>)
              }
            </span>
          </div>
        </div>

        <div className='employees-details'>
          <span className='employees-list'>Employees Information</span>
          <div className='render-info'>
            {
              selectEmp && (
                <div className='employee-info'>
                  <img src={selectEmp.imageUrl} alt='' />
                  <h2>{`${selectEmp.firstName} ${selectEmp.lastName}`}</h2>
                  <span>{selectEmp.address}</span>
                  <span>{selectEmp.email}</span>
                  <span>{`Mobile: ${selectEmp.contactNumber}`}</span>
                  <span>{`DOB: ${selectEmp.dob}`}</span>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeesDetails