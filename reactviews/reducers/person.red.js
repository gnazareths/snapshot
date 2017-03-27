import * as personAction from '../actions/person.action'

const initialState = {
    contacts: [],
    contact: null
}

function personReducer(state = initialState, action) {
    switch (action.type) {
        case personAction.FETCH_DESTINATION_WEATHER_SUCCESS:
        return state;
    }
    return state;
}

export default personReducer;