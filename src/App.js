import { useEffect } from 'react';
import './App.css';
import charcerApi from './Api/charTerapi';
import { useDispatch } from 'react-redux';
import { getAllcharakters, getCharakter } from './stor/characterSlice';

function App() {  
  const dis = useDispatch()
  useEffect(() => {  
    console.log(charcerApi.gerfiltercharac());
 },[])
  return (
    <div className="App">
y
    </div>
  );
}

export default App;
