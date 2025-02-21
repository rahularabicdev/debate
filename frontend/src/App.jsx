import { BrowserRouter } from "react-router";

import { Header } from "./components";
import Routes from "./utils/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
