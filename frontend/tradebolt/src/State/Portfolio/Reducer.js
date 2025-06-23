import { UPDATE_TOTAL_INVESTED } from "./ActionTypes";

const initialState = {
    totalInvested: 0,
  };
  
  const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TOTAL_INVESTED:
        return {
          ...state,
          totalInvested: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default portfolioReducer;