import React from 'react';
import styles from './SignUp.module.css';



const SignUp = () => {
// '출생 연도' 셀렉트 박스 option 목록 동적 생성

  return (
    <div className="App">
            <div className={styles.container}>
                <div className={styles.title}>SignUp</div>
                <form className={styles.inputContainer}>
                  <input className ={styles.text} placeholder='이름'></input>
                  <input className ={styles.text} placeholder='이메일'></input>
                  <input className ={styles.text} placeholder='비밀번호'></input>
                  <input className ={styles.text} placeholder='비밀번호 확인'></input>
                  <input className={styles.birthdate} type="date"/>

                </form>

            </div>

    </div>
  );
}

export default SignUp;