import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.cardHeader} title="SpendWisely" subheader="Track my expenses for better financial goal" />
      <CardContent>
        <Typography align="center" variant="h6">Total Balance #2000</Typography>
        <Typography variant="subtitle2" style={{lineHeight: '1.5em', marginTop: '20px' }}>
          {/* InfoCard */}
          Try saying: Add income for #500 in Category Salary for Monday ...
        </Typography>
        <Divider />
        {/* Form */}
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main;
