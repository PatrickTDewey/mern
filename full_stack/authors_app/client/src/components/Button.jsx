import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const CustomButton = ({text, color, cb}) => {
    return (
        text === 'Delete'? <IconButton aria-label="delete" color={color} onClick={cb}><DeleteIcon/></IconButton>:
        <Button variant="contained" color={color} size="small" onClick={cb}>{text}</Button>
    )
}

export default CustomButton
