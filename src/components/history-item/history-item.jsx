import React from 'react';
import styles from './history-item.module.scss';

export default function HistoryItem({ date, haveAmount, wantAmount }) {
  return (
    <li className={styles['history__item']}>
      <span className={styles['history__date']}>{date}</span>
      <div className={styles['history__amounts']}>
        <span className={styles['history__have-amount']}>{haveAmount}</span>
        <span className={styles['history__want-amount']}>{wantAmount}</span>
      </div>
    </li>
  );
}
