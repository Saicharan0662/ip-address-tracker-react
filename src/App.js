import './App.css';
import CustonInput from './components/custom-input/CustonInput';
import Map from './components/map/Map';

function App() {
  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
        <CustonInput />
      </header>
      <section className='map-section'>
        <Map />
      </section>
    </div>
  );
}

export default App;
