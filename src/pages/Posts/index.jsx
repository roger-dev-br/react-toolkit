import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAll, getAll } from "./postsSlice";

export default function Posts() {
  // crio uma observação no meu estado de posts
  const postsToolkit = useSelector(selectAll);
  // crio uma variável local para os posts
  const [data, setData] = useState([]);
  // o dispatch para as requisições
  const dispatch = useDispatch();

  // UseEffect do load da página
  // Ele vai chamar o AsyncThunk e consumir a api do blog
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  // Quando obtem a resposta do blog
  // é alterado postsToolkit e seto eles no estado local
  useEffect(() => {
    setData(postsToolkit);
  }, [postsToolkit]);

  return (
    <>
      <table>
        <thead>
          <th>Nome</th>
          <th>Ação</th>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>
                <Link to={`posts/${post.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
