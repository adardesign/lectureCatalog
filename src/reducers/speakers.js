export default function speakers(state = [], action) {
  console.log("speaker STATE-IS---",JSON.stringify(state), action);
  switch (action.type) {
    case "FOLLOW-SPEAKER":
      console.log("FOLLOW-SPEAKER is running");
      return [...state, {
        id:Math.random()*100,
        "name":Math.random()*100
      }];
      // return state;
      break;
    case "ADD-SPEAKER":
        console.log("ADD speaker is running");
        console.log(state);
        return [...state, {
          id:Math.random()*100,
          "name":Math.random()*100
        }];
        break;
    default:
      
  }
  return state;
};