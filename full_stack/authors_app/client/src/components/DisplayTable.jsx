import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@material-ui/core';
import CustomButton from './Button'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    
});
const DisplayTable = () => {
    const [authors, setAuthors] = useState([{
        firstName: '',
        lastName: '',
        date_of_birth: '',
        date_of_death: '',
    }]);
    const [books, setBooks] = useState();
    const classes = useStyles();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
        axios.get('http://localhost:8000/api/books')
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }, []);
    const history = useHistory();
    const onDelete = (e, id) => {
        setAuthors([...authors].filter(author => author._id !== id))
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="author's table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Added Books:</TableCell>
                        <TableCell>Date Of Birth</TableCell>
                        <TableCell >Date Of Death</TableCell>
                        <TableCell >Available Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors.map(row => (
                        <TableRow key={row.firstName}>
                            <TableCell component="th" scope="row">{row.firstName}</TableCell>
                            <TableCell >{row.lastName}</TableCell>
                            <TableCell>Books: {books ? books.filter(bookRow => bookRow.author === row._id).map(book => book.title) : <p>not loaded</p>}</TableCell>
                            <TableCell >{row.date_of_birth}</TableCell>
                            <TableCell >{row.date_of_death}</TableCell>
                            <TableCell>
                                <CustomButton color="default" text="Edit Author" cb={() => history.push(`/authors/edit/${row._id}`)} />
                                <CustomButton color="primary" text="Add Book" cb={() => history.push(`/books/${row._id}/new`)} />
                                <CustomButton color="secondary" text="Delete" cb={(e) => onDelete(e, row._id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DisplayTable
