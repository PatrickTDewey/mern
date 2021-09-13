import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import CustomButton from './Button'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});
const AuthorTable = () => {
    const [authors, setAuthors] = useState();
    const classes = useStyles();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
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
                                <TableCell >{row.date_of_birth}</TableCell>
                                <TableCell >{row.date_of_death}</TableCell>
                                <TableCell>
                                    <CustomButton color="default" text="edit" cb={() => history.push(`/authors/edit/${row._id}`)} />
                                    <CustomButton color="secondary" text="Delete" cb={(e) => onDelete(e, row._id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default AuthorTable
