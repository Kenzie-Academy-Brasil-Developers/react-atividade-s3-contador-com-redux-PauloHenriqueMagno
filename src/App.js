import './App.css';
import { useDispatch,useSelector } from "react-redux"
import { remove_count, add_count } from "./store/modules/counter/actions"

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const handleRemoveCount = () => dispatch(remove_count())
  const handleAddCount = () => dispatch(add_count())

  return (
    <div className="App">
      <p>{counter}</p>
      <div className="Counter">
        <button onClick={handleRemoveCount}>-</button>
        <button onClick={handleAddCount}>+</button>
      </div>
    </div>
  );
}

export default App;
