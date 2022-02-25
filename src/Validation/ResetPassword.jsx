import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import './Resetpassword.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForumService from "../Service/ForumService";
import {useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

toast.configure()

export function Resetpassword() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Reset password - Discussion forum"
      }, [])

   
    const [password, setpassword] = useState("");
    const [conformPassword, setconformPassword] = useState("");
    const [passworderror, setpassworderror] = useState("");
    const [conformPassworderror, setconformPassworderror] = useState("");
    const {tokens} = useParams()
    const token = tokens

    const handleSubmit = (e) => {
        e.preventDefault();
        const ForgotPassword = {password, conformPassword, token}
        
        ForumService.conformPassword(ForgotPassword)
        .then(res => {
            console.log(res.data);
            // if(res.data === "Password Mismatch") {
            //     toast.error("Password Mismatch")
            // }
            if(res.data === "Enter correct token") {
                toast.error("This link has expired")
            }
            if(res.data === "Password Updated Successfully") {
                toast.success("passoword updated")
                window.location = "/login"
                localStorage.clear()
            }
        })
        .catch(error => {
            console.log(ForgotPassword)
            console.log('Something went wrong', error);
        })
    }

    // const savePassword = (e) => {
    //     const ForgotPassword = {password, conformPassword, token}
        
    //     ForumService.conformPassword(ForgotPassword)
    //     .then(res => {
    //         // if(res.data === "Password Mismatch") {
               
    //         // }
    //         if(res.data === "Enter correct token") {
    //             toast.error("Enter correct token")
    //         }
    //         else {
    //             toast.success("passoword updated")
    //             navigate("/login")
                
    //         }
    //     })
    //     .catch(error => {
    //         console.log(ForgotPassword)
    //         console.log('Something went wrong', error);
    //     }) 
    // }
    var upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[^A-Za-z0-9]/,
        minLength = 8,
        maxLength = 16;

    const passwordvalidation = () => {
        if (password == "") {
            setpassworderror("Please enter the New password");
        }
        else if (!(password.match(upper) && password.match(lower) && password.match(special) && password.length >= minLength && password.length <= maxLength)) {
            setpassworderror("Passwords must contain at least eight characters, including at least 1 letter and 1 number.");
        }
        else {
            setpassworderror("");
        }

    }

    const conformPasswordvalidation = () => {

        if (conformPassword == "") {
            setconformPassworderror("Please enter the confirm password");
        }
        else if (password != conformPassword) {
            setconformPassworderror("Password and Confirm Password do not match");
        }
        else {
            setconformPassworderror("");
        }
    }


    return (
        <div class="parent-container d-flex" id="parent2">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <br/>
                        <h1>Password reset </h1>
                        <div className="Login">
                        <hr/>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        id = "password"
                                        name = "password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        onBlur={passwordvalidation}
                                    />
                                    <div id="er1">
                                        {passworderror}
                                    </div>
                                </Form.Group><br />
                                <Form.Group size="lg" controlId="conformPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id = "conformPassword"
                                        name = "conformPassword"
                                        value={conformPassword}
                                        onChange={(e) => setconformPassword(e.target.value)}
                                        onBlur={conformPasswordvalidation}
                                    />
                                    <div id="er1">
                                        {conformPassworderror}
                                    </div>
                                </Form.Group><br />
                                <div class="col ml-auto text-center">
                                    <Button onClick={(e) => handleSubmit(e)} block size="lg" type="submit">
                                        Update Password
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container" id="c3" >
                <div class="row">
                    <div class="card">

                    </div>
                </div>
            </div>
        </div>
 
    )
}