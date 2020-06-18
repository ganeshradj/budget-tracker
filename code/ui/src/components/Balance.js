import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import * as amountActions from "../actions/amountActions";
import { bindActionCreators, compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  return ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),  
        padding: theme.spacing(2)      
      }
    },
    title: {
      flexGrow: 1,
    }});
  };

  class Balance extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.getAmount()
  }
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <Paper elevation={6}>
          <Typography variant="h6" color="primary">
          Balance
          </Typography>
          <Typography variant="h4" color="primary">
          MYR {this.props.totalamount.balance}
          </Typography>
      </Paper>
      <Paper elevation={6} >
              <Typography variant="h6" color="#002884">
              Income
              </Typography>
              <Typography variant="h4" color="#002884">
              MYR {this.props.totalamount.income}
              </Typography>
        </Paper>

        <Paper elevation={6}>
              <Typography variant="h6" color="secondary">
              Expense
              </Typography>
              <Typography variant="h4" color="secondary">
              MYR {this.props.totalamount.expense}
              </Typography>
        </Paper>
    </div>    
  );}
}

function mapStateToProps(state, ownProps) {
  return {
    totalamount: state.amount.totalamount,
  };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(amountActions, dispatch),
      
  };
}
export default compose(
  withStyles(styles),
  connect(mapStateToProps,mapDispatchToProps),
)(Balance);
