import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import './App.css';
class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     password: '',
  //     username: '',
  //     redirect: false,
  //   };
  // }

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  // sendAction = () => {
  //   const { redirect } = this.state;
  //   this.setState(!redirect)

  // }

  render() {
    const { username, password, redirect } = this.state;
    return (
      <div>
        {redirect && <Redirect from="/" to="/personagens"  />}
        <Switch>
          {/* <Route exact path="/" component={ Login } /> */}
          {/* <Route path="/personagens" component={ MainPage } /> */}
          <Route
            exact
            path="/"
            render={ (props) => (<Login
              { ...props }
              username={ username }
              password = { password }
              handleChange={ this.handleChange }
              sendAction={ () => this.setState({ redirect: true }) }
            />) }
          />
          <Route path="/personagens" render={ (props) => (<MainPage
            { ...props }
            username={ username }
            />) }
          />
        </Switch>
      </div>

    );
  }
}

export default App;
