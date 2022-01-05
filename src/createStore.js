

function createStore(reducer){
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  function getState(){
    return state;
  }
  
  return{dispatch,
  getState}
}

let store=createStore(reducer);
store.dispatch({type:"@@init"})
let button = document.getElementById("button");

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}



function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}



button.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});
