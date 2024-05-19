const initialState = {
  company: [],
};

const userControlsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPANY":
      return {
        ...state,
        company: action.payload,
      };
    case "GET_COMPANY_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userControlsReducers;
