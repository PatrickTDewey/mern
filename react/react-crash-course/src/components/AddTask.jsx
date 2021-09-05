import { useState } from 'react'
import PropTypes from 'prop-types'

const AddTask = ({ addTask }) => {
    const [form, setForm] = useState({
        text: '',
        day: '',
        reminder: false,
    })
    const [formErrors, setFormErrors] = useState({
        text: '',
        day: ''
    })
    const submitHandler = (e, task) => {
        e.preventDefault()
        let errors = { ...formErrors }
        !task.text ? errors.text = 'text is required' : errors.text = ''
        !task.day ? errors.day = 'day is required' : errors.day = ''
        if (errors.day || errors.text) {
            console.log(errors);
            setFormErrors({ ...errors })
            return
        }
        else {
            setFormErrors({ text: '', day: '' })
            addTask(form)
            setForm({ text: '', day: '', reminder: false })
        }
    }
    const { text, day, reminder } = form
    const { text: textError, day: dayError } = formErrors
    return (
        <form className="add-form" onSubmit={(e) => submitHandler(e, form)}>
            <div className="form-control" >
                <label htmlFor="task">Task</label>
                <input type="text" name="task" id="task" onChange={(e) => setForm({ ...form, text: e.target.value })} value={text} />
                {
                    textError ? <p style={{ color: 'red' }}>{textError}</p> : null
                }
            </div>
            <div className="form-control">
                <label htmlFor="time">Day & Time</label>
                <input type="datetime" name="time" id="task" onChange={(e) => setForm({ ...form, day: e.target.value })} value={day} />
                {
                    dayError ? <p style={{ color: 'red' }}>{dayError}</p> : null
                }
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" checked={reminder}name="reminder" id="reminder" onChange={(e) => setForm({ ...form, reminder: !reminder })} value={reminder} />
            </div>
            <input type="submit" value="Save" className="btn btn-block" />
        </form>
    )
}
AddTask.propTypes = {
    addTask: PropTypes.func
}
export default AddTask
