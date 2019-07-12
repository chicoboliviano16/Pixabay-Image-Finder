import React from 'react';
import Navbar from './components/navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Search from './components/search/Search'

import './App.css';

function App() {
  return (

    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
