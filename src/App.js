import React from 'react';
import Biography from './Biography';

const Footer = () => (
  <div className="jumbotron" style={{textAlign: "center", marginBottom: "0", backgroundColor: "black", color: "grey"}}>
    <h4>Alperen ER</h4>
    <a className="nav-link active" href="https://www.instagram.com/alprn_er/" style={{float: "right"}}>Instagram</a>
    <a className="nav-link active" href="https://github.com/alprNer" style={{float: "right"}}>Github</a>
    <a className="nav-link active" href="https://www.linkedin.com/in/muhammetalperener/" style={{float: "right"}}>LinkedIn</a>
  </div>
);

const App = () => {
  return (
    <div>
      <h1></h1>
      <Biography />
      <Footer />
    </div>
  );
};

export default App;
