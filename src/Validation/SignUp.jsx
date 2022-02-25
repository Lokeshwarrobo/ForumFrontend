import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import './signup.css'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

// import validator from "validator";
import ForumService from "../Service/ForumService";
// import sagarsoft from "../images/sagarsoft.png"
toast.configure()

export function Signup() {

    const navs = useNavigate()
    useEffect(() => {
        document.title = "Signup - Discussion forum"
    }, [])

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [empId, setEmpid] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [usererror, setUsererror] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [empiderror, setEmpiderror] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [confirmpassworderror, setConfirmpassworderror] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {userName, password, empId, email}

        ForumService.registerAUser(user)
        .then(res => {
            if(res.data === "User added successfully"){
                console.log(res.data)
                toast.success('User signed up successfully') 
                navs("/login")
              }
              
              else{
                toast.error('Error in registring a user')   
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

        if (userName == "") {
            setUsererror("Please enter the userName");
        }
        else {
            setUsererror("");
        }
    }

    const Empidvalidation = () => {

        if (empId == "") {
            setEmpiderror("Please enter the empid");
        }
        else if (!(((empId.startsWith("SIL-")) && (empId.charAt(4).match(userNumber)) && (empId.charAt(5).match(userNumber)) && (empId.charAt(6).match(userNumber)) && (empId.charAt(7).match(userNumber)) && (empId.length == minLength)) || ((empId.startsWith("SIT-")) && (empId.charAt(4).match(userNumber)) && (empId.charAt(5).match(userNumber)) && (empId.charAt(6).match(userNumber)) && (empId.charAt(7).match(userNumber)) && (empId.length == minLength)))) {
            setEmpiderror("Please enter the valid empid");
        }
        else {
            setEmpiderror("");
        }
    }

    const Emailvalidation = () => {

        if (email == "") {
            setEmailerror("Please enter the email");
        }
        else if (!(email.includes("@sagarsoft.in") || email.includes("@sapplica.com"))) {
            setEmailerror("Please enter the valid email");
        }
        else {
            setEmailerror("");
        }
    }

    const Passwordvalidation = () => {
        if (password == "") {
            setPassworderror("Please enter the password");
        }
        else if (!(password.match(upper) && password.match(lower) && password.match(special) && password.length >= minLength && password.length <= maxLength)) {
            setPassworderror("Passwords must contain at least eight characters, including at least 1 letter, 1 number and 1 special character.");
        }
        else {
            setPassworderror("");
        }

    }

    const Confirmpasswordvalidation = () => {

        if (confirmpassword == "") {
            setConfirmpassworderror("Please enter the confirm password");
        }
        else if (password != confirmpassword) {
            setConfirmpassworderror("Password and Confirm Password do not match");
        }
        else {
            setConfirmpassworderror("");
        }
    }

    return (
        <div class="parent-container d-flex" id="parent">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <br />
                        <h1>SAGARSOFT DISCUSSION FORUM</h1>
                        <div className="Login">
                            <hr />
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="userName">
                                    <Form.Label id="label">Name</Form.Label>
                                    <Form.Control
                                        id="userName"
                                        name = "userName"
                                        autoFocus
                                        type="text"
                                        placeholder="eg.Jeno John"
                                        value={userName}
                                        onChange={(e) => setuserName(e.target.value)}
                                        onBlur={Uservalidation}
                                    />
                                    <div id="er1">
                                        {usererror}
                                    </div>
                                </Form.Group>
                                &nbsp;
                                <Form.Group controlId="empid">
                                    <Form.Label id="label">Emp id</Form.Label>
                                    <Form.Control
                                        id="empId"
                                        name = "empId"
                                        type="text"
                                        placeholder="eg.SIL-0756 or SIT-0756"
                                        value={empId}
                                        onChange={(e) => setEmpid(e.target.value)}
                                        onBlur={Empidvalidation}
                                    />
                                    <div id="er1">
                                        {empiderror}
                                    </div>
                                </Form.Group>
                                &nbsp;
                                <Form.Group controlId="email">
                                    <Form.Label id="label">Email</Form.Label>
                                    <Form.Control
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="eg.abc@sagarsoft.in/saplica.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={Emailvalidation}
                                    />
                                    <div id="er1">
                                        {emailerror}
                                    </div>
                                </Form.Group>
                                &nbsp;
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label id="label">Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="eg.Abcde@1234"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={Passwordvalidation}
                                    />
                                    <div id="er1">
                                        {passworderror}
                                    </div>
                                </Form.Group>
                                &nbsp;
                                <Form.Group size="lg" controlId="confirm password">
                                    <Form.Label id="label">Confirm Password</Form.Label>
                                    <Form.Control
                                        id="user"
                                        type="password"
                                        value={confirmpassword}
                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                        onBlur={Confirmpasswordvalidation}
                                    />
                                    <div id="er1">
                                        {confirmpassworderror}
                                    </div>
                                </Form.Group>
                                &nbsp;
                                <div class="col ml-auto text-center">
                                    <Button onClick={(e) =>handleSubmit(e)} id="login" block size="lg" type="submit">
                                        SignUp
                                    </Button>
                                </div>
                                <hr />
                                <div className="row">
                                    <div class="col ml-auto text-center">
                                        <h6>Already have an account? <a href="/login">Login</a></h6>
                                    </div>
                                </div>
                            </Form>
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