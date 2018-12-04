import React, {Component} from 'react';
import { Jumbotron, Row ,Col ,Grid, ListGroup, ListGroupItem, Button, Media, Image, Modal } from 'react-bootstrap';
import './getstarted.css';
// import './signup.css';
import Axios from 'axios';


export default class Getstarted extends Component{
 state={
     show: false,
     firstName:'',
     lastName:'',
     email:'',
     password:'',
     profilepic:'',
     formErrors:{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      },
      createmsg:'',
      success:false,
      class:''
 };
 
 formValid = (form)=> {
    // Define local variable to hold formErrors
    //  let formErrors = form.formErrors;
     let valid = true;
    Object.values(form).forEach((val)=>{
     if(val.length > 0){
        valid = false;
        console.log('if error', val);
      }
      
     
      
    })
    return valid;  
    }

 handleSubmit = (event)=>{
  event.preventDefault();
  this.setState({invalidForm:''});
   if(this.formValid(this.state.formErrors)){
      console.log(`
    --SUBMITTING--
    First name : ${this.state.firstName}
    Last name : ${this.state.lastName}
    Email: ${this.state.email}
    Password: ${this.state.password}
    ProfilePic: ${this.state.profilepic})
    `)
    
    Axios.post('/api/create', {
      fname: (this.state.firstName).toLowerCase(),
      lname: (this.state.lastName).toLowerCase(),
      email: (this.state.email).toLowerCase(),
      password: (this.state.password).toLowerCase(),
      profilepic:this.state.profilepic
    })
    .then((result) => {
      console.log(result.data);
     if(result.data == 'User already exists'){
        this.setState({
          createmsg:'User already exists',
          success: true})
     } 
     else{
      this.setState({
        createmsg:'Account Successfully Created!',
        success: true,
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        profilepic:''
      })
     }
    })

  }  
// Error message for wrong user inputs 
  else {
      console.error('FORM INVALID---DISPLAY ERROR MESSAGE');
      this.setState({createmsg:'Invalid Entries'})
      }
    }


handleChange = (event)=> {
event.preventDefault();
const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const {name, value} = event.target;
let formErrors = this.state.formErrors;
// Set the invalidform as blank
this.setState({invalidForm:''})
switch (name) {
  case "firstName":
   formErrors.firstName =
   value.length < 3 ? 'minium 3 characters required' : "";
   break;
  case "lastName":
   formErrors.lastName =
   value.length < 3 ? "minium 3 characters required" : "";
   break;
  case "email":
   formErrors.email =
   emailRegex.test(value) ? "" : 'invalid email address';
   break;
  case 'password':
   formErrors.password = 
   value.length < 6 ? "miminum 6 length password" : "";
   break;
  default:
    break;
}
this.setState({formErrors, [name]: value}, () => {
   console.log('formErrors',this.state.formErrors);
});
}

 handleClose = () => {
   this.setState(
     {    show: false,
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      profilepic:'',
      formErrors:{
       firstName:'',
       lastName:'',
       email:'',
       password:'',
       },
       createmsg:'',
       success:false,
       class:''
    });

 }

 handleShow = () => {
 
    this.setState({ show: true });
  }

 
 render(){

  return(
      <div>
 <Jumbotron className="getstarted-jumbo align-text-top">
 <p><strong>7 WEEKS FREE</strong> <small>Commit to a healthier 2019 and get 7 weeks of unlimited workouts for FREE!</small>

 </p>
</Jumbotron>;

 <Grid>
 <Row className="show-grid">
    <Col xs={6} md={3}>
    <ListGroup>
    <ListGroupItem><h3>BEST VALUE</h3></ListGroupItem>
    <ListGroupItem >
    <h1 >BOLD 24+</h1>
    <h1>$69</h1>
    <h4>24 MONTH MINIMUM</h4>
    <Button onClick={this.handleShow}>SIGN UP</Button>
    </ListGroupItem>
    </ListGroup>
    </Col>

    <Col xs={6} md={3}>
    <ListGroup>
      <ListGroupItem> <h3>MOST POPULAR</h3></ListGroupItem>  
      <ListGroupItem>
    <h1>BOLD 12+</h1>
    <h1>$79</h1>
    <h4>12 MONTH MINIMUM</h4>
    <Button onClick={this.handleShow}>SIGN UP</Button>
    </ListGroupItem>
    </ListGroup>    
    </Col>

    <Col xs={6} md={3}>
    <ListGroup>
      <ListGroupItem><h3>MOST POPULAR</h3></ListGroupItem>  
      <ListGroupItem>
    <h1>BOLD 6+</h1>
    <h1>$99</h1>
    <h4>6 MONTH MINIMUM</h4>
    <Button onClick={this.handleShow}>SIGN UP</Button>
    </ListGroupItem> 
    </ListGroup>
    </Col>

    <Col xs={6} md={3}>
    <ListGroup>
      <ListGroupItem><h3>MOST POPULAR</h3></ListGroupItem>  
      <ListGroupItem>   
    <h1>4 WEEKS</h1>
    <h1>$189</h1>
    <h4>SINGLE PURCHASE</h4>
    <Button onClick={this.handleShow}>SIGN UP</Button>
    </ListGroupItem> 
    </ListGroup>
    </Col>
  </Row>
 
  <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="wrapper">
        <div >
        <span className={this.state.success?'text-success':'text-error'}>{this.state.createmsg}</span>
          {/* <h1>Create Account</h1> */}
          <form>
            <div className="firstName">
              <label className="lab-signup" htmlFor="firstName">First Name</label>
              <input
                className=""
                placeholder="First Name"
                type="text"
                name="firstName"
                value={this.state.firstName}
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.firstName.length > 0 && (
                  <span className='errorMessage'>{this.state.formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label className="lab-signup" htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={this.state.lastName}
                noValidate
                onChange={this.handleChange}
              />
            {this.state.formErrors.lastName.length > 0 && (
                <span className='errorMessage'>{this.state.formErrors.lastName}</span>
            )}
            </div>
            <div className="email">
              <label className="lab-signup" htmlFor="email">Email</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                noValidate
                onChange={this.handleChange}
              />
              {this.state.formErrors.email.length > 0 && (
                <span className='errorMessage'>{this.state.formErrors.email}</span>  
              )}
            </div>
            <div className="password">
              <label className="lab-signup" htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
                {this.state.formErrors.password.length > 0 && (
                <span className='errorMessage'>{this.state.formErrors.password}</span>  
              )}
            </div>
            <div className="profilepic">
              <label className="lab-signup" htmlFor="profilepic">Profile Picture</label>
              <input
                placeholder="Profile Picture"
                type="text"
                name="profilepic"
                value={this.state.profilepic}
                noValidate
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>         
          </Modal.Body>
          <Modal.Footer>
            <Button className="getstarted-btn" onClick={this.handleSubmit} type="submit">Create Account</Button>
          </Modal.Footer>
        </Modal>
 </Grid>

 <div>

  <Media>
    <Media.Left>
      <Image width={600} height={600} src="https://campgladiator.com/upload/images/CG%20Training%20Cycle/Bold/2_Membership_circle.jpg" circle alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>MEMBERSHIP PERKS</Media.Heading>
      <p>
      As a BOLD member you’ll receive the best pricing on Camp and earn points every time you check in or refer a friend. 
      You can cash in your points for discounts on CG Gear, events like CG Games or CG FIT, or even your monthly Camp price! 
      The more you check in, the more you save.
      </p>
    </Media.Body>
  </Media>

    <Media>
    <Media.Body>
      <Media.Heading>EXCLUSIVE WORKOUTS</Media.Heading>
      <p>
      After each four-week Camp, there is an exclusive week of workouts for Campers who have joined our BOLD membership program.
      </p>
    </Media.Body>
    <Media.Right>
      <Image width={600} height={600} src="https://campgladiator.com/upload/images/CG%20Training%20Cycle/Bold/3_exclusive_circle.jpg" circle alt="thumbnail" />
    </Media.Right>

  </Media>
  
  <Media>
    <Media.Left>
      <Image width={600} height={600} src="https://campgladiator.com/upload/images/CG%20Training%20Cycle/Bold/4_Pif_circle.jpg" circle alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>PAY IT FORWARD</Media.Heading>
      <p>
      We believe you're more likely to hit your fitness goals (and have fun doing it) when you have an accountability buddy. 
      One of the awesome perks of our BOLD 12+ and BOLD 24+ memberships is a FREE four-week Camp code to share with a friend!
      </p>
    </Media.Body>
  </Media>





 </div>

      </div>
     
  )

 }

}