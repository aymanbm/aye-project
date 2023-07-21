import './App.css';
import './component/home.css';
import './component/header.css';
import React, { Component } from 'react';
import { BrowserRouter , Routes, Route, Navigate ,Switch , Redirect} from 'react-router-dom';
import Home from "./component/home"
import AppHeader from './component/header';




class App extends Component {
  componentDidMount = () =>{
    return(<Navigate to="/service" />) 
  }
  render(){

  
    return (
      <BrowserRouter>
          <div className="App">
            
              <header id='header' >
              <AppHeader/>
              </header>
              {/* <Switch> */}
                <div id='body'>
                <Routes>
                  {/* <Route path="/" element={<Navigate to="/" />} /> */}
                  {/* <Redirect to="/" /> */}
                  <Route exact path='/' element = {<Home />}/>
                  {/* <Route exact path='/:test' element = {<Home />}/> */}
                </Routes>
                </div>
              {/* </Switch> */}
              
              
            
          </div>
      </BrowserRouter>
    );
  }}
export default App;


