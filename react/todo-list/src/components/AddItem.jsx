import React, { useState } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const AddItem = ({ add }) => {
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
        }


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
