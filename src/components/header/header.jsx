import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './header.module.scss';
import Logo from '../logo/logo.jsx';

export default function Header() {
  return (
    <header className={styles['main-header']}>
      <nav className={`${styles['nav']} ${globalStyles['container']}`}>
        <Logo />
        <ul className={styles[`site-navigation`]}>
          <li className={styles[`site-navigation__item`]}>
            <a className={styles[`site-navigation__link`]} href="/">
              Услуги
            </a>
          </li>
          <li className={styles[`site-navigation__item`]}>
            <a className={styles[`site-navigation__link`]} href="/">
              Рассчитать кредит
            </a>
          </li>
          <li className={styles[`site-navigation__item`]}>
            <a
              className={`${styles[`site-navigation__link`]} ${
                styles[`site-navigation__link--active`]
              }`}
              href="/"
            >
              Конвертер валют
            </a>
          </li>
          <li className={styles[`site-navigation__item`]}>
            <a className={styles[`site-navigation__link`]} href="/">
              Контакты
            </a>
          </li>
          <li className={styles[`site-navigation__item`]}>
            <a className={styles[`site-navigation__link`]} href="/">
              Задать вопрос
            </a>
          </li>
        </ul>
        <ul className={styles[`user-navigation`]}>
          <li className={styles[`user-navigation__item`]}>
            <a className={styles[`user-navigation__link`]} href="/">
              Войти в Интернет-банк
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
