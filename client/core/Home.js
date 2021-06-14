import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AccountBalance, CreditCard } from '@material-ui/icons'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import environmentImg from './../assets/images/Environment.jpg'
import BackgroundImg from './../assets/images/fall-background.jpg'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    // backgroundImage: `url(${BackgroundImg})`,
    backgroundImage: 'url(https://thumbs.dreamstime.com/b/banking-business-banner-finance-savings-bank-building-silhouette-city-background-vector-illustration-84498181.jpg)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    padding: 85
  },
  card: {
    maxWidth: '85%',
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  head: {
    padding: '20px 8px'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
  },
  servicesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'no-wrap',
    margin: '16px 0'
  },
  banksContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'no-wrap',
    margin: '16px 0'
  },
  service: {
    display: 'inline-flex',
    width: '40%',
    maxWidth: 400,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: 8,
  },
  serviceName: {
    fontSize: 16,
    display: 'inline-block',
    marginTop: 8
  },
  bank: {
    display: 'inline-flex',
    width: '40%',
    maxWidth: 200,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: 8,
  },
  active: {
    backgroundColor: '#FB8C00'
  },
  boxImg: {
    display: 'block',
    width: 35,
    height: 35,
    margin: '8px 0',
    objectFit: 'contain'
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#3f4771'
    }
  }
}))

const banks = [
  {
    id: 1,
    name: 'RBC Royal Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/1200px-RBC_Royal_Bank.svg.png'
  },
  {
    id: 2,
    name: 'TD Canada Trust',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1144px-Toronto-Dominion_Bank_logo.svg.png'
  },
  {
    id: 3,
    name: 'CIBC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/CIBC_logo.svg/657px-CIBC_logo.svg.png'
  },
  {
    id: 4,
    name: 'Scotia Bank',
    logo: 'https://i.pinimg.com/originals/85/31/87/853187c0fb9a07d26e905f4f509b37b6.png'
  },
  {
    id: 5,
    name: 'BMO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/BMO_Harris_Logo.png'
  },
]

export default function Home({ history }) {
  const classes = useStyles()
  const [defaultPage, setDefaultPage] = useState(false)
  const [active, setActive] = useState(null);

  useEffect(() => {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen(() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

  return (
    <div className={classes.root}>
      {!defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <div className={classes.head}>
                <Typography variant="h4" className={classes.title}>
                  Find the best bank account and Credit Card for you
                </Typography>
                <Typography variant="h6" className={classes.description}>
                  Tailor-fit your search, make the Genius choice, and get rewarded faster.


                </Typography>
              </div>
              <div className={classes.servicesContainer}>
                <Card
                  className={`${classes.service} ${active === 'new' ? classes.active : undefined}`}
                  //onClick={() => setActive('new')}
                  onClick={() => history.push(`/tablecheq`)}
                >
                  <AccountBalance />
                  <Typography className={classes.serviceName}>New Bank Account</Typography>
                </Card>
                <Card
                  className={`${classes.service} ${active === 'card' ? classes.active : undefined}`}
                  //onClick={() => setActive('card')}
                  onClick={() => history.push(`/table`)}
                >
                  <CreditCard />
                  <Typography className={classes.serviceName}>Credit Card</Typography>
                </Card>
              </div>
              <div className={classes.banksContainer}>
                {banks.map(bank => (
                  <Card
                    key={bank.id}
                    className={classes.bank}
                    onClick={() => history.push(`/tablecheq?bank=${bank.id}`)}                  >
                    <img className={classes.boxImg} src={bank.logo} />
                    <Typography>{bank.name}</Typography>
                  </Card>
                ))}

              </div>
            </Card>
          </Grid>
        </Grid>
      }
      {defaultPage &&
        <Grid container spacing={8}>
          <Grid item xs={8} sm={7}>
            <Newsfeed />
          </Grid>
          <Grid item xs={6} sm={5}>
            <FindPeople />
          </Grid>
        </Grid>
      }
    </div>
  )
}
