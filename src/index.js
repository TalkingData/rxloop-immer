import produce from "immer";

export default function rxloopImmer() {
  return function init() {
    function createReducer(action = {}, reducer = () => {}) {
      return (state) => {
        const rtn = produce(state, draft => {
          const compatiableRet = reducer(draft, action);
          if (compatiableRet !== undefined) {
            // which means you are use redux pattern
            // it's compatiable. https://github.com/mweststrate/immer#returning-data-from-producers
            return compatiableRet;
          }
        });
        return rtn === undefined ? {} : rtn;
      }
    }
    this.createReducer = createReducer;
  };
};
