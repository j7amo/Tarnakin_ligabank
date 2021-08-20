import React, { useEffect, useState } from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './currency-converter.module.scss';
import Button from '../button/button.jsx';
import Calendar from 'react-calendar';
import HistoryItem from '../history-item/history-item';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRatesData } from '../../store/api-actions';
import { currencyCodes } from '../../const';
import {
  convertHaveAmount,
  convertWantAmount,
  setHaveAmount,
  setHaveAmountCode,
  setWantAmount,
  setWantAmountCode,
} from '../../store/action';

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

function CurrencyConverter({
  haveAmount,
  haveCurrencyCode,
  wantAmount,
  wantCurrencyCode,
  onComponentRender,
  onHaveAmountChange,
  onWantAmountChange,
  onHaveCurrencyCodeChange,
  onWantCurrencyCodeChange,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(dayjs());

  const handleCalendarIconClick = () => {
    setShowCalendar(true);
  };

  const handleCalendarDateClick = (value) => {
    setDate(dayjs(value));
    setShowCalendar(false);
  };

  useEffect(() => {
    onComponentRender();
  }, []);

  return (
    <section className={styles['converter']}>
      <div
        className={`${styles['converter__inner']} ${globalStyles['container']}`}
      >
        <h2 className={styles['converter__title']}>Конвертер валют</h2>
        <form action="#" method="get" className={styles['converter__form']}>
          <fieldset className={styles['converter__currencies-fieldset']}>
            <legend className={globalStyles['visually-hidden']}>
              Блок выбора валют
            </legend>
            <div className={styles['converter__currencies-outer-container']}>
              <label
                htmlFor="have-currency-amount"
                className={styles['converter__label']}
              >
                У меня есть
              </label>
              <div className={styles['converter__currencies-inner-container']}>
                <input
                  type="number"
                  id="have-currency-amount"
                  value={haveAmount}
                  className={styles['converter__currency-field']}
                  onChange={onHaveAmountChange}
                />
                <select
                  id="have-currency-type"
                  onChange={onHaveCurrencyCodeChange}
                >
                  {currencyCodes.map((code) => {
                    if (code === haveCurrencyCode) {
                      return (
                        <option value={code} selected>
                          {code}
                        </option>
                      );
                    } else {
                      return <option value={code}>{code}</option>;
                    }
                  })}
                </select>
                <label
                  htmlFor="have-currency-type"
                  className={globalStyles['visually-hidden']}
                >
                  Выбрать валюту
                </label>
              </div>
            </div>
            <div className={styles['converter__currencies-outer-container']}>
              <label
                htmlFor="want-currency-amount"
                className={styles['converter__label']}
              >
                Хочу приобрести
              </label>
              <div className={styles['converter__currencies-inner-container']}>
                <input
                  type="number"
                  id="want-currency-amount"
                  value={wantAmount}
                  className={styles['converter__currency-field']}
                  onChange={onWantAmountChange}
                />
                <select
                  id="want-currency-type"
                  onChange={onWantCurrencyCodeChange}
                >
                  {currencyCodes.map((code) => {
                    if (code === wantCurrencyCode) {
                      return (
                        <option value={code} selected>
                          {code}
                        </option>
                      );
                    } else {
                      return <option value={code}>{code}</option>;
                    }
                  })}
                </select>
                <label
                  htmlFor="want-currency-type"
                  className={globalStyles['visually-hidden']}
                >
                  Выбрать валюту
                </label>
              </div>
            </div>
          </fieldset>
          <div className={styles['converter__date-container']}>
            <input
              type="text"
              id="conversion-date"
              className={styles['converter__date']}
              value={date.format('D.MM.YYYY')}
            />
            <button
              type="button"
              className={styles['converter__calendar']}
              onClick={handleCalendarIconClick}
            />
            {showCalendar && (
              <div className={styles['converter__calendar-container']}>
                <div className={styles['converter__calendar-content']}>
                  <Calendar
                    onChange={handleCalendarDateClick}
                    value={date.toDate()}
                    minDate={date.subtract(7, 'day').toDate()}
                    maxDate={date.toDate()}
                  />
                </div>
              </div>
            )}
            <label
              htmlFor="conversion-date"
              className={globalStyles['visually-hidden']}
            >
              Выбрать дату
            </label>
          </div>
          <Button modifier="button--wide">Сохранить результат</Button>
        </form>
        <div className={`${styles['converter__history']} ${styles['history']}`}>
          <h3 className={styles['history__title']}>История конвертации</h3>
          <ul className={styles['history__list']}>
            {someArray.map((entry) => (
              <HistoryItem {...entry} />
            ))}
          </ul>
          <Button modifier="button--narrow">Очистить историю</Button>
        </div>
      </div>
    </section>
  );
}

CurrencyConverter.propTypes = {
  haveAmount: PropTypes.number,
  haveCurrencyCode: PropTypes.string,
  wantAmount: PropTypes.number,
  wantCurrencyCode: PropTypes.string,
  onComponentRender: PropTypes.func,
  onHaveAmountChange: PropTypes.func,
  onWantAmountChange: PropTypes.func,
  onHaveCurrencyCodeChange: PropTypes.func,
  onWantCurrencyCodeChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  haveAmount: state.rates.haveAmount,
  haveCurrencyCode: state.rates.haveCurrencyCode,
  wantAmount: state.rates.wantAmount,
  wantCurrencyCode: state.rates.wantCurrencyCode,
});

const mapDispatchToProps = (dispatch) => ({
  onComponentRender() {
    dispatch(fetchRatesData());
  },
  onHaveAmountChange(evt) {
    dispatch(setHaveAmount(Number(evt.target.value)));
    dispatch(convertWantAmount());
  },
  onHaveCurrencyCodeChange(evt) {
    dispatch(setHaveAmountCode(evt.target.value));
    dispatch(convertWantAmount());
  },
  onWantAmountChange(evt) {
    dispatch(setWantAmount(Number(evt.target.value)));
    dispatch(convertHaveAmount());
  },
  onWantCurrencyCodeChange(evt) {
    dispatch(setWantAmountCode(evt.target.value));
    dispatch(convertWantAmount());
  },
});

const ConnectedCurrencyConverter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);

export default ConnectedCurrencyConverter;
