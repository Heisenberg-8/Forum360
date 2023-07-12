import { createStore } from 'redux';

const initialState = {
  dataList: [
    { username: "Roger Vaccaro", question: "Do fixed income investments on a 30-year period have higher returns?" },
    { username: "Aarin Kachroo", question: "Do fixed income investments on a 30-year period have higher returns?" },
    { username: "Alice Smith", question: "What is the impact of climate change on agriculture?" }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA_LIST':
      return {
        ...state,
        dataList: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
