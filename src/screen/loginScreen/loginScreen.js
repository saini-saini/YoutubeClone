import React, { useEffect } from 'react'
import "./loginScreen.scss"
import { login } from '../../redux/action/loginAction'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import googleLogo from "../../images/googleLogo.svg"
const LoginScreen = () => {
  const accessToken = useSelector(state => state?.login?.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(login())
  }

  useEffect(() => {
    if (accessToken) navigate("/")
  }, [accessToken, navigate])


  return (
    <div className='login'>
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>
        <img src={googleLogo} alt="" className='googleLogo'/>
          Continue with Google</button>
        <p>This project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  )
}

export default LoginScreen
