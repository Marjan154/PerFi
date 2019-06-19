import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import store, {getMe} from './store/index';
import LoginComponent from './components/Login.jsx';
import Transaction from './components/AddTransaction.jsx';
import RegisterComponent from './components/Register';
import HomePage from './components/HomePage';

// Placeholder component
const DumbComponent = () => {return(<div></div>);};

const Main = withRouter(class extends Component {
  componentDidMount () {
    store.dispatch(getMe())
      .then(() => {
        this.props.history.push('/')
      })
  }

  // Primary route switching for app
  render () {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Home/" component={HomePage} />
        <Route path="/Transaction/" component={Transaction} />
        <Route path="/Budget/" component={DumbComponent} />
        <Route path="/Account/" component={LoginComponent}/>
        <Route path="/NewAccount/" component={RegisterComponent}/>
      </Switch>
    )
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root')
)
