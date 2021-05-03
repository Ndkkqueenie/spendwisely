import { makeStyles } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: blue[600],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[600],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));