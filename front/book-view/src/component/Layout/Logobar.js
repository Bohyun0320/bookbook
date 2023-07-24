import React from 'react';

import styles from './Logobar.module.css';

const Logobar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
          <img src={require('./image.png')} width="150px" alt='logo' />

      </div>
    </div>
  );
};

export default Logobar;