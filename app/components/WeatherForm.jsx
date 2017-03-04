import React from 'react';

const WeatherForm = ({ onSubmitForm, onChangeCity, location }) => (
  <div>
    <form onSubmit={onSubmitForm}>
      <input type="search" placeholder="Search weather by city" value={location} onChange={onChangeCity} />
      <button className="button expanded hollow">Get Weather</button>
    </form>
  </div>
);

WeatherForm.propTypes = {
  onSubmitForm: React.PropTypes.func.isRequired,
  onChangeCity: React.PropTypes.func.isRequired,
  location: React.PropTypes.string
};

export default WeatherForm;
