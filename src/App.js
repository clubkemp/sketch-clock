import logo from './logo.svg';
import './App.css';
import AnalogClock from './components/AnalogClock/AnalogClock'
import Draw from './components/Draw/Draw'
import Controls from './components/Controls/Controls';


function App() {
  const handleColorChange = (e) =>{
    console.log(e.target.value)
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
