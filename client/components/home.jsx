import React from 'react';
import Video from './video';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signees: null
    };
    this.goToPetition = this.goToPetition.bind(this);
    this.goToAbout = this.goToAbout.bind(this);
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

  goToPetition() {
    this.props.history.push('/sign-petition');
  }

  goToAbout() {
    this.props.history.push('/about');
  }

  render() {
    if (!this.state.signees) {
      return (<div>Loading</div>);
    }
    return (
      <>
        <div className="hero-banner">
          <div className="banner-text">
            <h1>UCSB Green Roof Initiative</h1>
            <span>Keep UCSB clean, make the roofs green</span>
          </div>
        </div>
        <div className="text-center home-sign-petition">
          <div className="row">
            <div className="inner-card">
              <h1>Sign the Petition</h1>
              <div>{this.state.signees.length} people have signed</div>
              <button onClick={this.goToPetition} className="transforming-button home-petition-button">
                <a className="text-center button-link" href="/sign-petition">Act Now</a></button>
            </div>
            <div className="inner-card">
              <h1>What we&apos;re about</h1>
              <div>Find out about green roofs</div>
              <button onClick={this.goToAbout} className="transforming-button home-petition-button">
                <a className="text-center button-link" href="/about">Learn More</a></button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center">Listen to our Podcast!</h2>
          <Video/>
        </div>
        <div className="text-center home-container">
          <h1 className="text-center home-header">
            Our Goal
          </h1>
          <main className="home-text">
            <div className="p-section">
              <p>
            UCSB Green Roofs is a campaign focused on making our campus more sustainable by incorporating green roofs on all applicable buildings.
              </p>
              <p>
            The vegetation on the roofs will range from edible gardens to simple grasses and plants that can be used as an outdoor classroom.
              </p>

            </div>
            <img className="ucsb-banner-img" src="./images/ucsbBanner.jpg" alt="UCSB banner" ></img>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
