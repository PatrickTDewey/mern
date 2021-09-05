import { useContext, useState } from "react"
import NavbarContext from "../context/NavbarContext"
const Form = () => {
    const [input, setInput] = useState('')
    const context = useContext(NavbarContext)
    const { state, setState } = context

    const submitHandler = (e) => {
        e.preventDefault()
        setState({ ...state, name: input })
        setInput('')
    }
    return (
        <form action="" onSubmit={submitHandler}>
            <div className="form-group" >
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={(e) => setInput(e.target.value)} value={input} placeholder={state.name} />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
