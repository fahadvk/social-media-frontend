
import './App.css'
import { Provider } from 'react-redux'
import { CookiesProvider } from "react-cookie";
import { ChakraProvider } from "@chakra-ui/react";
import Routing from './Routes/Routers'
import Store from './store/index'

function App() {


  return (
    <Provider store={Store}>
      <ChakraProvider>
        <CookiesProvider>
            <Routing />
        </CookiesProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default App
