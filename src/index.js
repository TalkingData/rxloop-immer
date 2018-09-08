import produce from "immer";

export default function rxloopImmer(
  conf = {},
) {
  const config = {
    disabled: [],
    ...conf,
  };
  return function init() {
    function createReducer(action = {}, reducer = () => {}, model = '') {
      return config.disabled.indexOf(model) > -1 ?
      (state) => reducer(state, action) :
      (state) => produce(state, draft => {
        reducer(draft, action);
      });
    }
    this.createReducer = createReducer;
  };
};
