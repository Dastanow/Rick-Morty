import React from 'react'
import { setCurrentPage } from '../stor/characterSlice';
import './input.scss'
const Input = ({name, setName, setStatus, gender, setGender}) => {
      const onClickAlive = (event) => {
        console.log(event);
        setStatus(event.target.value)
      }
      const onClickGender = (event) => {
        console.log(event);
        setGender(event.target.value)
      }
  return (
    <div className='input'>
      <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Filter by name..."></input>
        <select onChange={onClickAlive} placeholder="status">
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>  
        <select onChange={onClickGender} placeholder="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>  

        
          </div>
  )
}

export default Input