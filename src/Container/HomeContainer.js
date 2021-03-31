import React from 'react';
import SearchComponent from '../Components/Search/SearchComponent';
import WeatherCard from '../Components/Reports/WeatherCard';
import { connect } from 'react-redux';
import * as actions from '../store/action';
import { Button } from 'antd';
import history from '../utils/history';
import * as path from '../utils/path';

class HomeContainer extends React.Component {

    navigateToPollution = () => {
        history.push(path.POLLUTION_REPORT);
    }
    navigateToFutureReports = () => {
        history.push(path.FUTURE_REPORT);
    }

    render() {
        return <div>
            <SearchComponent saveReport={this.props.saveReport} />
            <WeatherCard report={this.props.currentWeatherReport} />
            {Object.keys(this.props.currentWeatherReport).length > 0 ?
                <div style={{
                    marginTop: '20px',
                    marginBottom: '6%',
                    textAlign: 'right',
                    marginRight: '20%'
                }}>
                    <Button onClick={this.navigateToPollution} style={{ marginRight: '10px' }} size={'large'} type='primary'>Get Air Pollution report</Button>
                    <Button onClick={this.navigateToFutureReports} size={'large'} type='primary'>Get Future Weather reports</Button>
                </div>
                : ''}
        </div>
    }
}

const mapStateToProps = state => {
    return state;
}
const mapDispatchToProps = dispatch => {
    return {
        saveReport: (report) => dispatch(actions.saveReport(report))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);