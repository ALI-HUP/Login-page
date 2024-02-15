import React, { ChangeEvent } from "react";
import Image from "next/image";
import myImage from "./pic/wp9675652-american-psycho-hd-wallpapers.jpg";
import Link from "next/link";
import { useLoginStore } from "./zustand/loginStore";


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}



export default function Page({ data }: {data: any}): React.JSX.Element {
  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } = useLoginStore();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <body className="body">
      <div className="window">
        <Image src={myImage} alt="Description" className="hi-img" />
        <span className="welcome-create">Login form</span>

        <form className="email-div" action="" method="">
          <input
            type="email"
            className="email-input"
            title="Please enter a valid email address"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className="password-input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <div className="remember-div">
            <input
              type="checkbox"
              className="remember-input"
              id="remember-me"
              name="remember-me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me" className="remember-label">
              Remember me
            </label>
          </div>

          <button className="sub-button">Submit</button>
        </form>

        <div className="signup-link-div">
          <p>
            Don't have an account??
            <Link href="/signUp" className="signup-text">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </body>
  );
}

