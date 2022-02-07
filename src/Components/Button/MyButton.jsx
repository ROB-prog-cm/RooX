import React from 'react';
import styles from './styles.module.scss'

const MyButton = ({children, ...props}) => {

  return (
    <div {...props}
         className={styles.button}
    >
      {children}
    </div>
  );
};


export default MyButton;
