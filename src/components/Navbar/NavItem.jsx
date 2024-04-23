import { NavLink } from "react-router-dom"

const NavItem = ({children, to}) => {
    return (
        <NavLink to={to} className={({isActive}) => `nav-link ${isActive ? 'active' : ""}`} end> {children} </NavLink>
    )
}

export default NavItem