import { Routes as ReactRouter, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import { GetStarted, Home, Profile } from "../pages";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/get-started"
          element={isAuthenticated ? <Navigate to="/" /> : <GetStarted />}
        />
      </ReactRouter>
    </>
  );
};

export default Routes;
