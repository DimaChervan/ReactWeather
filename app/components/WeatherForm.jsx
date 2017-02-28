import React from 'react';

const WeatherForm = ({ onSubmitForm, onChangeCity, location }) => (
  <form onSubmit={onSubmitForm}>
    <input value={location} onChange={onChangeCity} />
    <input type="submit" value="Get Weather" />
  </form>
);

WeatherForm.propTypes = {
  onSubmitForm: React.PropTypes.func.isRequired,
  onChangeCity: React.PropTypes.func.isRequired,
  location: React.PropTypes.string
};

export default WeatherForm;
