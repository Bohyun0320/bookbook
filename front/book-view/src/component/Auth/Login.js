import React from 'react';
import SignUp from './SignUp';


const Login = (props) =>{
  return (
    <div className="App">
    이름  {props.name} <br />
    이메일  {props.email} <br />
    비밀번호 {props.pw}<br />
    비밀번호 확인 {props.chkpw}<br />
    생년월일 {props.birth}<br />




    </div>
  );
}

export default Login;