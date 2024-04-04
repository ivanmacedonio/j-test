import React, { FormEvent, SetStateAction, useRef } from "react";
import { Character, Data } from "../types";
import DropdownComponent from "./Dropdown";
interface ListProps {
  data: Data;
  setter: React.Dispatch<SetStateAction<string>>;
  setPage: React.Dispatch<SetStateAction<number>>;
  setStatus: React.Dispatch<SetStateAction<string>>;
  page: number;
}

export const List: React.FC<ListProps> = ({
  data,
  setter,
  setPage,
  page,
  setStatus,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      setter(inputRef.current.value);
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-12">
        <form onSubmit={handleSubmit} className="w-half">
          <input
            ref={inputRef}
            type="text"
            className="bg-gray-200 w-full rounded outline-none text-xl p-1 "
          />
        </form>
      </div>
      <div className="flex justify-center items-center mt-12">
        <DropdownComponent setStatus={setStatus}></DropdownComponent>
      </div>

      <ul className="grid grid-cols-2 max-w-80 m-auto mt-12 gap-4">
        {data.results.map((character: Character) => (
          <li
            key={character.id}
            className="shadow-md flex justify-center flex-col p-4"
          >
            <img
              src={character.image}
              alt="character-image"
              className="rounded mb-4"
            />
            <h4 className="font-semibold text-lg">{character.name}</h4>
            <div className="flex items-center gap-1">
              <div
                className={
                  character.status === "Alive"
                    ? "w-3 h-3 bg-green-500 rounded-xl"
                    : "w-3 h-3 bg-red-500 rounded-xl"
                }
              ></div>

              <h4>{character.status}</h4>
            </div>
            <p>{character.species}</p>
          </li>
        ))}
      </ul>
      <div className=" flex flex-col justify-center items-center my-24">
        <h5 className="text-2xl mb-6">Page {page}</h5>
        <div className="flex gap-4">
          {page > 1 && (
            <button
              className="text-lg bg-blue-200 px-4 py-2 font-semibold rounded shadow-sm cursor-pointer"
              onClick={() => {
                setPage(page - 1);
                window.scrollTo(0, 0);
              }}
            >
              Previous
            </button>
          )}
          <button
            className="text-lg bg-blue-200 px-4 py-2 font-semibold rounded shadow-sm cursor-pointer"
            onClick={() => {
              setPage(page + 1);
              window.scrollTo(0, 0);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
