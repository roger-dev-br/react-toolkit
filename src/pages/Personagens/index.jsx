import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { personagemSelector, buscarPersonagens } from "./personagemSlice";

const Personagem = (props) => {
  const dispatch = useDispatch();
  // Busco o estado atual do meu slice ( lista de personagens )
  const { list } = useSelector(personagemSelector);

  return (
    <div>
      <button onClick={() => dispatch(buscarPersonagens())}>
        Fetch personagem players
      </button>
      <p>API status: {list.status}</p>
      <div>
        {list.data.map((hero) => (
          <div style={{ display: "flex" }} key={hero.id}>
            <p>Name: {hero.name}</p>
          </div>
        ))}

        {list.error && <h1>Ocorreu o erro: {list.error} </h1>}
      </div>
    </div>
  );
};

export default Personagem;
