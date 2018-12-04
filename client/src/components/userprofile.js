import React, {Component} from 'react';
import './userprofile.css';
import { Grid, Row, Col, Thumbnail, Button, Modal} from 'react-bootstrap';
import Axios from 'axios';

export default class Userprofile extends Component{
state = {
   
        fname:this.props.userprofile.fname,
        lname:this.props.userprofile.lname,
        email:this.props.userprofile.email,
        chekins:this.props.userprofile.chekins,
        profilepic:this.props.userprofile.profilepic,
        password:this.props.userprofile.password,
       checkinstat:"",
       updateMsg:""
};


handleCheckin = ()=>{
  this.setState({checkinstat:""})
   console.log('data received from app', this.state)
   const profile = this.state;
   let chekins = profile.chekins + 1;
   console.log('checkin incremented by 1', profile.chekins)
  Axios.put('/api/checkin', {
      email:this.state.email,
      chekins:chekins
    }).then((result) => {
        console.log(result.data);
        if(result.data === 'You are already Checked-In for today'){
         this.setState({checkinstat:result.data})
        }
        else{
          // profile.chekins = chekins;
          console.log('profile afetr axios call', profile)
          this.setState({chekins:chekins});

        }
      })
    }

    handleSignout = ()=>{
      this.props.signout();
    }

    handleClose = () => {
      this.setState({ show: false });
   
    }
   
    handleShow = () => {
    
       this.setState({ show: true });
     }    

 handleUpdate = ()=>{
// Update users personal information
Axios.put('/api/userprofile',{
  fname:this.state.fname,
  lname:this.state.lname,
  email:this.state.email,
  chekins:this.state.chekins,
  profilepic:this.state.profilepic,
  password:this.state.password
}).then((result)=>{
  console.log('profile afetr axios call', result)
  this.setState({updateMsg:'Profile updated!'});
  console.log('status after update', this.state);
})
 }  
 
 handleChange = (event)=> {
  this.setState({
    [event.target.name]:event.target.value
}, ()=>{
  console.log('changed value', this.state)
})
}

render() {
     const userprofile = this.state;
     console.log('inside render', userprofile)


return(
<Grid className="centered">
  <Row>
    <Col xs={12} md={12}>
     <p id="checkin-err">{this.state.checkinstat}</p>
     
      <Thumbnail src={`${userprofile.profilepic}`}  alt="242x200">
        <h3>Name: { userprofile.fname} {userprofile.lname}</h3>
        <h3>Account: {userprofile.email}</h3>
        <h3>Check-In Points:{userprofile.chekins}</h3>
        
          <p>
          <Button bsStyle="primary" onClick={this.handleCheckin}>Check-In</Button>
          &nbsp;
          <Button bsStyle="success" onClick={this.handleShow}>Update</Button>
          &nbsp;
          <Button bsStyle="default" onClick={this.handleSignout}>Sign Out</Button>
        </p>
      </Thumbnail>
    </Col>
   </Row>
   <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Update Personal Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="wrapper">
        <div >
        <h4 className="test-success">{userprofile.updateMsg}</h4>
          <form>
            <div className="firstName">
              <label className="lab-signin" htmlFor="firstName">First Name</label>
              <input
                className=""
                placeholder="First Name"
                type="text"
                name="fname"
                defaultValue={this.state.fname}
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label className="lab-signin" htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lname"
                defaultValue={this.state.lname}
                noValidate
                onChange={this.handleChange}
              />

            </div>
            <div className="email">
              <label className="lab-signin" htmlFor="email">Email</label>
              <input disabled
                placeholder="Email"
                type="email"
                name="email"
                defaultValue={this.state.email}
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
                defaultValue={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="profilepic">
              <label className="lab-signin" htmlFor="profilepic">Profile Picture</label>
              <input
                placeholder="Profile Picture"
                type="text"
                name="profilepic"
                defaultValue={this.state.profilepic}
                noValidate
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>         
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleUpdate} type="submit">Update</Button>
          </Modal.Footer>
        </Modal>   
  </Grid>  
)


}





}