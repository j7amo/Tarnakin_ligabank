import React from 'react';
import styles from "../button/button.module.scss";

export default function Button() {
  return (
    <button type='button' className={`${styles['button']} ${styles['button--wide']}`}>Сохранить результат</button>
  );
}
