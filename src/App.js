import React from 'react';

import 'bootswatch/dist/darkly/bootstrap.min.css';

import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
