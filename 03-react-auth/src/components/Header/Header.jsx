import { NavLink } from 'react-router-dom'

import './header.scss'
import { useAdminContext } from '../../hooks/useAdmin'

const Header = () => {
  const { isAdmin, logout } = useAdminContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>LOGO</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
        </li>
        {
          isAdmin &&
          <li className='header__list-item'>
            <NavLink to='/secret' className={({ isActive }) => linkIsActive(isActive)}>Secret</NavLink>
          </li>
        }
        <li className='header__list-item'>
          <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>Signup</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/' onClick={logout}>Log Out</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Header
