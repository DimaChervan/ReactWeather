import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  state = {
    city: ''
  }

  onChangeCity = (event) => {
    this.setState({city: event.target.value});
  }

  onSearch = (event) => {
    event.preventDefault();

    const location = encodeURIComponent(this.state.city);
    if (location.length > 0) {
      this.setState({city: ''});
      window.location.hash = `#/?location=${location}`;
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city"  value={this.state.city} onChange={this.onChangeCity} />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
