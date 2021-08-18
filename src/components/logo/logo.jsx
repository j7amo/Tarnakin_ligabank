import React from 'react';
import styles from '../logo/logo.module.scss';
import logo from '../../assets/img/logo.svg'

export default function Logo() {
  return (
    <a className={styles['logo']} href='/'>
      <img src={logo} width='150' height='27' alt='Логотип Лига Банка'/>
    </a>
  );
}