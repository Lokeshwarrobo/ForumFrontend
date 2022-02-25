import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

// import validator from "validator";
import ForumService from "../Service/ForumService";
// import sagarsoft from "../images/sagarsoft.png"
toast.configure()

export function Login() {

    useEffect(() => {
        document.title = "Login - Discussion forum"
      }, [])

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [usererror, setUsererror]=useState("");
    const [passworderror, setPassworderror]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {userName, password}
        ForumService.loginAUser(user)
        .then(res => {
            if(res.data === "Success") {
                toast.success('User loged in successfully')
                console.log(user)
              sessionStorage.setItem('islogin',user.userName );
              window.location.href='/';
            }
            if(res.data === "Password not matched"){
                console.log(res.data)
                setPassworderror("Password Mismatch")
                
              }
              if(res.data === "User Not Found"){
                console.log(user)
                setUsererror("User name not registered")
            
              }
        })

    }

    var upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[^A-Za-z0-9]/,
        minLength = 8,
        maxLength = 16,
        userNumber = /[0-9]$/;


    const Uservalidation = () => {

        const user = {userName, password}
       
        if (userName== "") {
            setUsererror("Please enter the username or email");
        }
        else if(!(((userName.startsWith("SIL-")) && (userName.charAt(4).match(userNumber)) && (userName.charAt(5).match(userNumber)) && (userName.charAt(6).match(userNumber)) && (userName.charAt(7).match(userNumber)) && (userName.length == minLength)) || ((userName.startsWith("SIT-")) && (userName.charAt(4).match(userNumber)) && (userName.charAt(5).match(userNumber)) && (userName.charAt(6).match(userNumber)) && (userName.charAt(7).match(userNumber)) && (userName.length == minLength)) || userName.includes("@sagarsoft.in") || userName.includes("@sapplica.com"))) {
            setUsererror("Please enter the valid username or email");
        }
        else {
            setUsererror("");
        }

       
    }


    const Passwordvalidation = () => {
        if (password == "") {
            setPassworderror("Please enter the password");
        }
        else if(!(password.match(upper) && password.match(lower) && password.match(special) && password.length >= minLength && password.length <= maxLength)) {
            setPassworderror("please enter valid passwoord");
        }
        else{
           setPassworderror("");
        }
          
    }

    return (
        <div class="parent-container d-flex">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <br/>
                        <h1>SAGARSOFT DISCUSSION FORUM</h1>
                        <div className="Login">
                        <hr/>
                        {/* <Form onSubmit={handleSubmit}> */}
                                <Form.Group controlId="userName">
                                    <Form.Label id="label">Username/Email</Form.Label>
                                    <Form.Control
                                        id = "userName"
                                        name = "userName"
                                        
                                        type="text"
                                        placeholder="eg.SIL/SIT-0756 or abc@sagarsoft.in/saplica.com"
                                        value={userName}
                                        onChange={(e) => setuserName(e.target.value) }
                                        onBlur={Uservalidation}
                                    />
                                    <div id="er1">
                                        {usererror}
                                    </div>
                                </Form.Group><br />
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label id="label">Password</Form.Label>
                                    <Form.Control
                                        id = "password"
                                        name = "password"
                                        type="password"
                                        placeholder="Abcde@1234"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value) }
                                        onBlur={Passwordvalidation}
                                    />
                                    <div id="er1">
                                        {passworderror}
                                    </div>
                                </Form.Group><br />
                                <div class="row">
                                    {/* <div class="col ml-auto">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
                                    </div> */}
                                    <div class="col ml-auto text-center">
                                        <a href="/conformmail" class="tt-underline">Forgot Password</a>
                                    </div>
                                </div><br />
                                <div class="col ml-auto text-center">
                                    <Button id="login" onClick={(e) => handleSubmit(e)} block size="lg" type="submit">
                                        Login
                                    </Button>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div class="col ml-auto text-center">
                                        <h6>Don't have an account? <a href="/signup">Sign up</a></h6>
                                    </div>
                                </div>
                            {/* </Form> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" id="c1" >
                <div class="row">
                     {/* <div class="card">
                             <img src={sagarsoft} style={{width:"50%"}}/>  
                    </div>  */}
                </div>
            </div>
        </div>
    )
}   