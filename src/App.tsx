import { Provider } from 'react-redux'
import './App.css'

import Game from './game'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default App
