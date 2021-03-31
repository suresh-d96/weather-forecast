import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import history from '../utils/history';
import * as path from '../utils/path';
import { APP_ID, WEATHER_API_URL } from '../utils/config';
import { Button, message } from 'antd';
import AirPollutionReport from '../Components/Reports/AirPollutionReport';

const AIR_QUALITY = {
    1: 'Good',
    2: 'Fair',
    3: 'Moderate',
    4: 'Poor',
    5: 'Very Poor'
}

const AirPollutionContainer = (props) => {
    const [pollutionReport, setReport] = useState({})

    useEffect(() => {
        fetch(`${WEATHER_API_URL}air_pollution?lat=${props.currentWeatherReport.lat}&lon=${props.currentWeatherReport.lon}&units=metric&appid=${APP_ID}`)
            .then(res => res.json())
            .then(result => {
                formatResult(result);
            })
            .catch(err => {
                message.warning('Error occurred while fetching data. Please try again.');
            })
    }, [props.currentWeatherReport.lat, props.currentWeatherReport.lon])

    const formatResult = (result) => {
        let finalRes = {
            ...result.list[0].components,
            airQuality: AIR_QUALITY[result.list[0].main.aqi]
        }
        setReport(finalRes);
    }

    const goBack = () => {
        history.push(path.HOME);
    }
    return (
        <div style={{ marginTop: '5%', marginBottom: '15%' }}>
            <AirPollutionReport report={props.currentWeatherReport} pollutionReport={pollutionReport} />
            <Button style={{ marginTop: '20px' }} size='large' type='primary' onClick={goBack}>Back to Home</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(AirPollutionContainer);