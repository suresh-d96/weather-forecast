import './App.css';
import "antd/dist/antd.css";
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './Container/HomeContainer';
import FutureReportContainer from './Container/FutureReportContainer';
import AirPollutionContainer from './Container/AirPollutionContainer';
import LayoutComponent from './Components/Layout/Layout';
import * as path from './utils/path';

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <Switch>
          <Route exact path={path.HOME} component={HomeContainer} />
          <Route path={path.FUTURE_REPORT} component={FutureReportContainer} />
          <Route path={path.POLLUTION_REPORT} component={AirPollutionContainer} />
        </Switch>
      </LayoutComponent>
    </div>
  );
}

export default App;
