import { Routes as ReactRouter, Route } from "react-router";

import { GetStarted, Home } from "../pages";

const Routes = () => {
  return (
    <>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </ReactRouter>
    </>
  );
};

export default Routes;
