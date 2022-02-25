import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import './Forgetpassword.css'
import {toast} from 'react-toastify';
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import ForumService from "../Service/ForumService";
import { useNavigate } from 'react-router-dom';

toast.configure()



export const Forgetpassword = () => {

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Reset password - Discussion forum"
      }, [])

    const [email, setMail] = useState([]);
    const [usererror, setUsererror] = useState("");

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const User = {email};
        if(email != "") {
        ForumService.checkMail(User)
        .then(res => {
           console.log(res.data)
            if(res.data === "Email not found") {
              setUsererror("account not found")
           
            }
          
            if(res.data === "Token sent to mail") {
                
                toast.success("Token sent to mail")
                navigate("/login")
               
                
            }
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }
    else if (!(email.includes("@sagarsoft.in") || email.includes("@sapplica.com"))) {
        setUsererror("Please enter the valid email id");
    }
    else {
        setUsererror("Please enter the username or email");
    }
}

    const Validation = () => {

        if (email == "") {
            setUsererror("Please enter the username or email");
        }
        else if (!(email.includes("@sagarsoft.in") || email.includes("@sapplica.com"))) {
            setUsererror("Please enter the valid email id");
        }
        else {
            setUsererror("");
        }
    }


    const init = () => {

    }

    useEffect(() => {
        
    init();
    
    }, []);

    return (
        <div class="parent-container d-flex" id="parent1">
        <div class="container">
            <div class="row">
                <div class="card">
                    <br/>
                    <h1>Generate New Password</h1>
                    <div className="Login">
                    <hr/>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setMail(e.target.value)}
                                    
                                />
                                <div id="er1">
                                    {usererror}
                                </div>
                            </Form.Group><br />
                            <div class="col ml-auto text-center">
                                <a class="btn btn-primary" style={{backgroundColor:"blue", color:"white"}} onClick={(e) => handleSubmit(e)} >Generate Link</a>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="c2" >
            <div class="row">
                <div class="card">
                   
                </div>
            </div>
        </div>
    </div>

    )
}