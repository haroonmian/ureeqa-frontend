import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [dats, setdats] = useState<string>("hello")
  function getFetcher() {

    axios.defaults.baseURL = "http://localhost:4000/"
    const input = document.getElementById('innum') as HTMLInputElement | null;
console.log(input)
    axios.get(`/api/v1/prime?num=${input || input !=null ? input.value : 0}`)
      .then(function (response: any) {
        console.log(response.data.output);
        setdats(response.data.output)
      })
      .catch(function (error: any) {
        console.log(error);
      })
  }
  return (
    <>
      <div className="App">
        <h1>Get Your Prime Numbers</h1>
        {/* <label htmlFor="number">Number:</label> */}
        <input type="number" id="innum" name="number" data-testid="myinput"/>
        <button onClick={() => getFetcher()} >Get It</button>
        <h2 className="valueShow" id="result" data-testid="dats">{dats[0]}</h2>

      </div>
    </>
  );
}

export default App;
