import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={(e) => onToggle(e, task.id)}>
            <h3>{task.text}<FaTimes style={{ color: 'red' }} onClick={(e) => onDelete(e, task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}
Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}
export default Task
