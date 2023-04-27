import cn from 'classnames';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { UserContext } from '../../contexts/current-user-context';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsContext } from '../../contexts/card-context';


import { ReactComponent as FavoriteIcon } from './img/favorites.svg'
import { ReactComponent as LogoutIcon } from './img/logout.svg';
import { ReactComponent as CartIcon } from './img/cart.svg';
import { ReactComponent as ProfileIcon } from './img/profile.svg';
import { ReactComponent as UserIcon } from './img/user.svg';

import s from "./styles.module.css";
import "./styles.css";
import { useSelector } from 'react-redux';

export function Header({ children }) {
  const currentUser = useSelector(state => state.user.data);
  const favorites = useSelector(state => state.products.favoriteProducts)
  const { toggleTheme } = useContext(ThemeContext)
  const location = useLocation()
  const handleClickButtonEdit = () => {
    // onUpdateUser({ name: 'Наталья', about: 'студент' })
  }

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <div className={s.iconsMenu}>
          <Link className={s.favoritesLink} to={{ pathname: '/favorites' }}>
            <FavoriteIcon />
            {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
          </Link>
         
        </div>


          <Link className={s.favoritesLink} to={{ pathname: '/cart' }}>
            <CartIcon />
            {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
          </Link>

          <Link to='/login' className={s.iconsMenuItem} replace state={{ backgroundLocation: location, initialPath: location.pathname }}>
            <UserIcon />
            Войти
          </Link>


          <Link to='/profile' className={s.iconsMenuItem}>
            <ProfileIcon />
            Наталья
          </Link>

          <Link to='/' className={s.iconsMenuItem}>
            <LogoutIcon />
            Выйти
          </Link>

        </div>
   



        {/* <span>{currentUser?.name}: {currentUser?.about}</span>
        <span>{currentUser?.email}</span>
        <Button action={handleClickButtonEdit}>
          Изменить
        </Button> */}
        {/* <label className="wraper" htmlFor="something">
          <div className="switch-wrap">
            <input type="checkbox" id="something" onChange={toggleTheme} />
            <div className="switch"></div>
          </div>
        </label> */}

      </div>

    </header>
  );
}