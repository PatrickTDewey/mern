import React from 'react'

const Box = (props) => {
    const { boxStyle } = props
    return (
        <div className="boxes">
            {
                boxStyle ? <div className="box" style={boxStyle} ></div> : null
            }
        </div>
    )
}
export default Box
