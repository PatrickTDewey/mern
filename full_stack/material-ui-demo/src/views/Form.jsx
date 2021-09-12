import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core'

const styles = {
    paper: {
        width:"20rem", padding: '1rem'
    },
    input: {
        
        marginBottom: "1rem"
    },
    label: {
        padding:'5px'
    },
    button: {
        width:"100%"
    }   
}

const Form = () => {
    return (
        <Paper elevation={3} style={styles.paper}>
            <h1>Login Form</h1>
            <form>
                <FormControl variant="outline" style={styles.input}>
                    <InputLabel style={styles.label}>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outline" style={styles.input}>
                    <InputLabel style={styles.label}>E-mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl variant="outline" style={styles.input}>
                    <InputLabel style={styles.label}>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl variant="outline" style={styles.input}>
                    <InputLabel style={styles.label}>Confirm Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" style={styles.button}>Register</Button>
            </form>
        </Paper>
    )
}

export default Form
