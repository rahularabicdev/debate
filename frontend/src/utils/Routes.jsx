import { BrowserRouter, Routes as ReactRouter, Route } from "react-router";

import { Home } from "../pages";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <ReactRouter>
          <Route path="/" element={<Home />} />
        </ReactRouter>
      </BrowserRouter>
    </>
  );
};

export default Routes;
