import React from 'react';
import { connect } from 'react-redux';
import history from '../utils/history';
import * as path from '../utils/path';
import { APP_ID, WEATHER_API_URL } from '../utils/config';
import { Button, Carousel, message } from 'antd';
import WeatherCard from '../Components/Reports/WeatherCard';
import './style.css';
import { formatTime, getDateFromUnix, convertWindSpeed } from '../utils/commonFunctions';
import {PropagateLoader} from 'react-spinners';

const contentStyle = {
    height: '100%',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};

class FutureReportContainer extends React.Component {
    state = {
        reports: []
    }
    componentDidMount() {
        fetch(`${WEATHER_API_URL}onecall?lat=${this.props.currentWeatherReport.lat}&lon=${this.props.currentWeatherReport.lon}&units=metric&appid=${APP_ID}`)
            .then(res => res.json())
            .then(result => {
                let reports = this.formatReport(result);
                this.setState({ reports: reports });
            })
            .catch(err => {
                message.warning('Error occurred while fetching data. Please try again.');
            })
    }
    formatReport = (result) => {
        let reports = [];

        result.daily.forEach(ele => {
            const { description, icon } = ele.weather[0];

            let report = {
                cloud: description,
                city: this.props.currentWeatherReport.city,
                country: this.props.currentWeatherReport.country,
                icon: icon,
                temp: ele.temp.day,
                humidity: ele.humidity,
                feel: ele.feels_like.day,
                pressure: ele.pressure,
                wind: convertWindSpeed(ele.wind_speed),
                sunrise: formatTime(ele.sunrise),
                sunset: formatTime(ele.sunset),
                date: getDateFromUnix(ele.sunrise).toDateString()
            }
            reports.push(report);
        })
        return reports;
    }
    goBack = () => {
        history.push(path.HOME);
    }
    render() {
        return (
            <div style={{ marginTop: '4%', marginBottom: '10%' }}>
                {this.state.reports.length > 0 ? <Carousel style={{ height: '600px' }}  >

                    {this.state.reports.map((ele, index) => {
                        return <div key={index} style={{ ...contentStyle, marginTop: '20px', marginBottom: '20px' }}>
                            <WeatherCard from='future' style={contentStyle} report={ele} />
                        </div>
                    })}

                </Carousel>
                    : <div style={{height:'600px', paddingTop:'15%'}}>
                        <PropagateLoader color={'blue'} loading={true} css={{display: 'block'}} size={15} />
                    </div>}
                <Button size='large' type='primary' onClick={this.goBack}>Back to Home</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(FutureReportContainer);