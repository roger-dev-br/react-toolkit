import { createEntityAdapter, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiBlog from '../../services/posts';

const adapter = createEntityAdapter({
    selectId: post => post.id,
});

// Crio o Asynk Thunk para buscar todos os Posts
export const getAll = createAsyncThunk(
    'blog/posts',
    async () => {
        // consulta a API do blog
        const resposta = await apiBlog.obtem();
        return resposta;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: adapter.getInitialState([]),
    reducers: {},
    extraReducers: {
        // quando o thunk fica completo envio para o estado todos posts
        [getAll.fulfilled]: adapter.setAll,
    }
});

export default postsSlice.reducer;

// Aqui eu exponho uma forma de observa o meu estado
export const { selectAll } = adapter.getSelectors(state => state.posts);
