import './App.css';
import { Layout } from "./components/Layout";
import * as React from 'react';
import { Footer } from 'components/Footer';

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="App">
        <div className="mainContainer">
          <h1>Yoga con Matteo</h1>
          <Layout />
        </div>
      </div>
    </>
  );
}

export default App;
