import React from 'react';
import styles from './Header.module.css';
import Logobar from './Logobar';
import LoginBtn from './LoginBtn';
const Header = () => {
  return (
     <div className={styles.background}>
        <Logobar />
        <LoginBtn />
       </div>
  );
}

export default Header;