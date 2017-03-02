import React from 'react';

const WeatherMessage = ({location, temp}) => (
  <h3 className="text-center">It's it {temp} in {location}</h3>
);

WeatherMessage.propTypes = {
  location: React.PropTypes.string.isRequired,
  temp: React.PropTypes.number.isRequired
};

export default WeatherMessage;
