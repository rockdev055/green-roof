import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero-banner">
          <div className="banner-text">
            <h1>UCSB Green Roof Initiative</h1>
            <span>Keep UCSB clean, make the roofs green</span>
          </div>
        </div>
        <div className="text-center home-container">

          <h1 className="">
          Our Goal
          </h1>
          <main className="home-text">
            <p>
            UCSB Green Roofs is a campaign focused on making our campus more sustainable by incorporating green roofs on all applicable buildings.
            </p>
            <p>
            The vegetation on the roofs will range from edible gardens to simple grasses and plants that can be used as an outdoor classroom.
            </p>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
