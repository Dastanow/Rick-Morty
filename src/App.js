import { useEffect, useState } from 'react';
import './App.css';
import charcerApi from './Api/charTerapi';
import { useDispatch, useSelector } from 'react-redux';
import { getAllcharakters, getFilteredCharakter } from './stor/characterSlice';
import Product from './Product';

function App() {  
  const dis = useDispatch()  
  const  character  = useSelector((state) => state.caracter.character)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [type, setType] = useState('') 
  const [status, setStatus] = useState('') 
  // console.log(character);
  useEffect(() =>{  
    dis(getFilteredCharakter({name, gender, type, status, page: 1,}))
  },[dis])
  return (
    <div className="App">
      {/* {character?.map((item) => {
        return <Product key={item.id} {...item}/>
        })} */}
    </div>
  );
}

export default App;
