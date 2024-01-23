import logo from '../../assets/logo.svg';
import ring from '../../assets/ring.svg';
import moon from '../../assets/icons/moon.svg';
import cart from '../../assets/shopping-cart.svg';
import { useContext, useState } from 'react';
import CartDetails from '../Cine/CartDetails';
import { MovieContext } from '../../context';

const Header = () => {

    const [showCart, setShowCart] = useState(false);

    const {cartData} = useContext(MovieContext);

    function handleCartShow(){
        setShowCart(true);
    }

  return (
    <header>
        {
            showCart && <CartDetails onClose={() => setShowCart(false)}/>
        }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={moon}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img
                src={cart}
                width="24"
                height="24"
                alt=""
              />
            </a>
            {
                cartData.length > 0 && (
                    <span className='bg-red-400 text-white text-sm p-1 rounded-full'>
                        {cartData.length}
                    </span>
                )
              }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
