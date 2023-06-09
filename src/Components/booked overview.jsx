import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from '../data/booked-days.json';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {Avatar} from "@mui/material";
import {useTheme} from "@mui/material/styles";

function Title(props) {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}


function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}
// // The data to be displayed in the table
// const rows = [
//     createData(
//         0,
//         '16 Mar, 2019',
//         'Elvis Presley',
//         'Tupelo, MS',
//         'VISA ⠀•••• 3719',
//         312.44,
//     ),
//     createData(
//         1,
//         '16 Mar, 2019',
//         'Paul McCartney',
//         'London, UK',
//         'VISA ⠀•••• 2574',
//         866.99,
//     ),
//     createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//     createData(
//         3,
//         '16 Mar, 2019',
//         'Michael Jackson',
//         'Gary, IN',
//         'AMEX ⠀•••• 2000',
//         654.39,
//     ),
//     createData(
//         4,
//         '15 Mar, 2019',
//         'Bruce Springsteen',
//         'Long Branch, NJ',
//         'VISA ⠀•••• 5919',
//         212.79,
//     ),
// ];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders(props) {
    const theme =useTheme()
    const { dat } = props;




    return (
        <React.Fragment>
            <Title dat>{dat[0].day_date}</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Num. of Guests</TableCell>
                        <TableCell>Special Requests</TableCell>
                        <TableCell></TableCell>
                        {/*<TableCell align="right">Sale Amount</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {dat.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Avatar alt={row.name} src={row.picture}
                                        sx={{ bgcolor: 'secondary.main' }}
                                />
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.num_people}</TableCell>
                            <TableCell>{row.special_requests}</TableCell>
                            <TableCell><Button variant="contained">chat now</Button></TableCell>
                            {/*<TableCell align="right">{`$${row.amount}`}</TableCell>*/}
                        </TableRow>

                    ))}

                        </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    );
}