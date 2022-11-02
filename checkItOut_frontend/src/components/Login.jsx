import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import {GoogleLogin, googlelogout} from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import {client} from "../client"

const Login = () => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
    <div className='relative w-full h-full'>
    <video
      src={shareVideo}
      type="video/mp4"
      // autoplays the video 
      autoPlay
      // the video is on loop
      loop
      muted
      // hides video controls if there are any 
      controls={false}
      // for the video to cover the entire screen
      className="w-full h-full object-cover"
    />
    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
    <div className='p-5'>
      <img src={logo} width='130px' alt='logo'></img>
    </div>
    <div className="shadow-2xl">
    <GoogleOAuthProvider 
  clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
<div className="">
<GoogleLogin
  onSuccess={credentialResponse => {
    const decode=jwt_decode(credentialResponse.credential)
    localStorage.setItem('user', decode)
    const {name, sub, picture} = decode
    
    const doc={
      _id: sub, 
      _type:'user',
      userName: name, 
      image: picture
    }

    client.createIfNotExists(doc)
    .then(()=>{
      navigate('/', {replace:true})
    })
  }}
  onError={() => {
    console.log('Login Failed')
  }}
/>
</div>
</GoogleOAuthProvider>
  

    </div>

    </div>

    </div>
    </div>
  )
}

export default Login


// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
// import React from 'react'

// const Login = () => {
//   return (<GoogleOAuthProvider 
//   clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
// <div className="grid place-items-center h-screen">
// <GoogleLogin
//   onSuccess={credentialResponse => {
//     console.log(credentialResponse);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
//   cookiePolicy="single_host_origin"
// />;
// </div>
// </GoogleOAuthProvider>
//   )
// }

// export default Login