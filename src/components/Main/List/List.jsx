import React from 'react';
import { 
  List as MUIList, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  ListItemSecondaryAction, 
  IconButton, 
  Slide 
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 1000,
      date: "Sun May 01"
    },
    {
      id: 2,
      type: "Expenses",
      category: "Food",
      amount: 1000,
      date: "Sun May 02"
    },
    {
      id: 3,
      type: "Income",
      category: "Allowance",
      amount: 1500,
      date: "Sun May 03"
    }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`#${transaction.amount} - ${transaction.date}`}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List
