import produce from "immer";

export default function rxloopImmer() {
  return function init() {
    function createReducer(action = {}, reducer = () => {}) {
      return (state) => produce(state, draft => {
        reducer(draft, action);
      });
    }
    this.createReducer = createReducer;
  };
};
