import React, { Component } from 'react';
import {BrowserRouter, Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar.js';
// import Player from './components/video.js';
import Location from './components/location.js';
import Signin from './components/signin';
import Home from './components/Home.js';
import Userprofile from './components/userprofile.js';
import Getstarted from './components/getstarted.js';
import './App.css';
import history from './history.js';
import Map from './components/map.js';

class App extends Component {
  state ={
    userprofile:""
  };

  login = (userprofile)=>{
    console.log('I think it works', userprofile )
    this.setState({userprofile:userprofile})
    console.log('userprofile of App', this.state.userprofile);
    history.push({
      pathname: '/userprofile',
      state: {
        userprofile:userprofile
      }
    })

  }

  zipcode = ()=>{
   history.push({
    pathname: '/map'
   })
  }

  signout = ()=>{
    history.push({
      pathname: '/'
    })
  }

  render() {
    return (
  <Router history={history}>
       <div>
         <Navbar/>
        <Route exact path="/" component={() =>(<Home zipcode={this.zipcode}/>)}/>
        <Route path="/getstarted" component={Getstarted}/>
        <Route path="/signin" component={()=>(<Signin login={this.login}/>)}/>
        <Route exact path='/userprofile' component={() =>(<Userprofile userprofile={this.state.userprofile} signout={this.signout}/>)} />
        <Route path='/map' component={Map}/>
       </div>

      </Router>
    );
  }
}

export default App;
