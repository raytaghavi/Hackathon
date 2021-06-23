import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TabackgroundImg from './../assets/images/moneyback.jpg';
import tdc1 from './../assets/images/allInclusiveChequing-AccountRBC.png';
//import tdc1 from './../assets/images/TDAeroplanVisaInfiniteCard.jpg';
import tdc2 from './../assets/images/unlimitedChequing-AccountRBC.png';
import tdc3 from './../assets/images/everydayChequing-AccountRBC.png';
import tdc4 from './../assets/images/minimumChequing-AccountRBC.png';
import tdc5 from './../assets/images/studentAccountRBC.png';
import RBCMapImage from './../assets/images/RBCMap.png'
import Image from "material-ui-image";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        backgroundImage: `url(${TabackgroundImg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '5%',
        boxSizing: 'border-box'
    },
    mapImg: {
        display: 'block',
        width: '35%',
        marginLeft: 20
    },
    root: {

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detail: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    categoryText: {
        textAlign: 'center',
    },
    table: { textAlign: 'left' },
    media: {
        display: 'block',
        width: 80,
        objectFit: 'contain',
        marginInline: 'auto'
    }
});

// marginInline => marginRight & marginLeft
// marginBlock => marginTop & marginBottom

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
        <div className={classes.container}>
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
                            <TableCell className={classes.detail}>
                                <img src={tdc1} className={classes.media} />
                                TD All-Inclusive Banking Plan
                            </TableCell>
                            <TableCell className={classes.detail}>Up to $400*</TableCell>
                            <TableCell className={classes.detail}>$29.95</TableCell>
                            <TableCell className={classes.detail}>$5,000</TableCell>
                            <TableCell className={classes.detail}>Unlimited</TableCell>
                            <TableCell className={classes.detail}>Annual</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.detail}>
                                <img src={tdc2} className={classes.media} />
                                TD Unlimited Chequing Account
                            </TableCell>
                            <TableCell className={classes.detail}>Up to $400*</TableCell>
                            <TableCell className={classes.detail}>$16.95</TableCell>
                            <TableCell className={classes.detail}>$4,000</TableCell>
                            <TableCell className={classes.detail}>Unlimited</TableCell>
                            <TableCell className={classes.detail}>First Year</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.detail}>
                                <img src={tdc3} className={classes.media} />
                                TD Every Day Chequing Account
                            </TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                            <TableCell className={classes.detail}>$10.95</TableCell>
                            <TableCell className={classes.detail}>$3,000</TableCell>
                            <TableCell className={classes.detail}>25</TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.detail}>
                                <img src={tdc4} className={classes.media} />
                                TD Minimum Chequing Account
                            </TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                            <TableCell className={classes.detail}>$3.95</TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                            <TableCell className={classes.detail}>12</TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.detail}>
                                <img src={tdc5} className={classes.media} />
                                TD Student Chequing Account
                            </TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                            <TableCell className={classes.detail}>$0</TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                            <TableCell className={classes.detail}>25</TableCell>
                            <TableCell className={classes.detail}>n/a</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <img src={RBCMapImage} alt="rbc map" className={classes.mapImg} />
        </div>
    );
}
