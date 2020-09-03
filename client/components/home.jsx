import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="hero-banner"></div>
        <div className="text-center home-container">

          <h1>
          UCSB Green Roof Initiative
          </h1>
          <div className="home-banner-container">
            {/* <img src="./images/grFront.png" alt="home banner" className="home-banner"></img> */}
          </div>
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
