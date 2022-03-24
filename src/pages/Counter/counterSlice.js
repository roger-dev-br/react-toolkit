import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        // minha função para incrementar
        increment: state => {
            // incrementar o initialState.value + 1
            state.value += 1;
        },
        decrement: state => {
            if (state.value > 0) {
                state.value--;
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

// exportando as ações
export const { increment, decrement, incrementByAmount } = slice.actions;

// Seletor que disponibiliza o estado atual do contador
export const selectCount = state => state.counter.value;

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 3000);
}

export default slice.reducer;