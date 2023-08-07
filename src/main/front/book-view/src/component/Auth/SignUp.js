import React,{useState,useEffect} from 'react';
import styles from './SignUp.module.css';
import Login from './Login';
import {  useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Axios from '../API/Axios';
const SignUp = () => {


const navigate = useNavigate();

    const [name,setName]= useState("");
    const [email,setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [chkpw,setChkpw] =useState("");
    const [birth ,setBirth] = useState("" );

    //오류메세지 전달
   const [nameMessage, setNameMessage] = React.useState("");
    const [emailMessage, setEmailMessage] = React.useState("");
    const [pwMessage, setPwMessage] = React.useState("");
    const [chkpwMessage, setChkPwMessage] = React.useState("");
    const [birthMessage, setBirthMessage] = React.useState("");



    //유효성 검사
    const [isname, setIsName] = React.useState(false);
    const [isemail, setIsEmail] = React.useState(false);
    const [ispw, setIsPw] = React.useState(false);
    const [ischkpw, setIsChkPw] = React.useState(false);
    const [isbirth, setIsBirth] = React.useState(false);


    useEffect(()=>{
        getUser();
    },[]);

    async function getUser(){
        await axios
            .post('http://localhost:8080/api/join')
            .then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
                setPw(response.data.pw);
                setChkpw(response.data.chkpw);
                setBirth(response.data.birth);

            })
            .catch((error)=>{
                console.log(error);
            })
    }


    const onChangeName = (e) =>{
    e.preventDefault();
        const currentName = e.currentTarget.value;
        setName(currentName);
        const name_regex = /^[가-힣]+.{2,15}$/;
        if(!name_regex.test(currentName)){
             setNameMessage("이름은 3글자 이상 15글자 이하로 공백없이 한글로 입력해주세요!");
            setIsName(false);
        }
        else{
            setNameMessage("사용가능한 이름입니다.");
            setIsName(true);

        }
        console.log(name);
    }

     const onChangeEmail = (e) => {
     e.preventDefault();
       const currentEmail = e.currentTarget.value;
       setEmail(currentEmail);
       const email_regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
       if(!email_regex.test(currentEmail)){
            setIsEmail(false)
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
       }else{
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
       }
     };


    const onChangePw = (e) =>{
    e.preventDefault();
       const currentPw = e.currentTarget.value;
       setPw(currentPw);
       const passwordRegExp = /^(?=.*[a-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
       if(!passwordRegExp.test(e.target.value)){
            setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 12자리 이하 입력해주세요!" );
            setIsPw(false)
       }else{
            setPwMessage("안전한 비밀번호 입니다.");
            setIsPw(true)
       }
    }

    const onChangeChkPw = (e) => {
    e.preventDefault();
            const currentChkPw = e.currentTarget.value;
            setChkpw(currentChkPw);
            if (pw !== currentChkPw) {
               setChkPwMessage("비밀번호가 똑같지 않아요!");
               setIsChkPw(false);
             } else {
               setChkPwMessage("똑같은 비밀번호를 입력했습니다.");
               setIsChkPw(true);
             }
     }


    const onChangeBirth = (e) =>{
    e.preventDefault();
        const currentBirth = e.currentTarget.value;
        setBirth(currentBirth);

        if ((setBirth.value)=="" ){
            setBirthMessage('생년월일을 클릭해주세요!')
            setIsChkPw(false);
        }else{
            setIsChkPw(true);

        }
    }

    const handleSubmit = (e) =>{
    e.preventDefault();
      axios.post('http://localhost:8080/api/join',
      {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Credentials" : true },

                               name : name,
                               email : email,
                               password : pw,
                               passwordCheck : chkpw,
                               birth : birth,

                           }
                            )
                           .then((response) => {
                               console.log(response);
                               alert("회원가입성공");

                           })
                           .catch((error) => {
                               console.log("error : ", error.response);
                           })

      }




  return (
    <div className="App">
            <div className={styles.container}>
                <div className={styles.title}>SignUp</div>
                <form className ={styles.form_Container} method = 'post' onSubmit = {handleSubmit}  >
                  <div>
                    <input className ={styles.text} id = "name" value={name} placeholder='이름' onChange={onChangeName} ></input>
                    <p className={styles.message}>{nameMessage}</p>

                    <div className={styles.email}>
                      <input className ={styles.text} id = "email" value={email} placeholder='이메일'onChange={onChangeEmail}></input>
                      <p className={styles.message}>{emailMessage}</p>
                      <button>중복</button>
                    </div>
                      <input className ={styles.text} type = "password" id = "pw" value={pw} placeholder='비밀번호' onChange={onChangePw}></input>

                      <p className={styles.message}>{pwMessage}</p>

                      <input className ={styles.text} type = "password" id = "chkpw" value={chkpw} placeholder='비밀번호 확인'onChange = {onChangeChkPw}></input>
                      <p className={styles.message}>{chkpwMessage}</p>

                      <input className={styles.birthdate} id = "birth"  value={birth}type="date" onChange ={onChangeBirth}></input>
                      <p className={styles.message}>{birthMessage}</p>
                  </div>

                  <button type="submit" >가입하기</button>
                </form>
                 <div >
                    이미 회원이신가요?&nbsp;&nbsp;
                    <Link to = '/login' > 로그인하러가기 </Link>

                 </div>
            </div>

    </div>
  );
}

export default SignUp;
