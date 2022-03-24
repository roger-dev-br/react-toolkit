import api from './apiBlog';

class Posts {
    async obtem() {
        const resposta = await api.get(`/posts`);
        return resposta.data;
    }

    async obtemPorId(id) {
        const resposta = await api.get(`/posts/${id}`);
        return resposta.data;
    }

    async updatePorId(id, objeto) {
        const resposta = await api.put(`/posts/${id}`, objeto);
        return resposta.data;
    }

    async removePorId(id) {
        const resposta = await api.delete(`/posts/${id}`);
        return resposta.data;
    }
}

export default new Posts();