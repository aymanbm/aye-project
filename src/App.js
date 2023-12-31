import './App.css';
import './component/home.css';
import './component/header.css';
import React, { Component } from 'react';
import { BrowserRouter , Routes, Route, Navigate ,Switch , Redirect} from 'react-router-dom';
import Home from "./component/home"
import AppHeader from './component/header';
import Footer from './component/footer';




class App extends Component {
  
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
                  {/* <Route path="/aye-project" element={<Navigate to="/aye-project" />} /> */}
                  {/* <Redirect to="/" /> */}
                  <Route exact path='/aye-project' element = {<Home />}/>
                  {/* <Route exact path='/:test' element = {<Home />}/> */}
                </Routes>
                </div>
              {/* </Switch> */}
              <footer id='footer' >
              <Footer/>
              </footer>
              
            
          </div>
      </BrowserRouter>
    );
  }}
export default App;


