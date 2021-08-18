import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './promo.module.scss';
import blackCard1x from '../../assets/img/black-card-1x.png';
import whiteCard1x from '../../assets/img/white-card-1x.png';
import blackCard2x from '../../assets/img/black-card-2x.png';
import whiteCard2x from '../../assets/img/white-card-2x.png';

export default function Promo() {
  return (
    <section className={styles['promo']}>
      <div className={`${styles['promo__inner']} ${globalStyles['container']}`}>
        <div className={styles['promo__text-col']}>
          <h2 className={styles['promo__title']}>Лига Банк</h2>
          <p className={styles['promo__lead']}>Кредиты на любой случай</p>
          <a className={styles['promo__link']} href='/'>Рассчитать кредит</a>
        </div>
        <div className={styles['promo__img-col']}>
          <img srcSet={`${whiteCard1x} 1x, ${whiteCard2x} 2x`} src={whiteCard1x} width='335' height='228' alt='Белая карта Лига Банка'/>
          <img srcSet={`${blackCard1x} 1x, ${blackCard2x} 2x`} src={blackCard1x} width='335' height='228' alt='Чёрная карта Лига Банка'/>
        </div>
      </div>
    </section>
  );
}