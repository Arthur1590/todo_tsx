import { FC } from 'react'
import s from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

const Nav: FC = () => {
	return (
		<header className={s.header}>
			<div className='container'>
				<nav className={s.nav}>
					<h1>ToDo.com</h1>
					<ul className={s.nav_list}>
						<li>
							<NavLink className={s.nav_list_link} to='/'>
								Todo
							</NavLink>
						</li>
						<li>
							<NavLink className={s.nav_list_link} to='/profile'>
								Profile
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Nav
