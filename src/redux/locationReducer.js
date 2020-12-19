const initialState = {
  location: {latitude: 0, longitude: 0},
};
const location_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION': {
      return {...state, location: action.location};
    }
    default: {
      return state;
    }
  }
};
export default location_reducer;
