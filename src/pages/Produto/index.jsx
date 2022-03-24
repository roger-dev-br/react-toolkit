import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduto, removerProduto, selectAll } from "./produtoSlice";

export default function Produto() {
  const produtosToolkit = useSelector(selectAll);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(produtosToolkit);
  }, [produtosToolkit]);

  function add() {
    dispatch(addProduto({
        id: 1,
        name: 'Agua Mineral'
    }));
  }

  function add2() {
    dispatch(addProduto({
        id: 2,
        name: 'Cerveja Skol'
    }));
  }

  function remover(id) {
      dispatch(removerProduto(id));
  }

  return (
    <>
      <h1>Produtos</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Descrição</th>
          <th>Ação</th>
        </thead>
        <tbody>
          {data.map((produto) => (
            <tr>
              <td>{produto.id}</td>
              <td>{produto.name}</td>
              <td><button onClick={() => remover(produto.id)}>Remover</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={(e) => add()}>Adicionar produto 1</button>
      <button onClick={(e) => add2()}>Adicionar produto 2</button>
    </>
  );
}
