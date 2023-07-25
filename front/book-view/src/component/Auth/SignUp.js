import React,{useState,useEffect} from 'react';
import styles from './SignUp.module.css';
import Login from './Login';
const User = {
  name : '관리자',
  email: 'admin@admin.com',
  pw: 'admin12@',
  chkpw : 'amdin12@',
  birth : '2023-07-25'
}

const SignUp = () => {
    const [name,setName]= useState("");
    const [email,setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [chkpw,setChkpw] =useState("");
    const [birth ,setBirth] = useState("");

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
    const [notAllow, setNotAllow] = useState(true);


    useEffect(() => {
        if(isemail && ispw ){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [isemail, ispw]);




    const onChangeName = (e) =>{
        const currentName = e.target.value
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
       const currentEmail = e.target.value;
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
       const currentPw = e.target.value;
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
            const currentChkPw = e.target.value;
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
        const currentBirth = e.target.value;
        setBirth(currentBirth);

        if ((setBirth.value)=="" ){
            setBirthMessage('생년월일을 클릭해주세요!')
            setIsChkPw(false);
        }else{
            setIsChkPw(true);

        }
    }
    const onClickConfirmButton = () => {
      if( email === User.email && pw === User.pw ) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }


// input 엔터시 초기화 방지
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  };
}, true);







  return (
    <div className="App">
            <div className={styles.container}>
                <div className={styles.title}>SignUp</div>
                <form className={styles.inputContainer} onkeydown="return captureReturnKey(event)" >
                  <div>
                    <input className ={styles.text} id = "name" defaultValue={name} placeholder='이름' onChange={onChangeName} ></input>
                    <p className={styles.message}>{nameMessage}</p>

                    <div className={styles.email}>
                      <input className ={styles.text} id = "email" defaultValue={email} placeholder='이메일'onChange={onChangeEmail}></input>
                      <p className={styles.message}>{emailMessage}</p>
                      <button>중복</button>
                    </div>
                      <input className ={styles.text} id = "pw" defaultValue={pw} placeholder='비밀번호' onChange={onChangePw}></input>
                      <p className={styles.message}>{pwMessage}</p>

                      <input className ={styles.text} id = "chkpw" defaultValue={chkpw} placeholder='비밀번호 확인'onChange = {onChangeChkPw}></input>
                      <p className={styles.message}>{chkpwMessage}</p>

                      <input className={styles.birthdate} id = "birth"  defaultValue={birth}type="date" onChange ={onChangeBirth}></input>
                      <p className={styles.message}>{birthMessage}</p>
                  </div>

                  <button onClick={onClickConfirmButton} disabled={notAllow}>가입하기</button>
                </form>
                 <div >
                    이미 회원이신가요?&nbsp;&nbsp;
                    <Login name={name} email = {email} pw = {pw} chkpw={pw} birth = {birth}/>

                 </div>
            </div>

    </div>
  );
}

export default SignUp;