import { Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import universityStudentData from '../../universityStudentData/universityStudentData.json';
import SingleUniStudent from '../SingleUniStudent/SingleUniStudent';

const UniversityStudent = () => {
    const [varsityStudentInfo, setVarsityStduentInfo] = useState([]);


    useEffect(() => {
        setVarsityStduentInfo(universityStudentData);
    }, []);

    return (
        <React.Fragment>
        <h3 style={{marginTop: '80px', color: '#FFB038', borderBottom: '0.5px solid gray', paddingBottom: '5px'}}>University Student</h3>
        <p style={{marginTop: '10px', paddingBottom: '5px', textAlign: 'center'}}><small>নামে ক্লিক দিয়ে তার সম্পর্কে ডিটেইলস দেখ</small></p>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{border: 'none'}}>Name</TableCell>
              <TableCell style={{border: 'none'}}>Department</TableCell>
              <TableCell style={{border: 'none'}}>University</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {varsityStudentInfo.map(student => (
              <SingleUniStudent key={student.name}
              student={student}
              >
              </SingleUniStudent>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#"  sx={{ mt: 3 }}>
          See more
        </Link>
        <p style={{textAlign: 'justify', color: 'red', marginTop: '20px'}}><small>এই লিস্টে তুমি নেই জন্য আবার ভেবে বসো না, তুমি মেধাবী নও!
        তবে এই লিস্টে তোমার নাম দেখতে চাইলে, তোমাকে প্রচুর পড়তে হবে।</small>
        </p>
      </React.Fragment>
    );
};

export default UniversityStudent;