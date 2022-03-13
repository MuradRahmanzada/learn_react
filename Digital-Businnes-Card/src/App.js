import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Info from './components/info'
import About from './components/About'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Info/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
