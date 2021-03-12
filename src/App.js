import {useState} from 'react';
import './App.css';
import AnalogClock from './components/AnalogClock/AnalogClock'
import Draw from './components/Draw/Draw'
import Controls from './components/Controls/Controls';


function App() {
  const [color, setColor] = useState("22C55E")
  const handleColorChange = (e) =>{
    setColor(e.target.value)
  }
  return (
    <div className="App">
      <Controls handleColorChange={handleColorChange}/>
      <AnalogClock />
      <Draw />
    </div>
  );
}

export default App;
