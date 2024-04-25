import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counter/counterSlice.js'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispacth = useDispatch()

  return (

    <>
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className='App-logo' alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button type='button' onClick={() => dispacth( increment() )}>
              count is: {counter}
            </button>
          </p>
        </header>
      </div>
    </>
  )
}

export default App
