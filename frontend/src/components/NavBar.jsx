import { NavLink } from "react-router"

const NavBar = () => {
  return (
    <div className="text-black">
      <NavLink to="/" >Home </NavLink>
      <NavLink to="/books" >Books </NavLink>
      <NavLink to="/about" >About </NavLink>
      <NavLink to="/register" >Register </NavLink>
      <NavLink to="/login" >Login </NavLink>
    </div>
  )
}

export default NavBar
