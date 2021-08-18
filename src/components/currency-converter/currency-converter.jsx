import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './currency-converter.module.scss';
import Button from '../button/button.jsx';

export default function CurrencyConverter() {
  return (
      <section className={styles['converter']}>
        <div className={`${styles['converter__inner']} ${globalStyles['container']}`}>
          <h2 className={styles['converter__title']}>Конвертер валют</h2>
          <form action='#' method='get' className={styles['converter__form']}>
            <fieldset className={styles['converter__currencies-fieldset']}>
              <legend className={globalStyles['visually-hidden']}>Блок выбора валют</legend>
              <div className={styles['converter__currencies-outer-container']}>
                <label htmlFor='have-currency-amount' className={styles['converter__label']}>У меня есть</label>
                <div className={styles['converter__currencies-inner-container']}>
                  <input type='number' id='have-currency-amount' value='1000' className={styles['converter__currency-field']}/>
                  <select id='have-currency-type'>
                    <option value='RUB'>RUB</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBR'>GBR</option>
                    <option value='CNY'>CNY</option>
                  </select>
                  <label htmlFor='have-currency-type' className={globalStyles['visually-hidden']}>Выбрать валюту</label>
                </div>
              </div>
              <div className={styles['converter__currencies-outer-container']}>
                <label htmlFor='want-currency-amount' className={styles['converter__label']}>Хочу приобрести</label>
                <div className={styles['converter__currencies-inner-container']}>
                  <input type='number' id='want-currency-amount' value='1000' className={styles['converter__currency-field']}/>
                  <select id='want-currency-type'>
                    <option value='RUB'>RUB</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBR'>GBR</option>
                    <option value='CNY'>CNY</option>
                  </select>
                  <label htmlFor='want-currency-type' className={globalStyles['visually-hidden']}>Выбрать валюту</label>
                </div>
              </div>
            </fieldset>
            <div className={styles['converter__date-container']}>
              <input type='date' id='conversion-date' className={styles['converter__date']} value='01.12.2020'/>
              <label htmlFor='conversion-date' className={globalStyles['visually-hidden']}>Выбрать дату</label>
            </div>
            <Button />
          </form>
        </div>
      </section>
  );
}