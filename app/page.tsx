"use client"

import React, { ChangeEvent, FormEvent, useState } from "react"
import Image from "next/image"
import myImage from "./pic/wp9675652-american-psycho-hd-wallpapers.jpg"
import Link from "next/link";
import { useLoginStore } from "./zustand/loginStore";
// import './globals.css'
import './tailwind.css'


export default function Home(): React.JSX.Element {

  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } = useLoginStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  
  return (
    <body className="body">
      <div className="window">
       <Image src={myImage} alt="Description" className="hi-img"/>
          <span className="welcome-create">
            Login form
          </span>
            

                <form className="email-div" action="" method="">

                        <input type="email" className="email-input" title="Please enter a valid email address" placeholder="Email" name="email" required value={email} onChange={handleEmailChange}/>
                        <input type="password" className="password-input" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} required/>

                    <div className="remember-div">
                        <input type="checkbox" className="remember-input" id="remember-me" name="remember-me" checked={rememberMe} onChange={handleRememberMeChange}/>
                        <label htmlFor="remember-me" className="remember-label">Remember me</label>
                    </div>

                    <button className="sub-button">Submit</button>

                </form>


                <div className="signup-link-div">
                  <p>Don't have an account?? 
                    <Link href="/signUp" className="signup-text">
                         Sign up
                    </Link>
                  </p>
                </div>

      </div>
    </body>
  )
}