import React from 'react';
import Home from './home';
import SignForm from './sign-form';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';
import About from './about';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signees: null
    };
  }

  componentDidMount() {
    this.getPetitions();
  }

  getPetitions() {
    fetch('/api/signers')
      .then(response => response.json())
      .then(data => {
        this.setState({ signees: data });
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-petition" component={SignForm} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
