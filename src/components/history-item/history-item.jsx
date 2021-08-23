import React from 'react';
import styles from './history-item.module.scss';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export default function HistoryItem({
  ratesRequestDate,
  haveAmount,
  haveCurrencyCode,
  wantAmount,
  wantCurrencyCode,
}) {

  return (
    <li className={styles['history__item']}>
      <span className={styles['history__date']}>
        {dayjs(ratesRequestDate).format('DD.MM.YYYY')}
      </span>
      <div className={styles['history__amounts']}>
        <span className={styles['history__have-amount']}>
          {`${haveAmount} ${haveCurrencyCode}`}
        </span>
        <span className={styles['history__want-amount']}>
          {`${wantAmount} ${wantCurrencyCode}`}
        </span>
      </div>
    </li>
  );
}

HistoryItem.propTypes = {
  ratesRequestDate: PropTypes.string,
  haveAmount: PropTypes.number,
  haveCurrencyCode: PropTypes.string,
  wantAmount: PropTypes.number,
  wantCurrencyCode: PropTypes.string,
};
