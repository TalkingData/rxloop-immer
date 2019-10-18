# rxloop-immer
https://github.com/TalkingData/rxloop/tree/master/packages/immer

> rxloop immer plugin

## Usage

```javascript
import rxloop from '@rxloop/core';
import immer from '@rxloop/immer';

const app = rxloop({
  plugins: [ immer() ],
});

app.model({
  name: 'commnet',
  state: {
    list: [],
  },
  reducers: {
    add(state) {
      state.list.push({ id: 1, txt: 'text' });
    },
  },
});
```

