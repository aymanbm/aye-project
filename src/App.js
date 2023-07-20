import './App.css';
import './component/home.css';
import './component/header.css';
import React from 'react';
import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import Home from "./component/home"
import AppHeader from './component/header';




function App () {
    return (
      <BrowserRouter>
          <div className="App">
            
              <header id='header' >
              <AppHeader/>
              </header>
              
              <div id='body'>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route  path='/home' element = {<Home />}></Route>
                </Routes>
              </div>
              
            
          </div>
      </BrowserRouter>
    );
  }
export default App;


