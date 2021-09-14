import { Typography, Box } from "@material-ui/core";
import DisplayTable from "../components/DisplayTable";
import { useHistory } from 'react-router-dom'
import CustomButton from "../components/Button";

const Main = () => {
    const history = useHistory();

    return (
        <>
            <Box my={4}>
                <Typography variant="h1" component="h1" align="center" gutterBottom>
                    Authors App
                </Typography>
                <DisplayTable />
            </Box>
            <CustomButton text="Add Author" color="primary" cb={() => history.push('/authors/new')}></CustomButton>
        </>
    )
}

export default Main
