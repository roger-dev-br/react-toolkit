import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// Criando um Entity Adapter para gerenciar meu cadastro de produtos
const adapter = createEntityAdapter({
    // aqui eu digo do meu produto, qual o identificador único
    selectId: produto => produto.id,
});

// Exporta os Selectores que leem o Estado
export const { selectAll, selectById } =
    adapter.getSelectors(state => state.produtos);

// Cria o slice e os reducers
const produtosSlice = createSlice({
    name: 'produtos',
    initialState: adapter.getInitialState([]),
    reducers: {
        addProduto: adapter.addOne,
        removerProduto: adapter.removeOne
    }
});

export const { addProduto, removerProduto } = produtosSlice.actions;

export default produtosSlice.reducer;

/*
produto = {
    id: 1,
    name: 'Refrigerante 2 litros',
};
*/