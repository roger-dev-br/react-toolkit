import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import marvel from '../../services/personagens';

// Criar o Async Thunk
export const buscarPersonagens = createAsyncThunk(
    // nome da ação ( livre )
    "personagens/todos",
    // método assincrono que vou utilizar
    async () => {
        // consumir a api da marvel
        return await marvel.obtemPersonagens();
    }
);

const personagemEstadoInicial = {
    list: {
        status: 'idle',
        data: [],
        error: null,
    }
};

// Criar o slice para os personagens
const personagemSlice = createSlice({
    name: 'personagens',
    initialState: personagemEstadoInicial,
    reducers: {},
    extraReducers: {
        // Enquanto a requisição está pendente
        // Altero o status para "carregando"
        [buscarPersonagens.pending.type]: (state, action) => {
            state.list = {
                status: 'loading',
                data: [],
                error: null,
            };
        },
        // Quando obtem a resposta da Marvel, altero o status para livre
        // Preencho a propriedade data com o retorno ( personagens )
        [buscarPersonagens.fulfilled.type]: (state, action) => {
            state.list = {
                status: 'idle',
                data: action.payload,
                error: null,
            };
        },
        // Quando ocorre uma excessão 
        [buscarPersonagens.rejected.type]: (state, action) => {
            state.list = {
                status: 'idle',
                data: [],
                error: action.error.message,
            };
        },
    }
});

// Exporto o status atual
export const personagemSelector = state => state.personagens;

// Exporto o reducer
export default personagemSlice.reducer;