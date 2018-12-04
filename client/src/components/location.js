import React, { Component } from 'react';
import { FormGroup, Checkbox } from 'react-bootstrap';
import './location.css'
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

export default class Location extends Component{
    state={};

  handleSearch = (event)=>{
   event.preventDefault();
   this.props.zipcode();
  }  
    render(){
     return(
<div className='location'>
 <h1 id="loc-header">FIND A WORKOUT NEAR YOU</h1>
 <form>
 <FormGroup>
  <input type='text' placeholder='Enter Zipcode' name='zipcode'></input>
  &nbsp;&nbsp;
   <button id="location-btn" onClick={this.handleSearch}>Search</button>
  </FormGroup>
   
 </form>

</div>


     )


    }

}

