import React from "react"
import Image from "next/image"
import myImage from "../pic/wp9675652-american-psycho-hd-wallpapers.jpg"



export default function Signup() {

  
  return (
    <body>
      <div className="window">

          <Image src={myImage} alt="Description" className="hi-img"/>

          <span className="welcome-create">
              Create your account
          </span>


           <form className="signup-inputs" action="" method="get">

              <input type="name" placeholder="User name" className="su-name-input" name="User-name" />
              <input type="email" placeholder="Email" className="su-email-input" name="email"/>
              <input type="password" placeholder="Password" className="su-password-input" name="password"/>

              <button className="sub-button" type="submit">Submit</button>

           </form>

      </div>
    </body>
  )
}