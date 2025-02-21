import { Routes as ReactRouter, Route } from "react-router";

import { Home } from "../pages";

const Routes = () => {
  return (
    <>
      <ReactRouter>
        <Route path="/" element={<Home />} />
      </ReactRouter>
    </>
  );
};

export default Routes;
