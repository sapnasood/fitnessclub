import React, {Component} from 'react';
// import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import './signin.css';
import Axios from 'axios'
import Userprofile from './userprofile.js';


export default class Signin extends Component{
 
    state={
      email: "" ,
      password: "",
      error:""
 }

 handleChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value })
  }

  handleSignIn = (event) => {
    event.preventDefault();
  Axios.post('/api/signin', {
      email: (this.state.email).toLowerCase(),
      password:(this.state.password).toLowerCase()
  }).then((result) => {
    console.log(result)
  // Handle success or error message from server 
  if(result.data==null){
    console.log('before setState',this.state);
   this.setState({
    email:'',
    password:'', 
    error:'Email or Password is wrong'});
   console.log('after setState', this.state)
  } 
  else{ 
  this.props.login(result.data)
  }
  })
  }

 render(){
  return(
    <div className="wrappers">
     <div className="form-wrapper">
    <form id="signin-form">

    <div className="email">
      <label className="lab-signin" htmlFor="email">Email</label>
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={this.state.email}
        noValidate
        onChange={this.handleChange}
      />

    </div>

    <div className="password">
      <label className="lab-signin" htmlFor="password">Password</label>
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={this.state.password}
        noValidate
        onChange={this.handleChange}
      />

    </div>
    <div className="createAccount">
      <button onClick={this.handleSignIn} type="submit">SIGN IN</button>
      <br></br>
      {this.state.error && <span className="errorMessage-signin">Invalid Email or Password</span>}
     
    </div>
  </form>
</div>
</div>

  )




 }




}