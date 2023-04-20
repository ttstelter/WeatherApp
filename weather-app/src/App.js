import React, { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch('/api/weather');
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Current Weather:</h1>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}

// async function postExample() {
//   const data = { message: "Hello, Flask!" };
//   const response = await fetch('/api/example', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   const result = await response.json();
//   console.log(result);
// }


export default App;

// Default code
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
