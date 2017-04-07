import React, { Component, PropTypes } from 'react';
import { LineChart, XAxis, CartesianGrid, Line, YAxis, Tooltip } from 'recharts';
import moment from 'moment';


export default class Chart extends Component {

  static propsTypes = {
    weather: PropTypes.object.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return !this.props.weather.some((item, idx) => item.temp !== nextProps.weather[idx].temp);
  }


  getArrayOfWeek(array) {
    const today = moment().locale('ru');
    const days = [];

    for (let i = 0; i <= 6; i += 1) {
      days.push({
        name: moment(today).add(i, 'days').format('D'),
        day: Math.round(array[i].temp.day - 273.15),
        night: Math.round(array[i].temp.night - 273.15),
      });
    }

    return days;
  }


  render() {
    const { weather } = this.props;

    return (
      <LineChart width={340} height={300} data={this.getArrayOfWeek(weather)}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Line type="monotone" dataKey="day" stroke="#8884d8" />
        <Line type="monotone" dataKey="night" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
