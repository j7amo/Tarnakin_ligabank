import React from 'react';
import styles from '../button/button.module.scss';

export default function Button({ modifier, onClick, children }) {
  return (
    <button
      type="button"
      className={`${styles['button']} ${styles[modifier]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
