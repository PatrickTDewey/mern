import PropTypes from 'prop-types'
import Item from './Item'
import { useContext } from 'react'
import ListContext from '../context/ListContext'

const List = ({ onUpdate, onDelete}) => {
    const listContext = useContext(ListContext)
    const {list, setList} = listContext
    const updateItem = (e, id) => {
        let updateList = [...list]
        setList(updateList.map((item) => item.id === id ? {...item, completed: !item.completed }: item))
      }
      const deleteItem = (e, id) => {
        setList([...list].filter((item) => item.id !== id))
      }
    return (
        <div className="list">
            {
                list.map((item) => <Item item={item} key={item.id} onUpdate={updateItem} onDelete={deleteItem}/>)
            }
        </div>
    )
}
List.propTypes = {
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
}
export default List
