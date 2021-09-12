import AuthorForm from "../components/AuthorForm"
import CustomButton from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from "@material-ui/core"
import { useParams, useHistory } from "react-router-dom"
const EditAuthor = () => {
    const { id } = useParams()
    const [initialData, setInitalData] = useState();
    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data);
                setInitalData(res.data)
            })
            .catch(err => console.log(err))
    }, [id])
    const onSubmit = (data) => {
        axios.put('http://localhost:8000/api/authors/update/' + id, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        history.push('/')
    }
    return (
        <>
            <Typography variant="h3" component="h3" align="center">Edit Author</Typography>
            {initialData && <AuthorForm initialData={initialData} onSubmit={onSubmit}/>}
            <CustomButton text="Home" color="default" cb={() => history.push('/')} />
        </>
    )
}

export default EditAuthor
