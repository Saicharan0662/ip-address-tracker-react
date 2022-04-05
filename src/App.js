import { useState, useEffect } from 'react';
import './App.css';
import CustonInput from './components/custom-input/CustonInput';
import Map from './components/map/Map';
import axios from 'axios';
import Card from './components/info-card/Card';

function App() {

  const [info, setInfo] = useState();
  const [searchIP, setSearchIP] = useState('');

  const getLocation = async (ip) => {
    if (!ip) {
      const res = await axios.get('https://api.ipify.org?format=json')
      const { ip: localIP } = res.data;
      ip = localIP;
    }

    if (ip) {
      const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API_KEY
        }&ipAddress=${ip}`)
      // console.log(res.data)
      setInfo(res.data)
    }
  }

  useEffect(() => {
    getLocation();
  }, [])


  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
        <CustonInput
          searchIP={searchIP}
          setSearchIP={setSearchIP}
          getLocation={getLocation}
        />
        <Card
          info={info}
        />
      </header>
      <section className='map-section'>
        {info && <Map
          info={info}
        />}
        {!info &&
          <p>Loading...</p>
        }
      </section>
    </div>
  );
}

export default App;
