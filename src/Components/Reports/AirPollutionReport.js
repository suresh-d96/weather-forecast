import React from 'react';
import './style.css';
import { Statistic, Row, Col, Card } from 'antd';
import { PropagateLoader } from 'react-spinners';

const gridStyle = {
    width: '50%',
    textAlign: 'center',
};

const AirPollutionReport = (props) => {
    const particulates = <p>Particulates (PM<sub>2.5</sub> and PM<sub>10</sub>)</p>;
    const pollutionSuffix = <p>μg/m<sup>3</sup></p>

    return (

        <div >
            {Object.keys(props.pollutionReport).length > 0 ?
                <>
                    <p className='titleCard' >Air Pollution Report</p>
                    <Card title={`${props.report.city}, ${props.report.country} - ${props.report.date}`}>
                        <Card.Grid style={gridStyle}>
                            <Row gutter={16} style={{ marginTop: "5%" }}>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Air quality" value={props.pollutionReport.airQuality} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Carbon monoxide" value={props.pollutionReport.co} suffix={pollutionSuffix} precision={2} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Nitrogen monoxide" suffix={pollutionSuffix} value={props.pollutionReport.no} precision={2} />
                                </Col>
                                <Col style={{ marginTop: "5px" }} span={24}>
                                    <Statistic title="Nitrogen dioxide" value={props.pollutionReport.no2} suffix={pollutionSuffix} precision={2} />
                                </Col>

                            </Row>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <Row gutter={16} style={{ marginTop: "5%" }}>

                                <Col span={24}>
                                    <Statistic title="Sulphur dioxide" value={props.pollutionReport.so2} suffix={pollutionSuffix} precision={2} />
                                </Col>
                                <Col span={24}>
                                    <Statistic title="Ammonia" value={props.pollutionReport.nh3} suffix={pollutionSuffix} precision={2} />
                                </Col>
                                <Col span={24}>
                                    <Statistic title="Ozone" value={props.pollutionReport.o3} suffix={pollutionSuffix} precision={2} />
                                </Col>
                                <Col span={24}>
                                    <Statistic title={particulates} value={props.pollutionReport.pm2_5 + props.pollutionReport.pm10} suffix={pollutionSuffix} precision={2} />
                                </Col>

                            </Row>
                        </Card.Grid>
                    </Card>
                </>
                : <div style={{ height: '600px', paddingTop: '15%' }}>
                    <PropagateLoader color={'blue'} loading={true} css={{ display: 'block' }} size={15} />
                </div>}
        </div>
    )
}

export default AirPollutionReport;