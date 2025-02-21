import { BrowserRouter } from "react-router";

import { Footer, Header } from "./components";
import Routes from "./utils/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
