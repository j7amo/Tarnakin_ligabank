import React from 'react';
import styles from '../button/button.module.scss';

export default function Button({ modifier, children }) {
  return (
    <button type="button" className={`${styles['button']} ${styles[modifier]}`}>
      {children}
    </button>
  );
}
