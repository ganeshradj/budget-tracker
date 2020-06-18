import React, {Component} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {connect} from 'react-redux';
import * as transactionActions from "../actions/transactionActions";
import { bindActionCreators } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  class Transactions extends Component {
  constructor(props) {
    super(props);
    this.selectedStartDate = new Date('2014-08-18T21:11:54');
    this.selectedEndDate = new Date('2014-08-18T21:11:54');
    this.handleStartDateChange=this.handleStartDateChange.bind(this);
    this.handleEndDateChange=this.handleEndDateChange.bind(this);
    this.Search=this.Search.bind(this);

  }
  componentDidMount() {
    this.props.actions.getAllTransaction();
  }
  handleStartDateChange(date) {
    this.selectedStartDate = date.target.value;
  };
  handleEndDateChange(date) {
    this.selectedEndDate = date.target.value;
  };
  Search() {
    this.props.actions.getAllTransaction(this.selectedStartDate,this.selectedEndDate);
  };
  render() {
    const items = this.props.transactions.transactions || this.props.transactions || [];
    return (
    <div>
        <Container maxWidth="sm">
          <Header title="Transaction" link="home"></Header>
          <form noValidate style={{margin: '5px 10px'}}>
            <TextField
              id="date"
              label="Start Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleStartDateChange}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleEndDateChange}
            />
            <Button style={{margin: '5px 10px'}} onClick={this.Search} variant="contained" color="primay">Search</Button>
          </form>          
          <TableContainer component={Paper}>
            <Table  size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Transaction Type</b></TableCell>
                  <TableCell align="right"><b>Amount</b></TableCell>
                  <TableCell align="right"><b>Date</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {items.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                    {row.transactionType == '1'? <Typography color="primary">INCOME</Typography>: row.transactionType == '2' ? <Typography color="secondary">EXPENSE</Typography>:  <Typography >RECURRING</Typography> }
                    </TableCell>
                    <TableCell align="right">MYR {row.amount}</TableCell>
                    <TableCell align="right">{row.createdOn.substr(0,10)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
    </div>    
  );}
}

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transaction.transactions,
  };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(transactionActions, dispatch),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Transactions);
