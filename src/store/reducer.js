import * as Constants from './constants';
const initialState = {
    currentWeatherReport: {}
}

const reducer = (state, action) => {
    if (!state) {
        return initialState;
    }
    switch (action.type) {
        case Constants.SAVE_REPORT:
            return { ...state, currentWeatherReport: action.data }
        default:
            return state;
    }
}

export default reducer;