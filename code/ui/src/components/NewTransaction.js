import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators, compose } from 'redux';
import * as transactionActions from "../actions/transactionActions";
import * as amountActions from "../actions/amountActions";
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

const styles = theme => {
  return ({root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    },
    sub:{
      justifyContent: 'center',
    },
    menuButton: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '20px auto',  
    },
    title: {
      flexGrow: 1,
    }})
  };
  class NewTransaction extends Component {
    constructor(props) {
      super(props);
      this.amount = 0;
      this.AddTrancation = this.AddTrancation.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.TrancationChange= this.TrancationChange.bind(this);
     
    }  
    
    TrancationChange(event) {
      this.transactiontype = event.target.value;
    };  
    handleChange(event) {
      this.amount = event.target.value;
    };
     AddTrancation(e){
      if(!this.transactiontype){
        alert("Select Transaction Type")
        return;
      }
       if(!this.amount){
         alert("Enter Amount")
         return;
       }       
      this.props.transactionActions.AddTransaction({
        "transactionType": Number.parseInt(this.transactiontype),
        "amount": this.amount
      })
      alert("Transaction Added")
    }
  render() {
    const { classes } = this.props;
    return  (
    <div className={classes.root}>
      <div className={classes.sub}>
      <Typography variant="h6">
            New Transaction
        </Typography>
        <FormControl component="fieldset">
            <RadioGroup row aria-label="transactiontype" name="transactiontype" onChange={this.TrancationChange}>
                <FormControlLabel value="2" control={<Radio />} label="Expense" />
                <FormControlLabel value="1" control={<Radio />} label="Income" />
                <FormControlLabel value="3" control={<Radio />} label="Recurring" />
            </RadioGroup>
            <TextField type="number" id="outlined-basic" onChange={this.handleChange} label="Amount" variant="outlined" />
            <Button className={classes.menuButton} onClick={this.AddTrancation} variant="contained" color="primary">Add Transaction</Button>
        </FormControl>
      </div>
    </div>        
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    transactionActions: bindActionCreators(transactionActions, dispatch),
      amountActions: bindActionCreators(amountActions, dispatch)
  };
}
export default compose(
  withStyles(styles),
  connect(null,mapDispatchToProps),
)(NewTransaction);