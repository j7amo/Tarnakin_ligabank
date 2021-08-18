import globalStyles from './app.module.scss';
import Header from '../header/header.jsx';
import Promo from '../promo/promo.jsx';
import CurrencyConverter from '../currency-converter/currency-converter';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className={globalStyles['visually-hidden']}>Страница сайта Лига Банка с конвертером валют</h1>
        <Promo />
        <CurrencyConverter />
      </main>
    </>
  );
}

export default App;
