import React, { useState } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import ListContext from '../context/ListContext'

const AddItem = () => {
    const listContext = useContext(ListContext)
    const {list , setList} = listContext
    const [input, setInput] = useState({ text: '' })
    const [inputError, setInputError] = useState(false)
    const clickHandler = (e) => {
        e.preventDefault()
        let bool = false;
        input.text ? bool = false : bool = true
        if (bool) {
            setInputError(bool)
            return
        } else {
            setInputError(bool)
            setInput({ ...input })
            add({ ...input })
            setInput({text: ''})
        }
    }
    const add = (input) => {
        let {text} = input 
        let item = {
          id: list.length + 1,
          text,
          completed: false
        }
        setList([...list, item])
      }
    const { text } = input
    return (
        <div className="box">

            <div className="add-item-group">

                <input type="text" onChange={(e) => setInput({ ...input, text: e.target.value })} value={text} />
                <Button text="add" onClick={clickHandler} />
            </div>
            {
                inputError? <p style={{color: 'red'}}>Input is required.</p> : null
            }
        </div>
    )
}
AddItem.propTypes = {
    add: PropTypes.func,
}
export default AddItem
