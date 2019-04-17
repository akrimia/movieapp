const MinRate = "";

function Rate(state = MinRate, action) {
  if (action.type === "SET_RATE_FILTER") {
    return action.rate;
  }
  return state;
}

export default Rate;
