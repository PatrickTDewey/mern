import AuthorForm from '../components/AuthorForm';
import CustomButton from '../components/Button';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
const AddAuthor = () => {
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const addAuthor = (author) => {
        const { firstName, lastName, date_of_birth, date_of_death } = author
        axios.post('http://localhost:8000/api/authors/new', { firstName, lastName, date_of_birth, date_of_death })
            .then(res => {
                console.log(res);
                history.push('/');
            })
            .catch(err => {
                const errors = err.response.data.errors
                const errorObject = {};
                for (const key of Object.keys(errors)) {
                   errorObject[key] = errors[key].message;
                   
                }
                setErrors(errorObject);
            })
    };
    return (
        <>
            <Typography variant="h1" component="h1" align="center">Add Author</Typography>
            <AuthorForm onSubmit={addAuthor} errors={errors}/>
            <CustomButton text="Home" color="default" cb={() => history.push('/')} />
        </>
    );
};

export default AddAuthor;
