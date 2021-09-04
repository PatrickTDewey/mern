import React from 'react'

const Box = (props) => {
    const {style} = props
    return (
        <div className="grid-item">
            <div className="box" style={style}></div>
        </div>
    )
}

export default Box
