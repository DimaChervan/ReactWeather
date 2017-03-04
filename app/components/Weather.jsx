import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
  state = {
    location: '',
    isLoading: false
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const location = this.state.location;
    this.handleSearch(location);
  }

  handleSearch(location) {
    if (location.length > 0) {
      this.setState({
        isLoading: true,
        errorMessage: undefined
      });
      getTemp(location)
        .then(temp => this.setState({temp, isLoading: false}))
        .catch(err => {
          this.setState({
            isLoading: false,
            errorMessage: err.message
          });
        });
    }
  }

  handleChangeCity = (event) => {
    const location = event.target.value;
    this.setState({location});
  }

  componentDidMount() {
    const location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.setState({location});
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.setState({location});
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render() {
    const {temp, location, isLoading, errorMessage} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (location && typeof temp === 'number') {
        return <WeatherMessage location={location} temp={temp} />
      }
    };

    const renderError = () => {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage} />
      }
    };

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm
          onSubmitForm={this.handleSubmitForm}
          onChangeCity={this.handleChangeCity}
          location={location} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
