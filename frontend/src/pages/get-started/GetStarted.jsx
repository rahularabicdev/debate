import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

const GetStarted = () => {
  const [page, setPage] = useState("login");

  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="flex justify-center w-full max-w-[800px] mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full grid grid-cols-2">
              {page === "login" ? (
                <Login setPage={setPage} />
              ) : (
                <Register setPage={setPage} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
