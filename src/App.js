import logo from './logo.svg';
import './App.css';
import AnalogClock from './components/AnalogClock/AnalogClock'
import Draw from './components/Draw/Draw'
import Controls from './components/Controls/Controls';


function App() {
  return (
    <div className="App">
      <Controls />
      <AnalogClock />
      <Draw />
    </div>
  );
}

export default App;
