import { Route, Routes } from "react-router"
import Home from "../pages/Home";
import Books from "../pages/Books";
import About from "../pages/About";
import Login from "../pages/login";
import Register from "../pages/Register";

const MainRoutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/books"  element={<Books/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path="/register"element={<Register/>}></Route>
      </Routes>

  )
}

export default MainRoutes
