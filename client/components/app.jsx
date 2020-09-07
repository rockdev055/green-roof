import React from 'react';
import Home from './home';
import SignForm from './sign-form';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';
import About from './about';
import Footer from './footer';

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
    if (!this.state.signees) {
      return (<div>Loading</div>);
    }
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={props => <Home history={props.history} signees={this.state.signees}/>}/>
            {/* <Route exact path="/" component={Home} signees={this.state.signees}/> */}
            <Route path="/sign-petition" component={SignForm} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
