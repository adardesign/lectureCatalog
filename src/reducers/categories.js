export default function categories(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "FOLLOW-SPEAKER":
      console.log("FOLLOW-SPEAKER is running")
      return state;
      break;
    default:
      
  }
  return state;
};