import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'openWeatherMap';

class Weather extends React.Component {
  state = {
    location: '',
    isLoading: false
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const location = this.state.location;
    if (location.length > 0) {
      this.setState({isLoading: true});
      getTemp(location)
        .then(temp => this.setState({temp, isLoading: false}))
        .catch(err => {
          console.log(err);
          this.setState({isLoading: false});
        });
    }
  }

  handleChangeCity = (event) => {
    const location = event.target.value;
    this.setState({location});
  }

  render() {
    const {temp, location, isLoading} = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />
      }
    };

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm
          onSubmitForm={this.handleSubmitForm}
          onChangeCity={this.handleChangeCity}
          location={location} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
