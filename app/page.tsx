"use client"


import React, {ChangeEvent, FormEvent, useState} from "react";
import Image from "next/image";
import myImage from "./pic/wp9675652-american-psycho-hd-wallpapers.jpg";
import Link from "next/link";
import { useLoginStore } from "./zustand/loginStore";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from '@mui/joy/Input';




export default function page(): React.JSX.Element {
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
    <body>

        <div className="body"></div>

      <div className="window">

            <Image src={myImage} alt="Description" className="hi-img"/>
            <span className="welcome-create">
              Login form
            </span>
            

            <form className="email-div" action="" method="">

                <Input
                    placeholder="Email"
                        className="email-input"
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
                        className="password-input"
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

                <div className="remember-div">
                    <FormControlLabel control={ <Checkbox checked={rememberMe} onChange={handleRememberMeChange}/> } 
                    label="Remember me" className="remember-label"/>
                </div>


                <div className="button">
                    <Button variant="contained" className="sub-button" type="submit">
                        Submit
                    </Button>
                </div>
                    
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