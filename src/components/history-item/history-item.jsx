import React from 'react';
import styles from './history-item.module.scss';
import dayjs from 'dayjs';

export default function HistoryItem({
  ratesRequestDate,
  haveAmount,
  haveCurrencyCode,
  wantAmount,
  wantCurrencyCode,
}) {
  console.log(ratesRequestDate);
  console.log(haveAmount);
  console.log(haveCurrencyCode);
  console.log(wantAmount);
  console.log(wantCurrencyCode);

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
