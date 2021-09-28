import { removeToCounter, addToCounter } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
        case addToCounter:
            return state + 1;
        
        case removeToCounter:
            return state - 1;
  
        default:
            return state;
    }
  }
  
  export default reducerCounter;