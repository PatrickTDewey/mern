import React, { useState } from 'react'

const Form = (props) => {
    const [inputState, setInputState] = useState({
        background: '',
        height: '',
        width: '',
    })
    const { onSubmit } = props
    const inputInfo = (e) => {
        let styles = { ...inputState }
        let color, height, width;
        if (e.target.id === 'color') {
            color = e.target.value
            styles.background = color;
        }
        if (e.target.id === 'height') {
            height = e.target.value
            styles.height = height 
        }
        if (e.target.id === 'width') {
            width = e.target.value
            styles.width = width 
        }
        
        setInputState(styles)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let styles = {...inputState}
        styles.width += 'px'
        styles.height += 'px'
        onSubmit(styles)
        setInputState({
            background: '',
            height: '',
            width: '',
        })
    }
    return (
        <form action="" className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="color">Color:</label>
                <input type="text" name="color" id="color" onChange={inputInfo} value={inputState.background} />
            </div>
            <div className="form-group">
                <label htmlFor="height">Size: (L x W)</label>
                <input type="number" name="height" id="height" onChange={inputInfo} value={inputState.height} />
            </div>
            <div className="form-group">
                <label htmlFor="width">Width:</label>
                <input type="number" name="width" id="width" onChange={inputInfo} value={inputState.width} />
            </div>
            <div className="form-group">
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
