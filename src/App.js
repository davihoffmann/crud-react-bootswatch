import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootswatch/dist/darkly/bootstrap.min.css';

import Navbar from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
