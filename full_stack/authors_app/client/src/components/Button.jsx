import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    button:{
        margin:"0px 5px",
    },
})

const CustomButton = ({text, color, cb}) => {
    const classes = useStyles()
    return (
        text === 'Delete'? <IconButton aria-label="delete" color={color} onClick={cb}><DeleteIcon/></IconButton>:
        <Button className={classes.button} variant="contained" color={color} size="small" onClick={cb}>{text}</Button>
    )
}

export default CustomButton
