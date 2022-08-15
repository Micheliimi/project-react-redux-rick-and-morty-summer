import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import './App.css';

class App extends React.Component {
  render() {
    const { redirect } = this.props;
    return (
      <div>
        {redirect && <Redirect from="/" to="/personagens" />}
        <Switch>
          <Route path="/personagens" component={ MainPage } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.user.redirect,
});

App.propTypes = {
  redirect: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
