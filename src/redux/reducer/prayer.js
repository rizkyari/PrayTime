import * as types from '../type';

const initialState = {
    data: false,
    location:false,
    error: null,
    isLoading: false,
};

export default function reducerPrayer(state = initialState, action){
    switch (action.type){
        case `${types.GET_PRAYER}_PENDING`:
            return{
                ...state,
                isLoading: true,
            };
        case `${types.GET_PRAYER}_FULFILLED`:
            return{
                ...state,
                data: action.payload.data.results.datetime[0],
                location: action.payload.data.results.location,
                isLoading : false,
            };
        case `${types.GET_PRAYER}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading : false,
            };
        default: return state;            
    }
}