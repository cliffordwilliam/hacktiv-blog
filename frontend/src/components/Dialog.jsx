import React from "react";
import { useSelector } from "react-redux";

export default function Dialog() {
  const { data, loading, error } = useSelector((state) => state.api);
  return (
    <dialog className={`p2 card w6 ${loading ? "transparent" : ""}`}>
      {data && <h2>Success</h2>}
      {error && <h2>Error</h2>}
      {loading && <div className="loader"></div>}
      {data && <p>{data.message}</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <button
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("dialog").close();
          }}
        >
          Close
        </button>
      )}
    </dialog>
  );
}
