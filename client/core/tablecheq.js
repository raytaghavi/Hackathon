import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TabackgroundImg from './../assets/images/moneyback.jpg';
import tdc1 from './../assets/images/allInclusiveChequing-Account.svg';
//import tdc1 from './../assets/images/TDAeroplanVisaInfiniteCard.jpg';
import tdc2 from './../assets/images/unlimitedChequing-Account.svg';
import tdc3 from './../assets/images/everydayChequing-Account.svg';
import tdc4 from './../assets/images/minimumChequing-Account.svg';
import tdc5 from './../assets/images/studentAccount.svg';

import Image from "material-ui-image";

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${TabackgroundImg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '5%',
        boxSizing: 'border-box'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detail: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    categoryText: {
        textAlign: 'center',
    },
    table: { textAlign: 'left' },
    media: {
        objectFit: 'contain',
    }
});

export default function BasicTable() {

    //const [rows, setRows] = useState([]);


    // useEffect(() => {
    //   const getinfo = async () => {
    //     let response = await fetch('/api/posts/all');
    //     let data = await response.json();
    //     console.log("Data found", data[3])
    //     setRows(data);
    //   };
    //   getinfo();
    // }, []);

    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.title}>Chequing Account</TableCell>
                        <TableCell className={classes.title}>Special Offer</TableCell>
                        <TableCell className={classes.title}>Monthly Fee</TableCell>
                        <TableCell className={classes.title}>Mininum Monthly - Fee rebate</TableCell>
                        <TableCell className={classes.title}>Transaction Included</TableCell>
                        <TableCell className={classes.title}>Fee Rebate - TD Credit Card</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {/* <TableCell className={classes.detail}><img src={tdc1}/>TD All-Inclusive Banking Plan</TableCell> */}
                        <TableCell className={classes.detail}><img src={tdc1} />TD All-Inclusive Banking Plan</TableCell>
                        <TableCell className={classes.detail}>Up to $400*</TableCell>
                        <TableCell className={classes.detail}>$29.95</TableCell>
                        <TableCell className={classes.detail}>$5,000</TableCell>
                        <TableCell className={classes.detail}>Unlimited</TableCell>
                        <TableCell className={classes.detail}>Annual</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={tdc2} />TD Unlimited Chequing Account</TableCell>
                        <TableCell className={classes.detail}>Up to $400*</TableCell>
                        <TableCell className={classes.detail}>$16.95</TableCell>
                        <TableCell className={classes.detail}>$4,000</TableCell>
                        <TableCell className={classes.detail}>Unlimited</TableCell>
                        <TableCell className={classes.detail}>First Year</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={tdc3} />TD Every Day Chequing Account</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                        <TableCell className={classes.detail}>$10.95</TableCell>
                        <TableCell className={classes.detail}>$3,000</TableCell>
                        <TableCell className={classes.detail}>25</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={tdc4} />TD Minimum Chequing Account</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                        <TableCell className={classes.detail}>$3.95</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                        <TableCell className={classes.detail}>12</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={tdc5} />TD Student Chequing Account</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                        <TableCell className={classes.detail}>$0</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                        <TableCell className={classes.detail}>25</TableCell>
                        <TableCell className={classes.detail}>n/a</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
