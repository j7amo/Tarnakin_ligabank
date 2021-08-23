import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';
import Logo from '../logo/logo.jsx';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import youtube from '../../assets/img/youtube.svg';

export default function Footer() {
  return (
    <footer className={styles['main-footer']}>
      <div
        className={`${styles['main-footer__inner']} ${globalStyles['container']}`}
      >
        <div className={styles['main-footer__left-col']}>
          <Logo />
          <address className={styles['main-footer__address']}>
            150015, г. Москва, ул. Московская, д. 32 <br />
            Генеральная лицензия Банка России №1050
          </address>
          <p className={styles['main-footer__copyright']}>Ⓒ Лига Банк, 2019</p>
        </div>
        <div className={styles['main-footer__right-col']}>
          <ul className={styles['main-footer__additional-nav']}>
            <li className={styles['main-footer__additional-nav-item']}>
              <a
                className={styles['main-footer__additional-nav-link']}
                href="/"
              >
                Услуги
              </a>
            </li>
            <li className={styles['main-footer__additional-nav-item']}>
              <a
                className={styles['main-footer__additional-nav-link']}
                href="/"
              >
                Рассчитать кредит
              </a>
            </li>
            <li className={styles['main-footer__additional-nav-item']}>
              <a
                className={styles['main-footer__additional-nav-link']}
                href="/"
              >
                Контакты
              </a>
            </li>
            <li className={styles['main-footer__additional-nav-item']}>
              <a
                className={styles['main-footer__additional-nav-link']}
                href="/"
              >
                Задать вопрос
              </a>
            </li>
          </ul>
          <ul className={styles['main-footer__phones']}>
            <li
              className={`${styles['main-footer__phones-item']} ${styles['phone']} ${styles['phone--mobile']}`}
            >
              <div className={styles['main-footer__text-wrapper']}>
                <a
                  className={styles['main-footer__phones-link']}
                  href="tel:*0904"
                >
                  *0904
                </a>
                <p className={styles['main-footer__phones-desc']}>
                  Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
                </p>
              </div>
            </li>
            <li
              className={`${styles['main-footer__phones-item']} ${styles['phone']} ${styles['phone--stationary']}`}
            >
              <div className={styles['main-footer__text-wrapper']}>
                <a
                  className={styles['main-footer__phones-link']}
                  href="tel:88001112233"
                >
                  8 800 111 22 33
                </a>
                <p className={styles['main-footer__phones-desc']}>
                  Бесплатный для всех городов России
                </p>
              </div>
            </li>
          </ul>
          <ul className={styles['main-footer__socials']}>
            <li className={styles['main-footer__socials-item']}>
              <a className={styles['main-footer__socials-link']} href="/">
                <img
                  src={facebook}
                  width
                  height
                  alt="Перейти на нашу страницу в Facebook"
                />
                <span className={globalStyles['visually-hidden']}>
                  Перейти на нашу страницу в Facebook
                </span>
              </a>
            </li>
            <li className={styles['main-footer__socials-item']}>
              <a className={styles['main-footer__socials-link']} href="/">
                <img
                  src={instagram}
                  width
                  height
                  alt="Перейти на нашу страницу в Instagram"
                />
                <span className={globalStyles['visually-hidden']}>
                  Перейти на нашу страницу в Instagram
                </span>
              </a>
            </li>
            <li className={styles['main-footer__socials-item']}>
              <a className={styles['main-footer__socials-link']} href="/">
                <img
                  src={twitter}
                  width
                  height
                  alt="Перейти на нашу страницу в Twitter"
                />
                <span className={globalStyles['visually-hidden']}>
                  Перейти на нашу страницу в Twitter
                </span>
              </a>
            </li>
            <li className={styles['main-footer__socials-item']}>
              <a className={styles['main-footer__socials-link']} href="/">
                <img
                  src={youtube}
                  width
                  height
                  alt="Перейти на нашу страницу в Youtube"
                />
                <span className={globalStyles['visually-hidden']}>
                  Перейти на нашу страницу в Youtube
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
