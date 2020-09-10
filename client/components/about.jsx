import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="home-banner-container">
        </div>
        <div className="why-container green-roof-info-container">
          <h1 className="why-title">What are Green Roofs?</h1>
          {/* <img src="./images/green-roof-graphic.png"></img> */}
          {/* <div className="green-roof-diagram"></div> */}
          <div>poop</div>
        </div>
        <div className="why-container">
          <h1 className="why-title">Why Respond</h1>
          <section className="why-info-container">
            <div className="why-info">
              <i className="fas fa-cloud-rain"></i>
              <span className="why-text">Reduce water runoff to improve the health of the aquatic environment near campus.</span>
            </div>
            <div className="why-info">
              <i className="fas fa-utensils"></i>
              <span className="why-text">Lower food costs for dining halls to benefit the university and students.</span>
            </div>
            <div className="why-info">
              <i className="fas fa-hamburger"></i>
              <span className="why-text">Promote food security among college students. About 48% of UCSB students are food insecure.</span>
            </div>
            <div className="why-info">
              <i className="far fa-smile-beam"></i>
              <span className="why-text">Bring positive attention to UCSB and showcase the innovative spirit of our students and commitment to sustainability.</span>
            </div>
            <div className="why-info">
              <i className="fas fa-book"></i>
              <span className="why-text">Green Roofs can be used as interactive classrooms to enchance learning in subjects such as ecology and botany.</span>
            </div>
            <div className="why-info">
              <i className="far fa-building"></i>
              <span className="why-text">Reduces carbon emissions coming from the buildings and would coincide with UCSB&apos;s zero carbon emissions initiative.</span>
            </div>
            <div className="why-info">
              <i className="fas fa-sun"></i>
              <span className="why-text">Green Roofs help reduce the heat island effect and keep the campus cooler.</span>
            </div>
          </section>
        </div>
        <div>
          <div className="why-container">
            <h1 className="why-title">Who we&apos;ll support</h1>
            <section className="support-container">
              <div className="support-card">
                <img className="support-img"src="./images/AS-Food-bank.jpg"></img>
                <div className="text-center">Food Bank</div>
              </div>
              <div className="support-card">
                <img className="support-img" src="./images/ucsbenvs.png"></img>
                <div className="text-center">Students</div>
              </div>
              <div className="support-card">
                <img className="support-img" src="./images/greenFund.jpg"></img>
                <div className="text-center">UCSB Green Fund Initiative</div>
              </div>
              <div className="support-card">
                <img className="support-img" src="./images/roofgarden.jpg"></img>
                <div className="text-center">The community!</div>
              </div>
            </section>
          </div>
        </div>
        <div className="home-container">
          <h2 className="home-text">Our Plans</h2>
          <div className="plans-text-container">
            <div className="text-center">
              Through garnering attention and educating what our proposition is about, we can work to improve UCSB together.
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;
