import React,{useState} from 'react';
import styles from './SignUp.module.css';
import Header from '../Layout/Header';

const Login = () =>{
       const [email,setEmail] = useState("");
       const [pw, setPw] = useState("");



  return (
    <div className="App">
      <div className={styles.email}>
        <input className ={styles.text} id = "email" value={email} placeholder='이메일'></input>
        <input className ={styles.text} id = "pw" value={pw} placeholder='비밀번호'></input>

      </div>

    </div>
  );
}

export default Login;