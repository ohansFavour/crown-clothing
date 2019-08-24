import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfile} from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName:"",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit =  async (event)=>{
      event.preventDefault();
      const {displayName, email, password, confirmPassword} = this.state;
      if(password !== confirmPassword){
          this.setState({
              password:"",
              confirmPassword: ""
          })
          alert("Passwords don't match");
          return;
      }  
      if(password.length < 6){
        alert("Passwords should be at least 6 characters");
        return;
      }
      const {user} = await auth.createUserWithEmailAndPassword(email, password);   // returns the user data
      
      try{
       await createUserProfile(user,{displayName});
       
         }catch(error){
             console.error(error);
         }

         this.setState({
            displayName:"",
            email: "",
            password: "",
            confirmPassword: ""
         })
    }

    handleChange= event=>{
        const {name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                    />
                  <CustomButton type="submit" onClick={this.handleSubmit}> SIGN UP</CustomButton> 
                </form>
            </div>
        );
    }
}

export default SignUp;
