import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice.js'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispacth = useDispatch()

  return (

    <>
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className='App-logo' alt="logo" />
          <p>Count is: {counter}</p>
          <p>
            <button type='button' onClick={() => dispacth(increment())}>
              Increment
            </button>
            <button type='button' onClick={() => dispacth(decrement())}>
              Decrement
            </button>
            <button type='button' onClick={() => dispacth(incrementBy(2))}>
              Increment by 2
            </button>
          </p>
        </header>
      </div>
    </>
  )
}

export default App
