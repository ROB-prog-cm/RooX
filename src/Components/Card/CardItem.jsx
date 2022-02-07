import React from 'react';
import styles from './styles.module.scss'
import {useNavigate} from "react-router-dom";


const CardItem = ({users}) => {
  const navigate = useNavigate();

  return (
    <>
      {users.map((item) => (
        <div key={item.id} className={styles.wrapper}>
          <div className={styles.subTitle}>
            <div className={styles.infoHeader}>ФИО: <span className={styles.info}> {item.name}</span></div>
            <div className={styles.infoHeader}>Город: <span className={styles.info}> {item.address.city}</span></div>
            <div className={styles.infoHeader}>Компания: <span className={styles.info}>{item.company.name} </span></div>
          </div>
          <div className={styles.title}>
            <button
              onClick={() => navigate(`/users/${item.id}`)}
              className={styles.btn}>Подробнее
            </button>
          </div>
        </div>
      ))}
    </>
  )
};

export default CardItem;
