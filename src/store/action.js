import * as Constants from './constants';

export function saveReport(data) {
    return {
        type: Constants.SAVE_REPORT,
        data
    }
}