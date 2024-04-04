import { useState } from "react";
import { List } from "../components/List";
import { useFetch } from "../hooks/useFetch";
export const MainPage = () => {
  const [searchParam, setSearchParam] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<string>("");
  const { data, isLoading, error } = useFetch(
    `https://rickandmortyapi.com/api/character?name=${searchParam}&page=${page}&status=${status}`
  );

  if (error) {
    return (
      <div>
        <h3>Error!</h3>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl text-center mt-12 font-bold">
        The rick and morty API!
      </h1>
      <List
        data={data}
        setter={setSearchParam}
        setPage={setPage}
        page={page}
        setStatus={setStatus}
      ></List>
    </div>
  );
};
