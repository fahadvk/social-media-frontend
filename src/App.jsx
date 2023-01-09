import "./App.css";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";
import Routing from "./Routes/Routers";
import Store from "./Store/Index";
import Loader from "./Shared/Loader/Loader";

function App() {
  return (
    <Provider store={Store}>
      <ChakraProvider>
        <Loader />
        <Routing />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
