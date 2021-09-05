import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    
    return (
        <button className="btn" style={{'backgroundColor': color}} onClick={onClick}>{text}</button>
    )
}

export default Button

Button.defaultProps = {
    color: 'black',
    text: 'add',
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}