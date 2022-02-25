import React, { useState, useEffect } from "react";
import "./Home.css"
import logo from '../images/logo.png'
import ForumService from "../Service/ForumService";
import { useNavigate } from 'react-router-dom';

export function Navbar() {

    const navigate = useNavigate();
    const [ search, setSearch] = useState('')
    
    
    const [isLoggedout, setLoggedout] = useState('false')
    const[user, setUser] = useState('')
    const users = sessionStorage.getItem('islogin')
    const [isLoggedin, setLoggedin] = useState(users)
     

    const clearSession = (e) => {
        sessionStorage.clear()
      }

    const init =() => {
        

        ForumService.getUserName(users)
        .then(res => {
            setUser(res.data)
            sessionStorage.setItem('userName', res.data)
        })

        ForumService.getEmpId(users) 
        .then(res => {
            sessionStorage.setItem('empid', res.data)
        })
        
    }

    const saveSearch = (e) => {
        
      
        const sea = {search}
        if(search === " " || search === "   ")
        {
            navigate("/")
        }
        else {
        sessionStorage.setItem('searchs', search)
        navigate("/r")
        }

    }

    useEffect(() => {
        
            init()
            
        
    },   [])
    return (
        <><nav class="panel-menu" id="mobile-menu">
       
            <div class="mm-navbtn-names">
                <div class="mm-closebtn">
                    Close
                    <div class="tt-icon">
                        <svg>
                            <use xlinkHref="#icon-cancel"></use>
                        </svg>
                    </div>
                </div>
                <div class="mm-backbtn">Back</div>
            </div>
        </nav><header id="tt-header">
                <div class="container">
                    <div class="row tt-row no-gutters">
                        <div class="col-auto">
                            <a class="toggle-mobile-menu" href="#">
                                <svg class="tt-icon">
                                    <use xlinkHref="#icon-menu_icon"></use>
                                </svg>
                            </a>
                          
                            <div class="tt-logo">
                                <a href="/"><img src={logo} alt="" /></a>
                            </div>
                           
                            <div class="tt-desktop-menu">
                                <nav>
                                    <ul>
                                        <li><a href="/cate"><span>Categories</span></a></li>
                                        <li><a href="/trending"><span>Trending</span></a></li>
                                        <li><a href="/create"><span>New Question</span></a></li>

                                    </ul>
                                </nav>
                            </div>
                            
                            <div class="tt-search">
                               
                                  <div className='search'>
                                 
        </div>
        <form onSubmit={(e) =>saveSearch(e)}>
            <table ><tr><td> <input name="search" onChange={(e) => setSearch(e.target.value)} className="m-auto form-control" style={{ width: 300 }} placeholder='Search Question' /></td>
              </tr></table>

          </form>
                                    

                                       
                                
                            </div>
                            
                        </div>
                        <div class="col-auto ml-auto">
                 <div class="tt-user-info d-flex justify-content-center">
              
                    <div class="tt-avatar-icon tt-size-md">
                        <i class="tt-icon"><svg><use xlinkHref="#icon-ava-a"></use></svg></i>
                    </div>
                    {
                                       isLoggedin ? (
                    <div class="custom-select-01">
                        <select > {user}
                        {user}
                            <option value="Default Sorting">{user}</option>
                            {/* <option ></option> */}
                           
                        </select>
                    </div>
                                       ):(
                                        <h1></h1>
                                       )
}
                  
                </div>
            </div>
                        <div class="col-auto ml-auto">
                      
                            <div class="tt-account-btn">
                             
                            
                               <div>
                                   {
                                       isLoggedin ? (
                                           
                                        <a href="/login" onClick = {(e)=>clearSession(e)} class="btn btn-primary">Log out</a>
                                        

                                       ) : (
                                        <a href="/login" class="btn btn-primary">Log in</a>
                                       )
                                   }
                                   </div>
                                   {
                                       isLoggedin ? (
                                           
                                        <div></div>
                                        

                                       ) : (
                                        <a href="/signup" id="login" class="btn btn-primary">Sign Up</a>
                                       )
                                   }
                            
                            </div>

                        </div>
                       
                    </div>
                </div>
            </header></>
    )
}