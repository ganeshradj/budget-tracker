import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Balance from '../components/Balance';
import NewTransaction from '../components/NewTransaction';
class Home extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
            <div>
                <Container maxWidth="sm">
                    <Header title="Budget Tracker" link="transactions"></Header>
                    <Balance></Balance>
                    <NewTransaction></NewTransaction>
                </Container>
            </div>
		)
	}
};

export default Home;