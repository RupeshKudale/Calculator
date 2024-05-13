import { ACTIONS } from "../utils/constants"
import { CalculatorAction } from "../utils/types"

interface OperatinButtonProps {
    dispatch:  React.Dispatch<CalculatorAction>,
    operation: string
}
function OperationButton({dispatch, operation}: OperatinButtonProps) {
  return (
    <button
    onClick={() => dispatch({
        type: ACTIONS.CHOOSE_OPERATION,
        payload: { operation, digit: "" }
    })}
    > {operation} </button>
  )
}

export default OperationButton