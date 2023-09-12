import React,{useState} from 'react';
import styles from './Login.module.css';
import Header from '../Layout/Header';
import axios from 'axios';
import {  useNavigate} from "react-router-dom";
const Login = () =>{

const navigate = useNavigate();

       const [email,setEmail] = useState("");
       const [chkpw, setChkPw] = useState("");

       //오류메세지 전달
       const [emailMessage, setEmailMessage] = React.useState("");
       const [pwMessage, setPwMessage] = React.useState("");


       const [isemail, setIsEmail] = React.useState(false);
       const [ispw, setIsPw] = React.useState(false);

  const onChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangePw = (e) => {
    e.preventDefault();
    setChkPw(e.target.value);
  };

      const handleSubmit = (e) =>{
      e.preventDefault();
        axios.post('http://localhost:8080/auth/login',
        {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Credentials" : true },

                                email : email,
                                 passwordCheck : chkpw,
                             }
                              )
                             .then((response) => {
                                 console.log(response);
                                 alert("로그인 성공");
                                 if ((response.status = 200)){
                                    return navigate('/')
                                 }
//                                 if ((response == undefined)){
//                                      setEmailMessage("이메일 형식으로 입력해주세요.")
//                                 }


                             })
                             .catch((error) => {
                                 console.log("error : ", error.response);
                             })

        }


  return (
    <div className="App">
      <div className = {styles.pageContainer}>
      <div className = {styles.imgContainer}>
       <img className = {styles.logImg} src={require('./image.png')}  />

      </div>
      <div className={styles.container}>
      <form className ={styles.form_Container}  >
        <input className ={styles.text} id = "email" value={email} placeholder='이메일' onChange={onChangeEmail}></input>
        <input className ={styles.text} id = "chkpw"  type = "password" value={chkpw} placeholder='비밀번호' onChange={onChangePw}></input>
        <button className ={styles.log_btn}  onClick = {handleSubmit}>로그인</button>
       </form>
       <div className = {styles.searchContainer}>
            <button className ={styles.join_btn}>회원가입</button> <span>|</span> <button className ={styles.logfile_btn}>아이디</button><button className = {styles.pw_btn}>비밀번호 찾기</button>
       </div>
      </div>

    </div>
    </div>
  );
}

export default Login;