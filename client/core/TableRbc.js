import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TabackgroundImg from './../assets/images/moneyback.jpg';
import rbccc1 from './../assets/images/RBCAvion.png';
import rbccc2 from './../assets/images/RBCRewardsVisa.png';
import rbccc3 from './../assets/images/RBCCashBackPreferred.png';
import rbccc4 from './../assets/images/RBCCashBackMastercard.png';

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
                        <TableCell className={classes.title}>Credit Cards</TableCell>
                        <TableCell className={classes.title}>Annual Fee</TableCell>
                        <TableCell className={classes.title}>Interest: Purchases</TableCell>
                        <TableCell className={classes.title}>Interest: Cash Advances</TableCell>
                        <TableCell className={classes.title}>Additional Cardholder</TableCell>
                        <TableCell className={classes.title}>Rewards</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={rbccc1} /> <br />RBC Avion Visa Infinite</TableCell>
                        <TableCell className={classes.detail}>$120</TableCell>
                        <TableCell className={classes.detail}>19.99%</TableCell>
                        <TableCell className={classes.detail}>22.99%</TableCell>
                        <TableCell className={classes.detail}>$50</TableCell>
                        <TableCell className={classes.detail}>Earn 1 RBC Rewards point for every $1 spend, extra 25% on eligible travel related purchases</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={rbccc2} /> <br />RBC Rewards+ Visa</TableCell>
                        <TableCell className={classes.detail}>$0</TableCell>
                        <TableCell className={classes.detail}>19.99%</TableCell>
                        <TableCell className={classes.detail}>22.99%</TableCell>
                        <TableCell className={classes.detail}>$0</TableCell>
                        <TableCell className={classes.detail}>Earn 1 RBC Rewards point for every $1 spent on gas, grocery and drug store purchases, or $2 spent on other purchases </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={rbccc3} /> <br />RBC Cash Back Preferred World Elite Mastercard</TableCell>
                        <TableCell className={classes.detail}>$99</TableCell>
                        <TableCell className={classes.detail}>19.99%</TableCell>
                        <TableCell className={classes.detail}>22.99%</TableCell>
                        <TableCell className={classes.detail}>$0</TableCell>
                        <TableCell className={classes.detail}>Earn up to 1.5% cash back on your spending - big or small</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.detail}><img src={rbccc4} /> <br />RBC Cash Back Mastercard</TableCell>
                        <TableCell className={classes.detail}>$0</TableCell>
                        <TableCell className={classes.detail}>19.99%</TableCell>
                        <TableCell className={classes.detail}>22.99%</TableCell>
                        <TableCell className={classes.detail}>$0</TableCell>
                        <TableCell className={classes.detail}>Up to 2% cash back on grocery purchases, up to 1% cash back on all others</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}