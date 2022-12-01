
import './App.css'
import Routing from './Routes/Routers'
import Store from './store/index'
import { Provider } from 'react-redux'

function App() {


  return (
    <Provider store={Store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  )
}

export default App
