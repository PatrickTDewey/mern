import PropTypes from 'prop-types'
import Item from './Item'

const List = ({list, onUpdate, onDelete}) => {
    return (
        <div className="list">
            {
                list.map((item) => <Item item={item} key={item.id} onUpdate={onUpdate} onDelete={onDelete}/>)
            }
        </div>
    )
}
List.propTypes = {
    list: PropTypes.array,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
}
export default List
