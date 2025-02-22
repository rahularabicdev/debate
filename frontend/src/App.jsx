import { BrowserRouter } from "react-router";

import { Footer, Header } from "./components";
import Routes from "./utils/Routes";
import FetchUserData from "./utils/FetchUserData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <FetchUserData />

        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
