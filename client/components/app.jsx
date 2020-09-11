import React from 'react';
import Home from './home';
import SignForm from './sign-form';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';
import About from './about';
import Footer from './footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={props => <Home history={props.history} />}/>
            <Route path="/sign-petition" component={SignForm} />
            <Route path="/about" component={About} />
          </Switch>

        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
