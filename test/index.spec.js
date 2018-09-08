import rxloop from '@rxloop/core';
import immer from '../src/';

const app = rxloop({
  plugins: [ immer() ],
});

const state = {
  a: 1,
  arr: [1],
};

app.model({
  name: 'test',
  state,
  reducers: {
    add(state) {
      state.a = 2;
    },
    arr(state) {
      state.arr.push(2);
    },
  },
});
app.stream('test').subscribe();

describe('Basic usage', () => {
  test('immer number', () => {
    app.dispatch({
      type: 'test/add',
    });
    expect(state).toEqual({
      a: 1,
      arr: [1],
    });
    expect(app.getState('test')).toEqual({
      a: 2,
      arr: [1],
    });
  });
  test('immer array', () => {
    app.dispatch({
      type: 'test/arr',
    });
    expect(state).toEqual({
      a: 1,
      arr: [1],
    });
    expect(app.getState('test')).toEqual({
      a: 2,
      arr: [1, 2],
    });
  });
});
