import React from 'react';
import './App.css';
import building from './img/building.gif';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
        <img src={building} alt="building" id="building"/>
        <h2>Men at Work</h2>
        <SocialIcon url="https://www.facebook.com/nirmaaniitmandi/" className="socialicon"/>
        <SocialIcon url="https://github.com/nirmaan-iitm" className="socialicon"/>
        <SocialIcon url="https://www.linkedin.com/company/nirmman-iit-mandi/" className="socialicon"/>
        <SocialIcon url="mailto:nirmaan_club@students.iitmandi.ac.in" className="socialicon"/>
    </div>
  );
}

export default App;
