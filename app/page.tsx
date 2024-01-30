import React, { ChangeEvent, FormEvent, useState } from "react"
import Image from "next/image"
import myImage from "./pic/wp9675652-american-psycho-hd-wallpapers.jpg"
import Link from "next/link";



export default function Home() {

  
  return (
    <body>
      <div className="window">
       <Image src={myImage} alt="Description" className="hi-img"/>
          <span className="welcome-create">
            Welcome to login form
          </span>
            

                <form className="email-div">

                        <input type="email" className="email-input" title="Please enter a valid email address" placeholder="Email" name="email" required/>
                        <input type="password" className="password-input" placeholder="Password" name="password"/>

                    <div className="remember-div">
                        <input type="checkbox" className="remember-input" id="remember-me" name="remember-me"/>
                        <label htmlFor="remember-me" className="remember-label">Remember me</label>
                    </div>

                    <button className="sub-button">Submit</button>

                </form>



                <div className="signup-link-div">
                  <p>Don't have an account?? 
                    <Link href="/about" className="signup-text">
                         Sign up
                    </Link>
                  </p>
                </div>

      </div>
    </body>
  )
}