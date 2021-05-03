import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || 
[{"amount":5000,"category":"Food","type":"Expense","date":"2021-05-03","id":"af582968-f4bd-45fc-9a93-0296bac90040"},
{"amount":2000,"category":"Internet","type":"Expense","date":"2021-05-02","id":"417224d9-575e-427c-8c39-fc81305563a5"},
{"amount":10000,"category":"Gifts","type":"Income","date":"2021-04-29","id":"af4b90b3-1d4b-4aa2-b8b5-1dff65030b9d"},
{"amount":50000,"category":"Prizes","type":"Income","date":"2021-05-03","id":"46da2edc-1bcf-410c-a6d9-142367a695ff"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action Creators
  const deleteTransaction = (id) => {
    dispatch({type: 'DELETE_TRANSACTION', payload: id});
  }

  const addTransaction = (transaction) => {
    dispatch({type: 'ADD_TRANSACTION', payload: transaction});
  }

  const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}