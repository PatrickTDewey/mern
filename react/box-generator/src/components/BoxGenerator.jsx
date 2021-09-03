import React, { useState } from 'react'
import Box from './Box'
const BoxGenerator = () => {
    const [state, setState] = useState({
        boxes: [{
            boxStyle: null
        }]
    })
    const renderBox = (i) => {
        i.preventDefault()
        const color = i.target[0].value;
        const boxes = [...state.boxes]
        console.log(boxes);
        let style = {'height': '64px', 'width': '64px', 'background':`${color}`}
        setState({
            boxes: boxes.concat({
                boxStyle: style
            })
        })
    }
    return (
        <div className="grid">
            <form action="" onSubmit={renderBox}>
                <label htmlFor="boxColor">Enter Box Color:</label>
                <input type="text" name="boxColor" id="boxColor" />
                <button>Generate box</button>
            </form>
            {
                state.boxes.map((box, i) => <Box key={i} boxStyle={box.boxStyle}/>)
            }
        </div>
    );
}
export default BoxGenerator
