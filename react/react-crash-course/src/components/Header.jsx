import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = (e) => {
        e.preventDefault()
        console.log(e);
    }
    return (
        <div className="header">
                <h1>{title}</h1>
                <Button color='black' text='add' onClick={onClick}/>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
