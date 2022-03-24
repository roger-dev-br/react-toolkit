import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOne, updateOne, removeOne } from "./postSlice";

export default function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postRedux = useSelector((state) => state.post);
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(getOne(id));
  }, [id, dispatch]);

  useEffect(() => {
    setData(postRedux);
  }, [postRedux]);

  return (
    <>
      <div>{data.id}</div>
      <div>
        <input
          type="text"
          value={data.title}
          onChange={(e) =>
            setData({
              ...data,
              title: e.target.value,
            })
          }
        />
      </div>

      <div>
        <button onClick={(e) => dispatch(updateOne(id, data))}>Salvar</button>
        <button onClick={(e) => dispatch(removeOne(id))}>Remover</button>
      </div>
    </>
  );
}
