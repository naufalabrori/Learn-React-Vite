/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.searchChange(search);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div className="flex">
        <p className="text-md pt-1">Cari Artikel: </p>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={onSearchKeyDown}
          className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button onClick={onSearchChange} className="bg-blue-500 p-1 rounded text-white">Search</button>
        <br />
      </div>
      <small className="text-xs">Ditemukan {props.totalPost} data</small>
    </>
  );
}
