import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter/counterSlice.js'

function App() {

  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>count is {counter}</h1>
      <div className="card">

        <button onClick={() => dispatch(increment())}>
          increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>

        <button onClick={() => dispatch(incrementByAmount(2))}>
          incrementByAmount
        </button>

      </div>
    </>
  )
}

export default App
