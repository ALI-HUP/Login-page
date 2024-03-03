"use client"

import React from "react";
import Image from "next/image";
import myImage from "../pic/wp9675652-american-psycho-hd-wallpapers.jpg";
import useForgotStore  from "../zustand/forgotStore";
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import EmailIcon from '@mui/icons-material/Email';


export async function getServerSideProps() {

  const res = await fetch(`https://.../data`)
  const data = await res.json()
  return { props: { data } }

}


export default function Forgot({data}: {data:any}): React.JSX.Element {
  
  const { email, setEmail } = useForgotStore();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Email sent");
  };


  return (
    <body>
      
      <div className="bg-img"></div>

      <div className="window">

          <Image src={myImage} alt="Description" className="hi-img" />

          <span className="welcome-create">
              Receive new password
          </span>


          <form className="form-tag" action="" method="" onSubmit={handleSubmit}>

                <Input 
                    placeholder="Send to this email"
                    className="input"
                    variant="soft"
                    type="email"
                    name="email" 
                    required 
                    value={email}
                    onChange={handleEmailChange}
                    startDecorator={<EmailIcon fontSize="small"/>}
                />

                <div className="button-div">
                  <Button type="submit" variant="contained" className="sub-button">
                      Send
                  </Button>
                </div>

          </form>

      </div>
    </body>
  )
}