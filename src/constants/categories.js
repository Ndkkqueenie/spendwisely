const incomeColors = ['#045de9', '#2a2a72', '#009ffd', '#36096d', '#0cbaba', '#37d5d6', '#36096d', '#1242C7', '#08277C', '#0937B5'];
const expenseColors = ['#B52609', '#B22D13', '#CE2908', '#D83F20', '#E21A1A', '#EF2828', '#F70303', '#FF1212', '#A80404', '#FD3A3A', '#A61C1C'];

export const incomeCategories = [
  {type: 'Business', amount: '0', color: incomeColors[0] },
  {type: 'Deposits', amount: '0', color: incomeColors[1] },
  {type: 'Extra Income', amount: '0', color: incomeColors[2] },
  {type: 'Gifts', amount: '0', color: incomeColors[3] },
  {type: 'Investments', amount: '0', color: incomeColors[4] },
  {type: 'Prizes', amount: '0', color: incomeColors[5] },
  {type: 'Rental Income', amount: '0', color: incomeColors[6] },
  {type: 'Salary', amount: '0', color: incomeColors[7] },
  {type: 'Savings', amount: '0', color: incomeColors[8] },
];

export const expenseCategories = [
  {type: 'Bills', amount: '0', color: expenseColors[0] },
  {type: 'Car', amount: '0', color: expenseColors[1] },
  {type: 'Clothes', amount: '0', color: expenseColors[2] },
  {type: 'Entertainment', amount: '0', color: expenseColors[3] },
  {type: 'Food', amount: '0', color: expenseColors[4] },
  {type: 'House Rent', amount: '0', color: expenseColors[5] },
  {type: 'Internet', amount: '0', color: expenseColors[6] },
  {type: 'Phone Airtime', amount: '0', color: expenseColors[7] },
  {type: 'Shopping', amount: '0', color: expenseColors[8] },
  {type: 'Travel', amount: '0', color: expenseColors[9] },
  {type: 'Other', amount: '0', color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
}
