import "./App.css";

import { ACTIONS, initialState } from "./utils/constants";

import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationsButton";
import OutputBox from "./components/outputBox";
import { reducer } from "./utils/reducer";
import { useReducer } from "react";

function App() {
  const [ { currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='calculator-grid'>
      <OutputBox
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <button className="span-two" onClick={() => dispatch({
        type: ACTIONS.CLEAR,
        payload: { digit: "", operation: "" }
      })}>AC</button>
      <button  onClick={() => dispatch({
        type: ACTIONS.DELETE,
        payload: { digit: "", operation: "" }
      })}> DEL </button>
      <OperationButton operation={"/"} dispatch={dispatch} />
      <DigitButton digit={"1"} dispatch={dispatch} />
      <DigitButton digit={"2"} dispatch={dispatch} />
      <DigitButton digit={"3"} dispatch={dispatch} />
      <OperationButton operation={"*"} dispatch={dispatch} />
      <DigitButton digit={"4"} dispatch={dispatch} />
      <DigitButton digit={"5"} dispatch={dispatch} />
      <DigitButton digit={"6"} dispatch={dispatch} />
      <OperationButton operation={"+"} dispatch={dispatch} />
      <DigitButton digit={"7"} dispatch={dispatch} />
      <DigitButton digit={"8"} dispatch={dispatch} />
      <DigitButton digit={"9"} dispatch={dispatch} />
      <OperationButton operation={"-"} dispatch={dispatch} />
      <DigitButton digit={"."} dispatch={dispatch} />
      <DigitButton digit={"0"} dispatch={dispatch} />
      <button className="span-two" onClick={() => dispatch({
        type: ACTIONS.EVALUATE,
        payload: { digit: "", operation: "" }
      })}> = </button>
    </div>
  )
}

export default App
