/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export default function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <div className="my-3 p-5 border border-gray-500 w-1/4 rounded-lg shadow-xl bg-white hover:bg-gray-100 hover:cursor-pointer">
        <h3>{props.title}</h3>
        <small>Date: {props.date}</small>
        <br />
        <small>Tags: {props.tags.join(", ")}</small>
        <div>
          <small>Ditulis oleh : {user.username}</small>
        </div>
      </div>
    </>
  );
}
