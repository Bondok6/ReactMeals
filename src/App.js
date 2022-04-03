import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartIsShowHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  return (
    <>
      {cartIsShown && <Cart onShowCart={cartIsShowHandler} />}
      <Header onShowCart={cartIsShowHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
