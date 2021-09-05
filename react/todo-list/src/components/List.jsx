import PropTypes from 'prop-types'
import Item from './Item'
import { useContext } from 'react'
import ListContext from '../context/ListContext'

const List = ({ onUpdate, onDelete}) => {
    const list = useContext(ListContext)
    return (
        <div className="list">
            {
                list.map((item) => <Item item={item} key={item.id} onUpdate={onUpdate} onDelete={onDelete}/>)
            }
        </div>
    )
}
List.propTypes = {
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
}
export default List
