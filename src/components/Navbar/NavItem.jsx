import { NavLink } from "react-router-dom"

const NavItem = ({children, to}) => {
    return (
        <NavLink to={to} className={({isActive}) => `nav-link ${isActive ? 'active' : ""} m-0`} end> {children} </NavLink>
    )
}

export default NavItem