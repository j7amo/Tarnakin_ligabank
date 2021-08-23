import React from 'react';
import styles from '../button/button.module.scss';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  modifier: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};
