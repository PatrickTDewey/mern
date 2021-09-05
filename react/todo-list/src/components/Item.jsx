import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
const Item = ({ item, onDelete, onUpdate}) => {
    const {id, text, completed} = item
    return (
        <div className="item">
            <div className="item-group">
                <p className={`${completed ? 'strike-through': ''}`}>{text}</p>
                <input type="checkbox" className="checkbox"checked={completed} value={completed} onChange={(e) => onUpdate(e, id)}/>
            </div>
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onDelete(e, id)} />
        </div>
    )
}
Item.propTypes = {
    item: PropTypes.object,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,

}
export default Item
