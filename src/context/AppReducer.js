export default (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        colorName: action.payload
      };
    case "ADDTO":
      return {
        ...state,
        alreadyDone: [...state.alreadyDone, action.payload]
      };
    default:
      return state;
  }
};
