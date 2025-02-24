import { BrowserRouter } from "react-router";

import { Footer, Header } from "./components";
import Routes from "./utils/Routes";
import FetchUserData from "./utils/FetchUserData";
import { socket } from "./utils/Socket";

const App = () => {
  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id);
  });

  socket.on("connect_error", (err) => {
    console.log(err.message);
    console.log(err.description);
    console.log(err.context);
  });

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
