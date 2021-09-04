import React, { useState } from 'react'
import Box from './Box'
const Form = () => {
    const [state, setState] = useState({
        boxes: [{
            boxStyle: null
        }]
    })
    const renderBox = (i) => {
        i.preventDefault()
        const color = i.target[0].value;
        const height = i.target[1].value
        const width = i.target[2].value
        const boxes = [...state.boxes]
        console.log(boxes);
        let style = {'height': `${height}px`, 'width':`${width}px`, 'background':`${color}`}
        setState({
            boxes: boxes.concat({
                boxStyle: style
            })
        })
        i.target[0].value = ''
        i.target[1].value = ''
        i.target[2].value = ''
    }
    return (
        <div className="grid">
            <form action="" onSubmit={renderBox}>
                <label htmlFor="boxColor">Enter Box Color:</label>
                <input type="text" name="boxColor" id="boxColor" />
                <label htmlFor="boxHeight">Height</label>
                <input type="text" name="boxHeight" id="boxHeight" />
                <label htmlFor="boxWidth">Width</label>
                <input type="text" name="boxWidth" id="boxWidth" />
                <button>Generate box</button>
            </form>
            {
                state.boxes.map((box, i) => <Box key={i} boxStyle={box.boxStyle}/>)
            }
        </div>
    );
}
export default Form