import { useContext } from "react"
import NavbarContext from "../context/NavbarContext"
const Navbar = () => {
    const {state} = useContext(NavbarContext)
    const {name} = state
    return (
        <div className="nav">
            <h1>Hello, {name}</h1>
        </div>
    )
}

export default Navbar
