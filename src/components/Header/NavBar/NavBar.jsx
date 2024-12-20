import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav className='nav_container'>
        <ul className='nav_list'>
          <li className='nav_item'>
            <NavLink className='nav_link' to='/about'>
              ABOUT ME
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink className='nav_link' to='/portfolio'>
              MY WORK
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
