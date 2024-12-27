// src/App.js
import React from 'react';
import Header from './components/Header/Header'; // Correct path to Header component
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Education from './components/Body/Education/Education';
import Experience from './components/Body/Experience/Experience';
function App() {
  return (
    <div>
      <Header />
      <Body/>
<Education/>
<Experience/>
      <Footer/>
    </div>
  );
}

export default App;
