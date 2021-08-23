import React, { useEffect, useRef, useState } from 'react';
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
  addHistoryData,
  clearHistoryData,
  convertHaveAmount,
  convertWantAmount,
  setHaveAmount,
  setHaveAmountCode,
  setRatesRequestDate,
  setWantAmount,
  setWantAmountCode,
} from '../../store/action';

function CurrencyConverter({
  haveAmount,
  haveCurrencyCode,
  wantAmount,
  wantCurrencyCode,
  ratesRequestDate,
  history,
  onComponentRender,
  onHaveAmountChange,
  onWantAmountChange,
  onHaveCurrencyCodeChange,
  onWantCurrencyCodeChange,
  onRatesRequestDateChange,
  onSaveResultClick,
  onClearHistoryClick,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarContainerRef = useRef();

  const handleCalendarIconClick = () => {
    setShowCalendar(true);
  };

  const handleCalendarDateClick = (value) => {
    onRatesRequestDateChange(dayjs(value));
    setShowCalendar(false);
  };

  const handleOutsideCalendarClick = (evt) => {
    if (
      evt.target !== calendarContainerRef.current ||
      !calendarContainerRef.current.contains(evt.target)
    ) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    if (showCalendar) {
      window.addEventListener('click', handleOutsideCalendarClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideCalendarClick);
    };
  }, [showCalendar]);

  useEffect(() => {
    onComponentRender(ratesRequestDate);
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
                  value={haveAmount.toString()}
                  className={styles['converter__currency-field']}
                  onInput={onHaveAmountChange}
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
                  value={wantAmount.toString()}
                  className={styles['converter__currency-field']}
                  onInput={onWantAmountChange}
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
              value={ratesRequestDate.format('D.MM.YYYY')}
            />
            <button
              type="button"
              className={styles['converter__calendar']}
              onClick={handleCalendarIconClick}
            />
            {showCalendar && (
              <div
                className={styles['converter__calendar-container']}
                ref={calendarContainerRef}
              >
                <div className={styles['converter__calendar-content']}>
                  <Calendar
                    onChange={handleCalendarDateClick}
                    value={ratesRequestDate.toDate()}
                    minDate={dayjs().subtract(6, 'day').toDate()}
                    maxDate={dayjs().toDate()}
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
          <Button
            modifier="button--wide"
            onClick={() =>
              onSaveResultClick({
                ratesRequestDate,
                haveAmount,
                haveCurrencyCode,
                wantAmount,
                wantCurrencyCode,
              })
            }
          >
            Сохранить результат
          </Button>
        </form>
        <div className={`${styles['converter__history']} ${styles['history']}`}>
          <h3 className={styles['history__title']}>История конвертации</h3>
          <ul className={styles['history__list']}>
            {history.map((entry) => (
              <HistoryItem {...entry} />
            ))}
          </ul>
          <Button modifier="button--narrow" onClick={onClearHistoryClick}>
            Очистить историю
          </Button>
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
  ratesRequestDate: PropTypes.string,
  history: PropTypes.array,
  onComponentRender: PropTypes.func,
  onHaveAmountChange: PropTypes.func,
  onWantAmountChange: PropTypes.func,
  onHaveCurrencyCodeChange: PropTypes.func,
  onWantCurrencyCodeChange: PropTypes.func,
  onRatesRequestDateChange: PropTypes.func,
  onSaveResultClick: PropTypes.func,
  onClearHistoryClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  haveAmount: state.rates.haveAmount,
  haveCurrencyCode: state.rates.haveCurrencyCode,
  wantAmount: state.rates.wantAmount,
  wantCurrencyCode: state.rates.wantCurrencyCode,
  ratesRequestDate: state.rates.ratesRequestDate,
  history: state.history.history,
});

const mapDispatchToProps = (dispatch) => ({
  onComponentRender(date) {
    dispatch(fetchRatesData(date));
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
  onRatesRequestDateChange(date) {
    dispatch(setRatesRequestDate(date));
    dispatch(fetchRatesData(date));
  },
  onSaveResultClick(data) {
    dispatch(addHistoryData(data));
  },
  onClearHistoryClick() {
    dispatch(clearHistoryData());
  },
});

const ConnectedCurrencyConverter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);

export default ConnectedCurrencyConverter;
