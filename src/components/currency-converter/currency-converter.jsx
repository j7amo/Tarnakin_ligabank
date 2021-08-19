import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './currency-converter.module.scss';
import Button from '../button/button.jsx';
import Calendar from 'react-calendar';
import HistoryItem from "../history-item/history-item";

const someArray = [
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
  {
    date: '25.11.2020',
    haveAmount: '1000 RUB',
    wantAmount: '13,1234 USD',
  },
];

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
                  <input type='number' id='want-currency-amount' value='13.1234' className={styles['converter__currency-field']}/>
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
              <input type='text' id='conversion-date' className={styles['converter__date']} value='1.12.2020'/>
              <button type='button' className={styles['converter__calendar']}/>
              <label htmlFor='conversion-date' className={globalStyles['visually-hidden']}>Выбрать дату</label>
            </div>
            <Button modifier='button--wide'>Сохранить результат</Button>
          </form>
          <div className={`${styles['converter__history']} ${styles['history']}`}>
            <h3 className={styles['history__title']}>История конвертации</h3>
            <ul className={styles['history__list']}>
              {someArray.map((entry) => (
                  <HistoryItem {...entry}/>
              ))}
            </ul>
            <Button modifier='button--narrow'>Очистить историю</Button>
          </div>
        </div>
      </section>
  );
}