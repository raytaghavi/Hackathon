import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TabackgroundImg from './../assets/images/moneyback.jpg';
//import tdc1 from './../assets/images/allInclusiveChequing-Account.svg';
import tdc1 from './../assets/images/TDAeroplanVisaInfiniteCard.jpg';
import tdcc2 from './../assets/images/tdcc2.jpg';
import tdcc3 from './../assets/images/tdcc3.jpg';
import tdcc4 from './../assets/images/tdcc4.jpg';
//import tdc5 from './../assets/images/studentAccount.svg';

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
            {/* <TableCell className={classes.detail}><img src={tdc1}/>TD All-Inclusive Banking Plan</TableCell> */}
            <TableCell className={classes.detail}><img src={tdc1} /> <br />TD® Aeroplan® Visa Infinite* Card</TableCell>
            <TableCell className={classes.detail}>$139</TableCell>
            <TableCell className={classes.detail}>19.99%</TableCell>
            <TableCell className={classes.detail}>22.99%</TableCell>
            <TableCell className={classes.detail}>$75</TableCell>
            <TableCell className={classes.detail}>Earn up to 20,000 Aeroplan points </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.detail}><img src={tdcc2} /> <br />TD Cash Back Visa* Card</TableCell>
            <TableCell className={classes.detail}>$0</TableCell>
            <TableCell className={classes.detail}>19.99%</TableCell>
            <TableCell className={classes.detail}>22.99%</TableCell>
            <TableCell className={classes.detail}>$0</TableCell>
            <TableCell className={classes.detail}>Earn 1% in Cash Back Dollars on eligible grocery Purchases and gas Purchases</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.detail}><img src={tdcc3} /> <br />TD Business Travel Visa* Card</TableCell>
            <TableCell className={classes.detail}>$149</TableCell>
            <TableCell className={classes.detail}>19.99%</TableCell>
            <TableCell className={classes.detail}>22.99%</TableCell>
            <TableCell className={classes.detail}>49</TableCell>
            <TableCell className={classes.detail}>Welcome Bonus1: Apply today and get 30,000 TD Rewards Points upon first purchase.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.detail}><img src={tdcc4} /> <br />TD Rewards Visa Card</TableCell>
            <TableCell className={classes.detail}>$0</TableCell>
            <TableCell className={classes.detail}>19.99%</TableCell>
            <TableCell className={classes.detail}>22.99%</TableCell>
            <TableCell className={classes.detail}>0</TableCell>
            <TableCell className={classes.detail}>Earn 2 TD Rewards Points for every $1 in grocery, restaurant and fast food purchases</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}