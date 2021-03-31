import React from 'react';
import { Form, Input, Button, message } from 'antd';
import './style.css';
import { APP_ID, WEATHER_API_URL } from '../../utils/config';
import { formatTime, getDateFromUnix, convertWindSpeed } from '../../utils/commonFunctions';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

const SearchComponent = (props) => {

    const onFinish = (values) => {
        fetch(`${WEATHER_API_URL}weather?q=${values.cityName}&units=metric&appid=${APP_ID}`)
            .then(res => res.json())
            .then(result => {
                let report = formatReport(result);
                props.saveReport(report);
            })
            .catch(err => {
                message.warning('Invalid City name. Please enter a valid city name and try again.');
            })
    };

    const formatReport = (result) => {
        const { country, sunrise, sunset } = result.sys;
        const { lat, lon } = result.coord;

        const report = {
            cloud: result.weather[0].description,
            city: result.name,
            country: country,
            icon: result.weather[0].icon,
            temp: result.main.temp,
            humidity: result.main.humidity,
            feel: result.main.feels_like,
            pressure: result.main.pressure,
            wind: convertWindSpeed(result.wind.speed),
            sunrise: formatTime(sunrise),
            sunset: formatTime(sunset),
            lat: lat,
            lon: lon,
            date: getDateFromUnix(sunrise).toDateString()
        }
        return report;
    }
    return (
        <div style={{ marginTop: '3%' }}>
            <Form
                {...layout}
                name="basic"
                size='large'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Enter the Location"

                    name="cityName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input city name!',
                        },
                    ]}
                >
                    <Input placeholder='City name...' />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Get Weather Report
                </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default SearchComponent;