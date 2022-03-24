import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../pages/Counter/counterSlice';
import personagensReducer from '../pages/Personagens/personagemSlice';
import produtos from '../pages/Produto/produtoSlice';
import posts from '../pages/Posts/postsSlice';
import post from '../pages/Posts/postSlice';

// Combino os reducers
const reducer = combineReducers({
    counter: counterReducer,
    personagens: personagensReducer,
    produtos,
    posts,
    post,
});

export default reducer;