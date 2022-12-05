
import './App.css'
import Routing from './Routes/Routers'
import Store from './store/index'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux'
import { CookiesProvider } from "react-cookie";

function App() {


  return (
    <Provider store={Store}>
      <ChakraProvider>
        <CookiesProvider>
          {/* <div className="App"> */}
            <Routing />
          {/* </div> */}
        </CookiesProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default App
