# Toolkit

## Instalar as Dependencias
```
yarn add @reduxjs/toolkit react-redux
```

## Criar as pastas e configurações do toolkit conforme pattern
```
    -> /store
        ..slices
        -> index.js
        -> rootReducer.js
```

## Criar store e slices

## Criar o counterSlice.js
```javascript
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default slice.reducer;
```

## Configurar rootReducer.js
```javascript
import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../pages/Counter/counterSlice';

const reducer = combineReducers({
    counter: counterReducer,
});

export default reducer;
```

### /store/index.js
```javascript
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
```

## Configurar STORE no App
```javascript
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import { Counter } from './pages/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
```

## Tornar página dinamica