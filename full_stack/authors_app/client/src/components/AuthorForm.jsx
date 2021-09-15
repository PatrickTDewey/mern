import {
    Paper,
    FormControl,
    FormGroup,
    InputLabel,
    OutlinedInput,
    Box,
    Typography
} from '@material-ui/core'
import { useState } from 'react'
import CustomButton from './Button'
const styles = {
    paper: {
        padding: '1rem'
    },
    input: {

        marginBottom: "1rem"
    },
    label: {
        padding: '5px'
    },
    box: {
        marginBottom: '1rem'
    },

}

const AuthorForm = ({onSubmit, initialData, errors}) => {
    const [input, setInput] = useState(initialData ? initialData:{
        firstName:'',
        lastName:'',
        date_of_birth:'',
        date_of_death:'',
    })
    
    return (
        <Box style={styles.box}>
            <Paper elevation={3} style={styles.paper} >
                    <FormGroup>
                       {errors.firstName ? <Typography color="secondary">{errors.firstName}</Typography> : null}
                        <FormControl  style={styles.input}>
                            <InputLabel style={styles.label}>First Name</InputLabel>
                            <OutlinedInput type="text" id="firstName" value={input.firstName} onChange={(e) => setInput({ ...input, firstName: e.target.value })} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                    {errors.lastName ? <Typography color="secondary">{errors.lastName}</Typography> : null}
                        <FormControl  style={styles.input}>
                            <InputLabel style={styles.label}>Last Name:</InputLabel>
                            <OutlinedInput type="text" id="lastName" value={input.lastName} onChange={(e) => setInput({ ...input, lastName: e.target.value })} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel style={styles.label}>Date Of Birth</InputLabel>
                        <OutlinedInput type="date" style={styles.input} id="dob"  onChange={(e) => setInput({ ...input, date_of_birth: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <InputLabel style={styles.label}>Date Of Death</InputLabel>
                        <OutlinedInput type="date" style={styles.input} id="dod"  onChange={(e) => setInput({ ...input, date_of_death: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <CustomButton color="primary" text="Add Author" cb={() => onSubmit(input)}/>
                    </FormGroup>
            </Paper>
        </Box >
    )
}

export default AuthorForm
