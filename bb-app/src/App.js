import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Combo from'./components/combos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />  
       <Title />
       <Combo />

       <Footer />
      </header>
    </div>
  );
}

export default App;
