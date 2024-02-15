
import React from "react"
import Image from "next/image"
import myImage from "../pic/wp9675652-american-psycho-hd-wallpapers.jpg"
import { useSignupStore } from "../zustand/signupStore"


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}


export default function Signup({data}: {data:any}): React.JSX.Element{

  const { userName, email, password, setUserName, setEmail, setPassword } = useSignupStore();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  
  return (
    <body>
      <div className="window">

          <Image src={myImage} alt="Description" className="hi-img"/>

          <span className="welcome-create">
              Create your account
          </span>


           <form className="signup-inputs" action="" method="">

              <input type="name" placeholder="User name" className="su-name-input" name="User-name" value={userName} onChange={handleUserNameChange} required/>
              <input type="email" placeholder="Email" className="su-email-input" name="email" value={email} onChange={handleEmailChange} required/>
              <input type="password" placeholder="Password" className="su-password-input" name="password" value={password} onChange={handlePasswordChange} required/>

              <button className="sub-button" type="submit">Submit</button>

           </form>

      </div>
    </body>
  )
}