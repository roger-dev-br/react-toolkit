import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiBlog from '../../services/posts';

// Crio o Thunk para buscar o post pelo ID
export const getOne = createAsyncThunk('blog/getOne', async (id) => {
    // Busco na API o Post do ID específico
    return await apiBlog.obtemPorId(id);
});

// Cria um Async Thunk para atualizar
export const updateOne = createAsyncThunk('blog/updateOne',
    async (id, data) => {
        return await apiBlog.updatePorId(id, data);
    }
);

// Crio um Async Thunk para remover por id
export const removeOne = createAsyncThunk('blog/removeOne',
    async (id) => {
        return await apiBlog.removePorId(id);
    }
);

// Slice do POST
const postSlice = createSlice({
    name: 'post',
    initialState: {},
    reducers: {},
    extraReducers: {
        [getOne.fulfilled]: (state, action) => action.payload,
    }
});

export default postSlice.reducer;