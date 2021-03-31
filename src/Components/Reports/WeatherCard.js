import React from 'react';
import './style.css';
import { Statistic, Row, Col, Card } from 'antd';
import { ICON_URL } from '../../utils/config';

const gridStyle = {
    width: '50%',
    textAlign: 'center',
};

const WeatherCard = (props) => {
    let code;
    if (Object.keys(props.report).length > 0 && props.report.icon !== '') {
        code = `${ICON_URL}${props.report.icon}.png`;
    }
    return (

        <div >
            {Object.keys(props.report).length > 0 ?
                <>
                    <p className='titleCard' >Weather Report</p>
                    <Card title={`${props.report.city}, ${props.report.country} - ${props.report.date}`}>
                        <Card.Grid style={gridStyle}>
                            <div id='tempIcon'>
                                <img style={{ marginLeft: props.from === 'future' ? '40%' : '' }} src={code} alt='Logo' height='100' width='100' /><br />
                                {props.report.cloud}
                            </div>
                            <Row gutter={16} style={{ marginTop: "10%" }}>
                                <Col span={24}>
                                    <Statistic title="Temperature" suffix={'\u00B0C'} value={props.report.temp} />
                                </Col>
                                <Col span={24}>
                                    <Statistic title="Humidity" value={props.report.humidity} suffix={'%'} />
                                </Col>

                            </Row>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <Row gutter={16} style={{ marginTop: "5%" }}>
                                <Col span={24}>
                                    <Statistic title="Feels like" value={props.report.feel} suffix={'\u00B0C'} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Pressure" value={props.report.pressure} suffix={'Hpa'} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Wind" value={props.report.wind} suffix={'Km/hr'} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Sunrise" value={props.report.sunrise} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Sunset" value={props.report.sunset} />
                                </Col>

                            </Row>
                        </Card.Grid>
                    </Card>
                </>
                : ''}
        </div>
    )
}

export default WeatherCard;