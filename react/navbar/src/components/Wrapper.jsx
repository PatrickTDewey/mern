import {useState} from 'react'
import NavbarContext from '../context/NavbarContext'
const Wrapper = (props) => {
    const [state, setState] = useState({name: 'Patrick'})
    return (
    <NavbarContext.Provider value={{state, setState}} >
        {props.children}
    </NavbarContext.Provider>
    )

}

export default Wrapper
