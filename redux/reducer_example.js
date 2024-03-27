
// initial wagon state (the 'store')
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
};

// Redux reducer setting wagon to be default state with action parameter
const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case "travel": {
      if (state.supplies < 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies - 20,
        distance: state.distance + 10,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      };
    }
    case "sell": {
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5
      };
    }
    case "buy": {
      if (state.cash < 15) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15
      };
    }
    case "theft": { 
      if (state.cash < 0) {
        return state;
      }
      return {
        ...state,
        cash: state.cash / 2
      };
    }
    default:
      return state;
  }
};

// test
// initialise reducer with undefined state and an empty action
let wagon = reducer(undefined, {});
console.log(wagon); 
/* 
{ supplies: 100, distance: 0, days: 0 }
*/

wagon = reducer(wagon, {type: "travel", payload: 1});
console.log(wagon);
/*
{ supplies: 80, distance: 10, days: 1 }
*/

wagon = reducer(wagon, {type: "gather"});
console.log(wagon);
/*
{ supplies: 95, distance: 10, days: 2 }
*/ 

wagon = reducer(wagon, {type: "tippedWagon"});
console.log(wagon);
/*
{ supplies: 65, distance: 10, days: 3 }
*/ 

wagon = reducer(wagon, {type: "travel", payload: 3});
console.log(wagon);
/* 
{ supplies: 45, distance: 20, days: 6 }
*/
