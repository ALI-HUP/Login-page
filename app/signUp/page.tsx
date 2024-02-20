"use client"

import React from "react";
import Image from "next/image";
import myImage from "../pic/wp9675652-american-psycho-hd-wallpapers.jpg";
import { useSignupStore } from "../zustand/signupStore";
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';




export default function Signup(): React.JSX.Element {

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
      
      <div className="body"></div>
      <div className="window">

        <Image src={myImage} alt="Description" className="hi-img" />

        <span className="welcome-create">
          Create your account
        </span>


        <form className="signup-inputs" action="" method="">


                <Input
                    placeholder="User name"
                    className="su-name-input"
                    variant="soft"
                    type="name"
                    name="user-name" 
                    required 
                    value={userName} 
                    onChange={handleUserNameChange}
                    sx={{
                          '--Input-radius': '0px',
                          borderBottom: '2px solid',
                          borderColor: 'neutral.outlinedBorder',
                          '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                          },
                          '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                          },
                          '&:focus-within::before': {
                            transform: 'scaleX(1)',
                          },
                    }}
                />

                <Input
                    placeholder="Email"
                    className="su-email-input"
                    variant="soft"
                    type="email"
                    name="email" 
                    required 
                    value={email} 
                    onChange={handleEmailChange}
                    sx={{
                          '--Input-radius': '0px',
                          borderBottom: '2px solid',
                          borderColor: 'neutral.outlinedBorder',
                          '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                          },
                          '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                          },
                          '&:focus-within::before': {
                            transform: 'scaleX(1)',
                          },
                    }}
                />

                <Input                        
                    placeholder="Password"
                    className="su-password-input"
                    variant="soft"
                    type="password"
                    name="password" 
                    required 
                    value={password} 
                    onChange={handlePasswordChange}
                    sx={{
                          '--Input-radius': '0px',
                          borderBottom: '2px solid',
                          borderColor: 'neutral.outlinedBorder',
                          '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                          },
                          '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                          },
                          '&:focus-within::before': {
                            transform: 'scaleX(1)',
                          },
                    }}
                />

          <Button variant="contained" className="sub-button" type="submit">
              Submit
          </Button>

        </form>

      </div>
    </body>
  )
}