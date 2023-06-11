import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet.',
      imgSrc: 'https://example.com/profile.jpg',
      profession: 'Software Developer',
    },
    show: false,
    mountedTime: new Date(),
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since component mounted: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
