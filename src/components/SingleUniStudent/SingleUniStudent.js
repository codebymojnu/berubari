import React from 'react';
import { TableCell,  TableRow } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './SingleUniStudent.css';

const SingleUniStudent = (props) => {
    const history = useHistory();
    const { name, department, university, nickname } = props.student;

    const handleClick = () => {
        history.push(`/university-student/${nickname}`);
    }

    return (
        <>
            <TableRow>
                <TableCell style={{border: 'none'}}>
                  <span onClick={handleClick} id="student-name">{name}</span>
                </TableCell>
                <TableCell style={{border: 'none'}}>{department}</TableCell>
                <TableCell style={{border: 'none'}}>{university}</TableCell>
            </TableRow>
        </>        
    );
};

export default SingleUniStudent;