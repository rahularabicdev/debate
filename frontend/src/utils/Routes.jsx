import { Routes as ReactRouter, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import { GetStarted, Home } from "../pages";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route
          path="/get-started"
          element={isAuthenticated ? <Navigate to="/" /> : <GetStarted />}
        />
      </ReactRouter>
    </>
  );
};

export default Routes;
