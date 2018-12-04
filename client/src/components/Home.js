import React, {Component} from 'react';
// import Navbar from './Navbar.js';
import Player from './video.js';
import Location from './location.js';

export default class Home extends Component{
 state={}
//  zipcode = () =>{}


 render(){
  return(
      <div>
       <Player/>
       <Location zipcode={this.props.zipcode}/>
     
      </div>



  );

 }




}