// this is not mapping to a state
export default function collections(state = [], action) {
  console.log("Collections STATE-IS---",JSON.stringify(state), action);
  switch (action.type) {
    case "FOLLOW-SPEAKER":
      console.log("FOLLOW-SPEAKER is running");
      return [...state, {
        id:"11",
        "name":"test"
      }];
      // return state;
      break;
    case "ADD-SPEAKER":
        console.log("ADD speaker is running");
        console.log(state);
        return [...state, {
          id:"11",
          "name":"test"
        }];
        break;
    default:
      
  }
  return state;
};