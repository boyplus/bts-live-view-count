import { UPDATE_SETTING } from '../actions/types';

const INIT_STATE = {
    sortBy: 'view',
};
export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case UPDATE_SETTING:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
